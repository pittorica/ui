import React, { createContext, use, useState } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { Card, type CardProps } from '@pittorica/card-react';
import type { PittoricaColor } from '@pittorica/text-react';

interface CheckboxCardContextValue {
  value: string[];
  onItemChange: (val: string) => void;
  color?: PittoricaColor;
  disabled?: boolean;
  translucent?: boolean;
}

const CheckboxCardContext = createContext<CheckboxCardContextValue | null>(
  null
);

export interface CheckboxCardRootProps extends Omit<BoxProps, 'onChange'> {
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  orientation?: 'horizontal' | 'vertical';
  color?: PittoricaColor;
  disabled?: boolean;
  translucent?: boolean;
}

const CheckboxCardRoot = ({
  value: controlledValue,
  defaultValue = [],
  onValueChange,
  orientation = 'vertical',
  color = 'indigo',
  disabled,
  translucent,
  children,
  className,
  ...props
}: CheckboxCardRootProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  const handleItemChange = (itemValue: string) => {
    const nextValue = currentValue.includes(itemValue)
      ? currentValue.filter((v) => v !== itemValue)
      : [...currentValue, itemValue];

    if (!isControlled) setInternalValue(nextValue);
    onValueChange?.(nextValue);
  };

  return (
    <CheckboxCardContext
      value={{
        value: currentValue,
        onItemChange: handleItemChange,
        color,
        disabled,
        translucent,
      }}
    >
      <Box
        className={clsx('pittorica-checkbox-card-root', className)}
        data-orientation={orientation}
        role="group"
        {...props}
      >
        {children}
      </Box>
    </CheckboxCardContext>
  );
};

export interface CheckboxCardItemProps extends CardProps {
  value: string;
}

const CheckboxCardItem = ({
  value,
  children,
  className,
  style,
  translucent: itemTranslucent,
  ...props
}: CheckboxCardItemProps) => {
  const context = use(CheckboxCardContext);
  if (!context)
    throw new Error('CheckboxCard.Item must be used within CheckboxCard.Root');

  const isTranslucent = itemTranslucent ?? context.translucent;
  const isChecked = context.value.includes(value);

  const isSemantic =
    context.color !== 'inherit' &&
    !context.color?.startsWith('#') &&
    !context.color?.startsWith('rgb');

  const resolvedColor = isSemantic
    ? `var(--pittorica-${context.color}-9)`
    : context.color;

  return (
    <Card
      {...props}
      as="label"
      translucent={isTranslucent}
      className={clsx('pittorica-checkbox-card-item', className)}
      data-state={isChecked ? 'checked' : 'unchecked'}
      data-disabled={context.disabled}
      style={
        {
          '--_checkbox-card-color': resolvedColor,
          ...style,
        } as React.CSSProperties
      }
    >
      <input
        type="checkbox"
        className="pittorica-checkbox-card-input"
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
        checked={isChecked}
        disabled={context.disabled}
        onChange={() => context.onItemChange(value)}
      />
      {children}
    </Card>
  );
};

export const CheckboxCard = Object.assign(CheckboxCardRoot, {
  Item: CheckboxCardItem,
});

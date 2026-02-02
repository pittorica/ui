import {
  createContext,
  type ReactNode,
  type Ref,
  use,
  useMemo,
  useState,
} from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

interface RadioCardContextType {
  value?: string;
  onValueChange: (value: string) => void;
  color: PittoricaColor;
  disabled?: boolean;
}

const RadioCardContext = createContext<RadioCardContextType | null>(null);

const useRadioCardContext = () => {
  const context = use(RadioCardContext);
  if (!context)
    throw new Error(
      'RadioCard components must be wrapped in <RadioCard.Root />'
    );
  return context;
};

export interface RadioCardRootProps extends BoxProps {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** @default 'indigo' */
  color?: PittoricaColor;
  disabled?: boolean;
  /** Number of columns. @default '1' */
  columns?: string;
}

const RadioCardRoot = ({
  children,
  value: controlledValue,
  defaultValue,
  onValueChange,
  color = 'indigo',
  disabled,
  columns = '1',
  className,
  style,
  ...props
}: RadioCardRootProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : uncontrolledValue;

  const handleValueChange = (newValue: string) => {
    if (!isControlled) setUncontrolledValue(newValue);
    onValueChange?.(newValue);
  };

  const contextValue = useMemo(
    () => ({
      value: currentValue,
      onValueChange: handleValueChange,
      color,
      disabled,
    }),
    [currentValue, color, disabled]
  );

  return (
    <RadioCardContext value={contextValue}>
      <Box
        {...props}
        role="radiogroup"
        className={clsx('pittorica-radio-card-root', className)}
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gap: 'var(--pittorica-space-3)',
          ...style,
        }}
      >
        {children}
      </Box>
    </RadioCardContext>
  );
};

export interface RadioCardItemProps extends BoxProps {
  value: string;
  disabled?: boolean;
}

const RadioCardItem = ({
  children,
  value: itemValue,
  disabled: itemDisabled,
  className,
  style,
  ref,
  ...props
}: RadioCardItemProps & { ref?: Ref<HTMLButtonElement> }) => {
  const {
    value,
    onValueChange,
    color,
    disabled: groupDisabled,
  } = useRadioCardContext();

  const isChecked = value === itemValue;
  const isDisabled = groupDisabled || itemDisabled;

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  return (
    <Box
      {...props}
      as="button"
      type="button"
      role="radio"
      aria-checked={isChecked}
      data-state={isChecked ? 'checked' : 'unchecked'}
      disabled={isDisabled}
      className={clsx('pittorica-radio-card-item', className)}
      onClick={() => !isDisabled && onValueChange(itemValue)}
      ref={ref}
      style={
        {
          '--pittorica-source-color': resolvedColor,
          ...style,
        } as React.CSSProperties
      }
    >
      {children}
    </Box>
  );
};

export const RadioCard = {
  Root: RadioCardRoot,
  Item: RadioCardItem,
};

RadioCardRoot.displayName = 'RadioCard.Root';
RadioCardItem.displayName = 'RadioCard.Item';

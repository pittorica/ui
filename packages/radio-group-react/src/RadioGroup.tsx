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
import { Radio, type RadioProps } from '@pittorica/radio-react';
import type { PittoricaColor } from '@pittorica/text-react';

interface RadioGroupContextType {
  value?: string;
  onValueChange: (value: string) => void;
  color: PittoricaColor;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextType | null>(null);

const useRadioGroupContext = () => {
  const context = use(RadioGroupContext);
  if (!context)
    throw new Error('RadioGroup components must be wrapped in <RadioGroup />');
  return context;
};

export interface RadioGroupProps extends BoxProps {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** @default 'indigo' */
  color?: PittoricaColor;
  disabled?: boolean;
}

/**
 * RadioGroup orchestrates multiple Radio items.
 */
export const RadioGroup = ({
  children,
  value: controlledValue,
  defaultValue,
  onValueChange,
  color = 'indigo',
  disabled,
  className,
  ...props
}: RadioGroupProps) => {
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
    <RadioGroupContext value={contextValue}>
      <Box
        {...props}
        role="radiogroup"
        className={clsx('pittorica-radio-group-root', className)}
      >
        {children}
      </Box>
    </RadioGroupContext>
  );
};

export interface RadioGroupItemProps extends Omit<
  RadioProps,
  'checked' | 'onCheckedChange'
> {
  value: string;
}

/**
 * An item within a RadioGroup.
 */
export const RadioGroupItem = ({
  value: itemValue,
  disabled: itemDisabled,
  ref,
  ...props
}: RadioGroupItemProps & { ref?: Ref<HTMLButtonElement> }) => {
  const {
    value,
    onValueChange,
    color,
    disabled: groupDisabled,
  } = useRadioGroupContext();

  const isChecked = value === itemValue;
  const isDisabled = groupDisabled || itemDisabled;

  return (
    <Radio
      {...props}
      ref={ref}
      color={color}
      checked={isChecked}
      disabled={isDisabled}
      onCheckedChange={() => onValueChange(itemValue)}
    />
  );
};

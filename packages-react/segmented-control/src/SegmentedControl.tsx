import {
  createContext,
  type ReactNode,
  type Ref,
  RefObject,
  use,
  useMemo,
  useState,
} from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

interface SegmentedControlContextType {
  value?: string;
  onValueChange: (value: string) => void;
  color: PittoricaColor;
  disabled?: boolean;
}

const SegmentedControlContext =
  createContext<SegmentedControlContextType | null>(null);

const useSegmentedControlContext = () => {
  const context = use(SegmentedControlContext);
  if (!context)
    throw new Error(
      'SegmentedControl components must be wrapped in <SegmentedControl.Root />'
    );
  return context;
};

export interface SegmentedControlRootProps extends BoxProps {
  children: ReactNode;
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  /** @default 'indigo' */
  color?: PittoricaColor;
  disabled?: boolean;
}

const SegmentedControlRoot = ({
  children,
  value: controlledValue,
  defaultValue,
  onValueChange,
  color = 'indigo',
  disabled,
  className,
  ...props
}: SegmentedControlRootProps) => {
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
    <SegmentedControlContext value={contextValue}>
      <Box
        {...props}
        role="radiogroup"
        className={clsx('pittorica-segmented-control-root', className)}
      >
        {children}
      </Box>
    </SegmentedControlContext>
  );
};

export interface SegmentedControlItemProps extends BoxProps {
  value: string;
  disabled?: boolean;
}

const SegmentedControlItem = ({
  children,
  value: itemValue,
  disabled: itemDisabled,
  className,
  style,
  ref,
  ...props
}: SegmentedControlItemProps & { ref?: Ref<HTMLButtonElement> }) => {
  const {
    value,
    onValueChange,
    color,
    disabled: groupDisabled,
  } = useSegmentedControlContext();

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
      className={clsx('pittorica-segmented-control-item', className)}
      onClick={() => !isDisabled && onValueChange(itemValue)}
      ref={ref as RefObject<HTMLButtonElement>}
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

export const SegmentedControl = {
  Root: SegmentedControlRoot,
  Item: SegmentedControlItem,
};

SegmentedControlRoot.displayName = 'SegmentedControl.Root';
SegmentedControlItem.displayName = 'SegmentedControl.Item';

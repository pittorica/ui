import { type CSSProperties, type Ref, RefObject, useState } from 'react';

import { clsx } from 'clsx';

import { IconToggleLeft, IconToggleRight } from '@tabler/icons-react';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

export interface SwitchProps extends Omit<BoxProps, 'children' | 'onChange'> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  /** @default 'indigo' */
  color?: PittoricaColor;
}

/**
 * Switch component for binary toggling.
 */
export const Switch = ({
  checked: controlledChecked,
  defaultChecked,
  onCheckedChange,
  disabled,
  color = 'indigo',
  className,
  style,
  ref,
  ...props
}: SwitchProps & { ref?: Ref<HTMLButtonElement> }) => {
  const [uncontrolledChecked, setUncontrolledChecked] = useState(
    defaultChecked ?? false
  );

  const isControlled = controlledChecked !== undefined;
  const isChecked = isControlled ? controlledChecked : uncontrolledChecked;

  const handleToggle = () => {
    if (disabled) return;
    if (!isControlled) setUncontrolledChecked(!isChecked);
    onCheckedChange?.(!isChecked);
  };

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  return (
    <Box
      {...props}
      as="button"
      type="button"
      role="switch"
      aria-checked={isChecked}
      data-state={isChecked ? 'checked' : 'unchecked'}
      disabled={disabled}
      onClick={handleToggle}
      className={clsx('pittorica-switch-root', className)}
      ref={ref as RefObject<HTMLButtonElement>}
      style={
        {
          '--pittorica-source-color': resolvedColor,
          ...style,
        } as CSSProperties
      }
    >
      <span className="pittorica-switch-thumb">
        {isChecked ? (
          <IconToggleRight size={12} stroke={2.5} />
        ) : (
          <IconToggleLeft size={12} stroke={2.5} />
        )}
      </span>
    </Box>
  );
};

Switch.displayName = 'Switch';

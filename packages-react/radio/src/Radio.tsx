import { type CSSProperties, type Ref, RefObject } from 'react';

import { clsx } from 'clsx';

import { IconCircle, IconCircleCheckFilled } from '@tabler/icons-react';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

export interface RadioProps extends Omit<BoxProps, 'onChange'> {
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  /** @default 'indigo' */
  color?: PittoricaColor;
  value?: string;
  onCheckedChange?: (checked: boolean) => void;
  ref?: Ref<HTMLButtonElement>;
}

/**
 * Primitive Radio component.
 */
export const Radio = ({
  checked,
  disabled,
  color = 'indigo',
  className,
  style,
  onCheckedChange,
  ref,
  ...props
}: RadioProps) => {
  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  return (
    <Box
      {...props}
      as="button"
      type="button"
      role="radio"
      aria-checked={checked}
      data-state={checked ? 'checked' : 'unchecked'}
      disabled={disabled}
      className={clsx('pittorica-radio-root', className)}
      onClick={() => !disabled && onCheckedChange?.(!checked)}
      ref={ref as RefObject<HTMLButtonElement>}
      style={
        {
          '--pittorica-source-color': resolvedColor,
          ...style,
        } as CSSProperties
      }
    >
      {checked ? (
        <IconCircleCheckFilled size={14} />
      ) : (
        <IconCircle size={14} opacity={0.5} />
      )}
    </Box>
  );
};

Radio.displayName = 'Radio';

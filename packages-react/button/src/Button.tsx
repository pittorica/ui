import React from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

export interface ButtonProps extends BoxProps {
  /** * The visual style of the button.
   * @default 'filled'
   */
  variant?: 'filled' | 'tonal' | 'outlined' | 'elevated' | 'text';
  /** * The height and padding of the button.
   * @default 'sm'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** * The primary color of the button.
   * @default 'indigo'
   */
  color?: PittoricaColor;
  /** * Whether the button is interactive.
   * @default false
   */
  disabled?: boolean;
}

/**
 * Button component following Material Design 3 guidelines.
 * Supports 5 variants, 5 sizes, and interactive state layers.
 */
export const Button = ({
  children,
  variant = 'filled',
  size = 'sm',
  color = 'indigo',
  disabled = false,
  className,
  style,
  ...props
}: ButtonProps) => {
  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');

  return (
    <Box
      as={props.href ? 'a' : 'button'}
      {...props}
      disabled={disabled}
      aria-disabled={disabled}
      className={clsx(
        'pittorica-button',
        `pittorica-button--${variant}`,
        `pittorica-button--${size}`,
        className
      )}
      style={
        {
          ...style,
          '--pittorica-source-color': isSemantic
            ? `var(--pittorica-${color}-9)`
            : color,
          '--pittorica-on-source-color': '#ffffff',
        } as React.CSSProperties
      }
    >
      {children}
    </Box>
  );
};

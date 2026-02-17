import React from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

export interface ButtonProps extends BoxProps {
  /** @default 'filled' */
  variant?: 'filled' | 'tonal' | 'outlined' | 'elevated' | 'text';
  /** @default 'sm' */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** @default 'indigo' */
  color?: PittoricaColor;
  /** @default false */
  disabled?: boolean;
}

/**
 * Button component integrated with Pittorica Dynamic Tokens.
 * Supports automated contrast mapping and tonal scales.
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

  // Logic: Map semantic tokens or fallback to raw color value
  const buttonVariables = {
    '--pittorica-button-color': isSemantic
      ? `var(--pittorica-${color}-9)`
      : color,
    '--pittorica-button-on-color': isSemantic
      ? `var(--pittorica-on-${color}-9)`
      : 'var(--pittorica-white)',

    // Tonal Scales: Uses Step 3 and Step 11 calculated tokens
    '--pittorica-button-soft-bg': isSemantic
      ? `var(--pittorica-${color}-3)`
      : `color-mix(in srgb, ${color} 15%, var(--pittorica-white))`,
    '--pittorica-button-soft-text': isSemantic
      ? `var(--pittorica-${color}-11)`
      : `color-mix(in srgb, ${color} 80%, var(--pittorica-black))`,

    ...style,
  } as React.CSSProperties;

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
      style={buttonVariables}
    >
      {children}
    </Box>
  );
};

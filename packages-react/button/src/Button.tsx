import React from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

export interface ButtonProps extends BoxProps {
  /** @default 'filled' */
  variant?: 'filled' | 'tonal' | 'outlined' | 'elevated' | 'text';
  /** @default 'indigo' */
  color?: PittoricaColor;
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = 'filled',
  color = 'indigo',
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
      className={clsx(
        'pittorica-button',
        `pittorica-button--${variant}`,
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

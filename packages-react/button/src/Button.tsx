import React, { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

export type ButtonProps<E extends ElementType = 'button'> = BoxProps<E> & {
  /** @default 'filled' */
  variant?: 'filled' | 'tonal' | 'outlined' | 'elevated' | 'text';
  /** @default 'sm' */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /** @default 'indigo' */
  color?: PittoricaColor;
  /** @default false */
  disabled?: boolean;
  /**
   * The theme appearance of the popover content.
   */
  appearance?: 'light' | 'dark' | 'inherit';
};

/**
 * Button component integrated with Pittorica Dynamic Tokens.
 * Fully polymorphic and agnostic foundation.
 */
export const Button = <E extends ElementType = 'button'>({
  children,
  variant = 'filled',
  size = 'sm',
  color = 'indigo',
  disabled = false,
  appearance,
  className,
  style,
  as,
  ...props
}: ButtonProps<E>) => {
  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');

  const buttonVariables = {
    '--pittorica-button-color': isSemantic
      ? `var(--pittorica-${color}-9)`
      : color,
    '--pittorica-button-on-color': isSemantic
      ? `var(--pittorica-on-${color}-9)`
      : 'var(--pittorica-white)',

    '--pittorica-button-soft-bg': isSemantic
      ? `var(--pittorica-${color}-3)`
      : `color-mix(in srgb, ${color} 15%, var(--pittorica-white))`,
    '--pittorica-button-soft-text': isSemantic
      ? `var(--pittorica-${color}-11)`
      : `color-mix(in srgb, ${color} 80%, var(--pittorica-black))`,

    ...style,
  } as React.CSSProperties;

  // Logic: determine tag based on presence of 'as' or props like 'href' (if agnostic box logic allows)
  const Tag = as || (props.href ? 'a' : 'button');

  return (
    <Box
      /* Explicitly link Tag and Generic E for type safety */
      as={Tag as ElementType}
      {...(props as BoxProps<E>)}
      disabled={disabled}
      aria-disabled={disabled}
      className={clsx(
        'pittorica-button',
        `pittorica-button--${variant}`,
        `pittorica-button--${size}`,
        className
      )}
      style={buttonVariables}
      data-appearance={appearance}
    >
      {children}
    </Box>
  );
};

Button.displayName = 'Button';

import { type CSSProperties } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

export interface IconButtonProps extends BoxProps {
  /** @default 'filled' */
  variant?: 'filled' | 'tonal' | 'outlined' | 'text';
  /** @default 'indigo' */
  color?: PittoricaColor;
  /** @default '3' */
  size?: '1' | '2' | '3' | '4';
  disabled?: boolean;
}

/**
 * A button component optimized for displaying a single icon.
 * In React 19, ref is passed as a regular prop.
 */
export const IconButton = ({
  children,
  variant = 'filled',
  color = 'indigo',
  size = '3',
  className,
  style,
  ref,
  ...props
}: IconButtonProps & { ref?: React.Ref<HTMLButtonElement> }) => {
  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');

  const buttonStyles = {
    ...style,
    '--pittorica-source-color': isSemantic
      ? `var(--pittorica-${color}-9)`
      : color,
    '--pittorica-on-source-color': '#ffffff',
  } as CSSProperties;

  return (
    <Box
      {...props}
      as={props.href ? 'a' : 'button'}
      ref={ref}
      className={clsx(
        'pittorica-icon-button',
        `pittorica-icon-button--${variant}`,
        `pittorica-icon-button--${size}`,
        className
      )}
      style={buttonStyles}
    >
      {children}
    </Box>
  );
};

IconButton.displayName = 'IconButton';

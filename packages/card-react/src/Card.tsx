import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

export interface CardProps extends BoxProps {
  /** @default 'surface' */
  variant?: 'surface' | 'outlined' | 'ghost';
  /** If true, applies glassmorphism effect */
  translucent?: boolean;
}

/**
 * Card component following Radix UI Themes structure with translucent support.
 */
export const Card = ({
  variant = 'surface',
  translucent = false,
  children,
  className,
  style,
  ...props
}: CardProps) => {
  return (
    <Box
      className={clsx(
        'pittorica-card',
        `pittorica-card--variant-${variant}`,
        { 'pittorica-card--translucent': translucent },
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </Box>
  );
};

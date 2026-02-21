import { clsx } from 'clsx';

import { Text, type TextProps } from '@pittorica/text-react';

/**
 * Kbd component for keyboard input representation.
 */
export const Kbd = ({ className, style, ...props }: TextProps) => (
  <Text
    as="kbd"
    className={clsx('pittorica-kbd', className)}
    style={style}
    {...props}
  />
);

Kbd.displayName = 'Kbd';

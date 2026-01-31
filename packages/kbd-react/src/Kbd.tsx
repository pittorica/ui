import { clsx } from 'clsx';

import { Text, type TextProps } from '@pittorica/text-react';

/**
 * Kbd component for keyboard input representation.
 */
export const Kbd = ({ className, style, ...props }: TextProps) => (
  <Text
    as="kbd"
    className={clsx('pittorica-kbd', className)}
    style={{
      fontFamily: 'var(--pittorica-font-mono)',
      backgroundColor: 'var(--pittorica-slate-3)',
      padding: '0.1em 0.4em',
      borderRadius: 'var(--pittorica-radius-1)',
      fontSize: '0.85em',
      boxShadow: '0 1px 0 var(--pittorica-slate-6)',
      ...style,
    }}
    {...props}
  />
);

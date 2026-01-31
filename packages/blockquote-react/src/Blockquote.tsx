import { clsx } from 'clsx';

import { Text, type TextProps } from '@pittorica/text-react';

/**
 * Blockquote component for extended quotations.
 */
export const Blockquote = ({ className, style, ...props }: TextProps) => (
  <Text
    as="blockquote"
    className={clsx('pittorica-blockquote', className)}
    style={{
      borderLeft: '4px solid var(--pittorica-slate-4)',
      paddingLeft: 'var(--pittorica-space-4)',
      margin: 'var(--pittorica-space-5) 0',
      ...style,
    }}
    {...props}
  />
);

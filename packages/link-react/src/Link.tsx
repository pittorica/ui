import { clsx } from 'clsx';

import { Text, type TextProps } from '@pittorica/text-react';

export interface LinkProps extends TextProps {
  underline?: 'always' | 'hover' | 'none';
}

/**
 * Link component for navigation.
 */
export const Link = ({
  underline = 'hover',
  className,
  style,
  color = 'indigo',
  ...props
}: LinkProps) => (
  <Text
    as="a"
    className={clsx(
      'pittorica-link',
      `pittorica-link--underline-${underline}`,
      className
    )}
    color={color}
    style={{
      textDecoration: underline === 'always' ? 'underline' : 'none',
      cursor: 'pointer',
      ...style,
    }}
    {...props}
  />
);

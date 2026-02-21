import { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Text, type TextProps } from '@pittorica/text-react';

export type LinkProps<E extends ElementType = 'a'> = TextProps<E> & {
  underline?: 'always' | 'hover' | 'none';
};

/**
 * Link component for navigation.
 * Fully polymorphic and agnostic, defaulting to an anchor tag.
 */
export const Link = <E extends ElementType = 'a'>({
  underline = 'hover',
  className,
  style,
  color, // Default handled by CSS or inherited if not provided
  as,
  ...props
}: LinkProps<E>) => {
  const Tag = as || 'a';

  return (
    <Text
      as={Tag as ElementType}
      className={clsx(
        'pittorica-link',
        `pittorica-link--underline-${underline}`,
        className
      )}
      color={color}
      style={style}
      {...(props as TextProps<E>)}
    />
  );
};

Link.displayName = 'Link';

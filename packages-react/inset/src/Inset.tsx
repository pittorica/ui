import { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type InsetProps<E extends ElementType = 'div'> = BoxProps<E> & {
  /**
   * Which sides should be inset.
   * @default 'all'
   */
  side?: 'all' | 'x' | 'y' | 'top' | 'bottom';
  /**
   * If true, clips the content to the parent's border radius.
   * @default true
   */
  clip?: boolean;
};

/**
 * Inset is used to stretch content to the edges of its container.
 * Fully polymorphic and agnostic foundation.
 */
export const Inset = <E extends ElementType = 'div'>({
  children,
  side = 'all',
  clip = true,
  className,
  style,
  as,
  ...props
}: InsetProps<E>) => {
  const Tag = as || 'div';

  return (
    <Box
      as={Tag as ElementType}
      className={clsx('pittorica-inset', `pittorica-inset--${side}`, className)}
      style={{
        overflow: clip ? 'hidden' : 'visible',
        ...style,
      }}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

Inset.displayName = 'Inset';

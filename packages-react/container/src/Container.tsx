import React, { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

/**
 * Fix TS2314 & TS2312: Use 'type' alias for intersection with polymorphic BoxProps<E>.
 */
export type ContainerProps<E extends ElementType = 'div'> = BoxProps<E> & {
  /**
   * Determine the maximum width of the container.
   * Corresponds to the design system breakpoints.
   * @default 'lg'
   */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  /**
   * If true, the container will adapt its max-width to the current breakpoint
   * instead of being fluid.
   * @default false
   */
  fixed?: boolean;
  /**
   * Removes the default left and right padding.
   * @default false
   */
  disableGutters?: boolean;
};

/**
 * Container component to center and constrain content horizontally.
 * Fully polymorphic and agnostic foundation.
 */
export const Container = <E extends ElementType = 'div'>({
  children,
  maxWidth = 'lg',
  fixed = false,
  disableGutters = false,
  className,
  style,
  as,
  ...props
}: ContainerProps<E>) => {
  const Tag = as || 'div';

  const containerStyles: React.CSSProperties = {
    // Logic: Map maxWidth to breakpoint token if not in 'fixed' mode
    maxWidth:
      maxWidth && !fixed ? `var(--pittorica-bp-${maxWidth})` : undefined,
    ...style,
  };

  return (
    <Box
      as={Tag as ElementType}
      className={clsx(
        'pittorica-container',
        {
          'pittorica-container--disable-gutters': disableGutters,
        },
        className
      )}
      data-fixed={fixed}
      style={containerStyles}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

Container.displayName = 'Container';

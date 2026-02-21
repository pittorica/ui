import { type ElementType } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

export type SectionProps<E extends ElementType = 'section'> = BoxProps<E> & {
  /**
   * Vertical padding size.
   * Maps to responsive padding values in CSS.
   * @default '3'
   */
  size?: '1' | '2' | '3' | '4';
};

/**
 * Section component for high-level page layout.
 * Fully polymorphic and agnostic foundation.
 */
export const Section = <E extends ElementType = 'section'>({
  children,
  as,
  size = '3',
  className,
  ...props
}: SectionProps<E>) => {
  const Tag = as || 'section';

  return (
    <Box
      as={Tag as ElementType}
      className={clsx('pittorica-section', className)}
      data-size={size}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

Section.displayName = 'Section';

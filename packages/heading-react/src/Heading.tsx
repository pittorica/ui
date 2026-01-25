import React from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { type RecipeVariants } from '@vanilla-extract/recipes';

import { headingStyle } from './heading.css.js';

// Extract variants from the recipe
type HeadingVariants = RecipeVariants<typeof headingStyle>;
/**
 * Props for the Heading component.
 * Extends BoxProps (minus 'as') to inherit all atomic styles like color, margin, etc.
 */
export type HeadingProps = Omit<BoxProps, 'as'> & {
  /**
   * The semantic HTML level (h1-h6). Defaults to h2.
   */
  level?: 1 | 2 | 3 | 4 | 5 | 6;

  /**
   * The visual style variant.
   */
  variant?: NonNullable<HeadingVariants>['variant'];

  /**
   * The size of the heading.
   */
  size?: NonNullable<HeadingVariants>['size'];
};

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  variant = 'headline',
  size = 'medium',
  color = 'inherit',
  className,
  children,
  ...props
}) => {
  const Tag = `h${level}` as React.ElementType;

  const recipeClass = headingStyle({ variant, size });

  return (
    <Box
      as={Tag}
      className={clsx(recipeClass, className)}
      color={color}
      {...props}
    >
      {children}
    </Box>
  );
};

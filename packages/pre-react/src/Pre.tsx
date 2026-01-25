import React from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { type RecipeVariants } from '@vanilla-extract/recipes';

import { preRecipe } from './pre.css.js';

type PreVariants = RecipeVariants<typeof preRecipe>;

export interface PreProps extends Omit<
  BoxProps & React.HTMLAttributes<HTMLPreElement>,
  'as' | 'width'
> {
  variant?: NonNullable<PreVariants>['variant'];
  width?: React.CSSProperties['width'];
}

export const Pre: React.FC<PreProps> = ({
  variant = 'block',
  color,
  className,
  children,
  width,
  ...props
}) => {
  const recipeClass = preRecipe({ variant });
  return (
    <Box
      as="pre"
      className={clsx(recipeClass, className)}
      style={width ? { width, ...props.style } : props.style}
      color={color}
      {...props}
    >
      {children}
    </Box>
  );
};

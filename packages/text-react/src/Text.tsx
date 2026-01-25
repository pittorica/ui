import React from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { type RecipeVariants } from '@vanilla-extract/recipes';

import { textStyle } from './text.css.js';

// Extract variants from the recipe
type TextVariants = RecipeVariants<typeof textStyle>;

export interface TextProps extends Omit<BoxProps, 'as' | 'htmlFor'> {
  as?:
    | 'p'
    | 'span'
    | 'label'
    | 'div'
    | 'figcaption'
    | 'strong'
    | 'em'
    | 'blockquote'
    | 'cite'
    | 'small';
  variant?: NonNullable<TextVariants>['variant'];
  size?: NonNullable<TextVariants>['size'];
  htmlFor?: React.LabelHTMLAttributes<HTMLLabelElement>['htmlFor'];
}

export const Text: React.FC<TextProps> = ({
  as = 'p',
  variant = 'body',
  size = 'large',
  color = 'inherit',
  className,
  children,
  htmlFor,
  ...props
}) => {
  const recipeClass = textStyle({ variant, size });

  return (
    <Box
      as={as}
      className={clsx(recipeClass, className)}
      color={color}
      {...(as === 'label' && htmlFor ? { htmlFor } : {})}
      {...props}
    >
      {children}
    </Box>
  );
};

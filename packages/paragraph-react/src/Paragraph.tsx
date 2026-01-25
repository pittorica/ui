import React from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { RecipeVariants } from '@vanilla-extract/recipes';

import { paragraphRecipe } from './paragraph.css.js';

type ParagraphVariants = RecipeVariants<typeof paragraphRecipe>;

export type ParagraphProps = Omit<BoxProps, 'as' | 'htmlFor'> & {
  variant?: NonNullable<ParagraphVariants>['variant'];
  size?: NonNullable<ParagraphVariants>['size'];
  htmlFor?: React.LabelHTMLAttributes<HTMLLabelElement>['htmlFor'];
};

export const Paragraph: React.FC<ParagraphProps> = ({
  size = 'medium',
  variant = 'body',
  color = 'inherit',
  htmlFor,
  className,
  children,
  ...props
}) => {
  const paragraphClass = paragraphRecipe({ variant, size });

  return (
    <Box
      as="p"
      className={clsx(paragraphClass, className)}
      color={color}
      {...(htmlFor ? { htmlFor } : {})}
      {...props}
    >
      {children}
    </Box>
  );
};

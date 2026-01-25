import React, { type QuoteHTMLAttributes } from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

import { quoteRecipe } from './quote.css.js';

export interface QuoteProps extends Omit<
  BoxProps & QuoteHTMLAttributes<HTMLQuoteElement>,
  'as' | 'children' | 'cite'
> {
  cite: string;
  children: React.ReactNode;
}

export const Quote: React.FC<QuoteProps> = ({
  className,
  children,
  cite,
  ...props
}) => {
  const recipeClass = quoteRecipe();

  return (
    <Box as="q" className={clsx(recipeClass, className)} cite={cite} {...props}>
      {children}
    </Box>
  );
};

import React from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

import { inlineRecipe } from './inline.css.js';

/**
 * Props for the Inline component.
 */
export type InlineProps = Omit<BoxProps, 'as'> & {
  /**
   * Render as bold text using `<strong>`.
   * @default false
   */
  bold?: boolean;

  /**
   * Render as italic text using `<em>`.
   * @default false
   */
  italic?: boolean;

  /**
   * Render as highlighted text using `<mark>`.
   * @default false
   */
  highlight?: boolean;

  /**
   * Render as deleted text with strikethrough using `<del>`.
   * @default false
   */
  deleted?: boolean;

  /**
   * Render as inserted text with underline using `<ins>`.
   * @default false
   */
  inserted?: boolean;

  /**
   * Render as small text using `<small>`.
   * @default false
   */
  small?: boolean;

  /**
   * Render as subscript using `<sub>`.
   * @default false
   */
  sub?: boolean;

  /**
   * Render as superscript using `<sup>`.
   * @default false
   */
  sup?: boolean;
};

export const Inline: React.FC<InlineProps> = ({
  bold,
  italic,
  highlight,
  deleted,
  inserted,
  small,
  sub,
  sup,
  className,
  children,
  ...props
}) => {
  let as: React.ElementType = 'span';
  if (sub) as = 'sub';
  else if (sup) as = 'sup';
  else if (deleted) as = 'del';
  else if (inserted) as = 'ins';
  else if (highlight) as = 'mark';
  else if (bold) as = 'strong';
  else if (italic) as = 'em';
  else if (small) as = 'small';

  const recipeClass = inlineRecipe({
    highlight,
    bold,
    italic,
    small,
    deleted,
    inserted,
    sub,
    sup,
  });

  return (
    <Box as={as} className={clsx(recipeClass, className)} {...props}>
      {children}
    </Box>
  );
};

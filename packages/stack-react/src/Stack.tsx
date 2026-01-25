import React from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { SPACING_TOKENS, type SpacingToken } from '@pittorica/styles';

import { stackStyle } from './stack.css.js';

export const STACK_DIRECTIONS = [
  'horizontal',
  'horizontal-reversed',
  'vertical',
  'vertical-reversed',
] as const;

export type StackDirection = (typeof STACK_DIRECTIONS)[number];

export const STACK_ALIGNS = ['start', 'center', 'end', 'stretch'] as const;

export type StackAlign = (typeof STACK_ALIGNS)[number];

export const STACK_JUSTIFIES = [
  'start',
  'center',
  'end',
  'spaceBetween',
  'spaceAround',
  'spaceEvenly',
] as const;

export type StackJustify = (typeof STACK_JUSTIFIES)[number];

export interface StackProps extends Omit<
  BoxProps,
  'as' | 'display' | 'flexDirection' | 'alignItems' | 'justifyContent' | 'gap'
> {
  direction?: StackDirection;
  align?: StackAlign;
  justify?: StackJustify;
  gap?: SpacingToken | string;
}

export const Stack: React.FC<StackProps> = ({
  direction = 'horizontal',
  align = 'center',
  justify = 'center',
  gap,
  className,
  ...props
}) => {
  const isGapToken = gap && SPACING_TOKENS.includes(gap as SpacingToken);
  const stackClass = isGapToken
    ? stackStyle({
        direction,
        align,
        justify,
        gap: gap as SpacingToken,
      })
    : stackStyle({
        direction,
        align,
        justify,
      });

  return (
    <Box
      as="div"
      className={clsx(stackClass, className)}
      style={{
        ...(!SPACING_TOKENS.includes(gap as SpacingToken) && { gap: gap }),
        ...props.style,
      }}
      {...props}
    />
  );
};

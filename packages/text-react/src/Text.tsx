import React from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

export type PittoricaColor =
  | 'indigo'
  | 'crimson'
  | 'teal'
  | 'amber'
  | 'slate'
  | 'blue'
  | 'red'
  | 'danger'
  | 'success'
  | 'error'
  | 'info'
  | 'inherit'
  | (string & {});

export interface TextProps extends BoxProps {
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  align?: 'left' | 'center' | 'right';
  truncate?: boolean;
  color?: PittoricaColor;
}

export const Text = ({
  children,
  as: Tag = 'span',
  size = '3',
  weight = 'regular',
  align,
  truncate = false,
  color,
  className,
  style,
  ...rest
}: TextProps) => {
  const isCustomColor = color?.startsWith('#') || color?.startsWith('rgb');
  const isSemanticColor = [
    'danger',
    'success',
    'error',
    'info',
    'indigo',
    'crimson',
    'teal',
    'amber',
    'slate',
    'blue',
    'red',
  ].includes(color as string);

  const resolvedColor = (() => {
    if (!color) return;
    if (color === 'inherit') return 'inherit';
    if (isCustomColor) return color;
    if (isSemanticColor) return `var(--pittorica-${color}-9)`;
    return;
  })();

  const textStyles: React.CSSProperties = {
    ...style,
    textAlign: align,
    color: resolvedColor,
  };

  return (
    <Box
      as={Tag}
      className={clsx(
        'pittorica-text',
        { 'pittorica-text--truncate': truncate },
        className
      )}
      data-size={size}
      data-weight={weight}
      style={textStyles}
      {...rest}
    >
      {children}
    </Box>
  );
};

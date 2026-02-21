import { type ReactNode } from 'react';

import { clsx } from 'clsx';

import {
  type PittoricaColor,
  Text,
  type TextProps,
} from '@pittorica/text-react';

export type BlockquoteVariant = 'classic' | 'soft' | 'solid' | 'outline';

export interface BlockquoteProps extends TextProps {
  /**
   * The visual style of the blockquote.
   * @default 'classic'
   */
  variant?: BlockquoteVariant;
  /**
   * The semantic color of the blockquote components.
   * Uses Pittorica's design system colors.
   */
  color?: PittoricaColor;
  children: ReactNode;
}

/**
 * Blockquote component for extended quotations.
 * Inherits all standard Text props and adds fancy variants.
 */
export const Blockquote = ({
  className,
  style,
  variant = 'classic',
  color,
  ...props
}: BlockquoteProps) => {
  const isSemantic =
    color &&
    color !== 'inherit' &&
    !color.startsWith('#') &&
    !color.startsWith('rgb');

  const bqVariables = {
    '--_bq-accent': isSemantic ? `var(--pittorica-${color}-9)` : color,
    ...(variant === 'soft' &&
      isSemantic && {
        '--pittorica-source-3': `var(--pittorica-${color}-3)`,
        '--pittorica-source-9': `var(--pittorica-${color}-9)`,
        '--pittorica-source-11': `var(--pittorica-${color}-11)`,
      }),
    ...(variant === 'solid' &&
      isSemantic && {
        '--pittorica-source-9': `var(--pittorica-${color}-9)`,
        '--pittorica-on-source-9': `var(--pittorica-on-${color}-9)`,
      }),
    ...(variant === 'outline' &&
      isSemantic && {
        '--pittorica-source-6': `var(--pittorica-${color}-6)`,
        '--pittorica-source-9': `var(--pittorica-${color}-9)`,
      }),
    ...style,
  } as React.CSSProperties;

  return (
    <Text
      as="blockquote"
      className={clsx('pittorica-blockquote', className)}
      data-variant={variant}
      style={bqVariables}
      {...props}
    />
  );
};

Blockquote.displayName = 'Blockquote';

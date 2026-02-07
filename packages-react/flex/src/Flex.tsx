import React from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type Align = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
type Justify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';

interface ResponsiveObject<T> {
  initial?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

type Responsive<T> = T | ResponsiveObject<T>;

export interface FlexProps extends BoxProps {
  direction?: Responsive<Direction>;
  align?: Responsive<Align>;
  justify?: Responsive<Justify>;
  wrap?: Responsive<Wrap>;
  gap?: Responsive<Spacing>;
  /** * Custom fluid basis for children.
   * Format: 'auto-200px' sets a min-width/basis for items.
   */
  basis?: string;
}

/**
 * Extended CSS Properties to support custom variables without 'any'
 */
interface FlexCustomProperties extends React.CSSProperties {
  '--pittorica-flex-basis'?: string;
}

/**
 * Checks if a value is a fluid instruction.
 */
const isFluid = (val: unknown): val is string =>
  typeof val === 'string' && val.startsWith('auto-');

/**
 * Utility to transform responsive props into CSS classes.
 */
function getFlexResponsiveClasses<T extends string>(
  propName: string,
  value: Responsive<T> | undefined
): string[] {
  if (!value || isFluid(value)) return [];

  if (typeof value === 'string') {
    return [`pittorica-flex--${propName}-${value}`];
  }

  return Object.entries(value)
    .filter(([, val]) => val !== undefined && !isFluid(val))
    .map(([bp, val]) =>
      bp === 'initial'
        ? `pittorica-flex--${propName}-${val}`
        : `pittorica-flex--${bp}-${propName}-${val}`
    );
}

/**
 * Flex component for responsive and fluid layouts.
 */
export const Flex = ({
  children,
  direction,
  align,
  justify,
  wrap,
  gap,
  basis,
  className,
  style,
  ...props
}: FlexProps) => {
  const responsiveClasses = [
    ...getFlexResponsiveClasses('direction', direction),
    ...getFlexResponsiveClasses('align', align),
    ...getFlexResponsiveClasses('justify', justify),
    ...getFlexResponsiveClasses('wrap', wrap),
    ...getFlexResponsiveClasses('gap', gap),
  ];

  const fluidStyles: FlexCustomProperties = { ...style };

  // If basis is fluid (auto-200px), we apply it to children via CSS variable
  if (isFluid(basis)) {
    fluidStyles['--pittorica-flex-basis'] = basis.split('-')[1];
  }

  return (
    <Box
      className={clsx('pittorica-flex', responsiveClasses, className)}
      style={{ ...style, ...fluidStyles }}
      {...props}
    >
      {children}
    </Box>
  );
};

import React from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type GridFlow = 'row' | 'column' | 'dense' | 'row-dense' | 'column-dense';
type GridAlign = 'start' | 'center' | 'end' | 'baseline' | 'stretch';
type GridJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch';
type GridRepeat =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | 'none'
  | (string & {});

interface ResponsiveObject<T> {
  initial?: T;
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

type Responsive<T> = T | ResponsiveObject<T>;

export interface GridProps extends Omit<BoxProps, 'display'> {
  columns?: Responsive<GridRepeat>;
  rows?: Responsive<GridRepeat>;
  gap?: Responsive<Spacing>;
  gapX?: Responsive<Spacing>;
  gapY?: Responsive<Spacing>;
  flow?: Responsive<GridFlow>;
  align?: Responsive<GridAlign>;
  justify?: Responsive<GridJustify>;
}

/**
 * Checks if a value is a fluid grid instruction (e.g., 'auto-200px').
 * Moved to outer scope to satisfy unicorn/consistent-function-scoping.
 */
const isFluid = (val: unknown): val is string =>
  typeof val === 'string' && val.startsWith('auto-');

/**
 * Utility to transform responsive props into CSS classes.
 */
function getGridResponsiveClasses<T extends string>(
  propName: string,
  value: Responsive<T> | undefined
): string[] {
  if (!value || isFluid(value)) return [];

  if (typeof value === 'string') {
    return [`pittorica-grid--${propName}-${value}`];
  }

  return Object.entries(value)
    .filter(([, val]) => val !== undefined && !isFluid(val))
    .map(([bp, val]) =>
      bp === 'initial'
        ? `pittorica-grid--${propName}-${val}`
        : `pittorica-grid--${bp}-${propName}-${val}`
    );
}

/**
 * Grid component supporting both fixed responsive columns and fluid auto-wrapping.
 */
export const Grid = ({
  children,
  columns,
  rows,
  gap,
  gapX,
  gapY,
  flow,
  align,
  justify,
  className,
  style,
  ...props
}: GridProps) => {
  const responsiveClasses = [
    ...getGridResponsiveClasses('columns', columns),
    ...getGridResponsiveClasses('rows', rows),
    ...getGridResponsiveClasses('gap', gap),
    ...getGridResponsiveClasses('gapX', gapX),
    ...getGridResponsiveClasses('gapY', gapY),
    ...getGridResponsiveClasses('flow', flow),
    ...getGridResponsiveClasses('align', align),
    ...getGridResponsiveClasses('justify', justify),
  ];

  const fluidStyles: React.CSSProperties = {};

  if (isFluid(columns)) {
    fluidStyles.gridTemplateColumns = `repeat(auto-fit, minmax(${columns.split('-')[1]}, 1fr))`;
  }

  if (isFluid(rows)) {
    fluidStyles.gridTemplateRows = `repeat(auto-fit, minmax(${rows.split('-')[1]}, 1fr))`;
  }

  return (
    <Box
      className={clsx('pittorica-grid', responsiveClasses, className)}
      style={{ ...style, ...fluidStyles }}
      {...props}
    >
      {children}
    </Box>
  );
};

import type React from 'react';

import { Box, type BoxProps } from '@pittorica/box-react';
import { SPACING_TOKENS } from '@pittorica/styles';

export const GRID_GAP_TOKENS = [...SPACING_TOKENS] as const;
export type GridGapToken = (typeof GRID_GAP_TOKENS)[number];

export const GRID_FLOW_TOKENS = [
  'row',
  'column',
  'dense',
  'row dense',
  'column dense',
] as const;
export type GridFlowToken = (typeof GRID_FLOW_TOKENS)[number];

export const GRID_ALIGN_TOKENS = [
  'stretch',
  'center',
  'start',
  'end',
  'baseline',
] as const;
export type GridAlignToken = (typeof GRID_ALIGN_TOKENS)[number];

export const GRID_JUSTIFY_TOKENS = [
  'stretch',
  'center',
  'start',
  'end',
  'space-between',
  'space-around',
  'space-evenly',
] as const;
export type GridJustifyToken = (typeof GRID_JUSTIFY_TOKENS)[number];

export interface GridProps extends Omit<
  BoxProps,
  | 'as'
  | 'display'
  | 'gridTemplateColumns'
  | 'gap'
  | 'gridAutoFlow'
  | 'alignItems'
  | 'justifyContent'
> {
  /**
   * Number of columns in the grid.
   * Maps to CSS `gridTemplateColumns`.
   */
  columns?: BoxProps['gridTemplateColumns'];

  /**
   * The spacing between grid items.
   * Maps to CSS `gap`.
   */
  gap?: GridGapToken;

  /**
   * The flow direction of grid items.
   * Maps to CSS `gridAutoFlow`.
   */
  flow?: GridFlowToken;

  /**
   * Alignment of items along the cross axis.
   * Maps to CSS `alignItems`.
   */
  align?: GridAlignToken;

  /**
   * Alignment of items along the main axis.
   * Maps to CSS `justifyContent`.
   */
  justify?: GridJustifyToken;

  /**
   * Additional styles to apply to the grid container.
   */
  style?: React.CSSProperties;
}

export const Grid: React.FC<GridProps> = ({
  columns,
  gap,
  flow,
  align,
  justify,
  style,
  ...props
}: GridProps) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={columns}
      gap={gap}
      gridAutoFlow={flow}
      style={{
        alignItems: align,
        justifyContent: justify,
        ...style,
      }}
      {...props}
    />
  );
};

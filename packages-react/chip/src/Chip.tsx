import React from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

export interface ChipProps extends BoxProps {
  variant?: 'solid' | 'soft' | 'outline';
  size?: '1' | '2' | '3';
  color?: PittoricaColor;
  startDecorator?: React.ReactNode;
  endDecorator?: React.ReactNode;
  onDelete?: () => void;
  deleteIcon?: React.ReactNode;
}

/**
 * Chip component with semantic alias support.
 */
export const Chip = ({
  children,
  variant = 'soft',
  size = '2',
  color = 'indigo',
  startDecorator,
  endDecorator,
  onDelete,
  deleteIcon,
  className,
  style,
  ...props
}: ChipProps) => {
  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');

  const chipVariables = {
    /* Mappa i token -9, -3, -11 e on-9 generati nel CSS */
    '--chip-base': isSemantic ? `var(--pittorica-${color}-9)` : color,
    '--chip-soft-bg': isSemantic
      ? `var(--pittorica-${color}-3)`
      : 'transparent',
    '--chip-soft-text': isSemantic ? `var(--pittorica-${color}-11)` : 'inherit',
    '--chip-on-base': isSemantic ? `var(--pittorica-on-${color}-9)` : 'white',
    ...style,
  } as React.CSSProperties;

  return (
    <Box
      as={props.onClick ? 'button' : 'div'}
      className={clsx(
        'pittorica-chip',
        `pittorica-chip--size-${size}`,
        className
      )}
      data-variant={variant}
      style={chipVariables}
      {...props}
    >
      {startDecorator && (
        <span className="pittorica-chip-decorator">{startDecorator}</span>
      )}
      <span className="pittorica-chip-content">{children}</span>
      {endDecorator && (
        <span className="pittorica-chip-decorator">{endDecorator}</span>
      )}

      {onDelete && (
        <button
          type="button"
          className="pittorica-chip-delete"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          {deleteIcon || (
            <span style={{ fontSize: '1.2em', lineHeight: 0 }}>x</span>
          )}
        </button>
      )}
    </Box>
  );
};

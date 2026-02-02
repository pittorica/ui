import React, { useId } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

const SVG_HEIGHT = 16;
const CENTER_Y = SVG_HEIGHT / 2;

const PATTERNS = {
  wave: { d: `M0 ${CENTER_Y} Q6 0 12 ${CENTER_Y} T24 ${CENTER_Y}`, w: 24 },
  zigzag: { d: `M0 ${CENTER_Y} L5 2 L15 14 L20 ${CENTER_Y}`, w: 20 },
  square: { d: `M0 ${CENTER_Y} V4 H12 V12 H24 V${CENTER_Y}`, w: 24 },
  scallop: { d: `M0 12 Q10 0 20 12`, w: 20 },
  dashed: { d: `M0 ${CENTER_Y} H8`, w: 16 },
  double: { d: `M0 6 H100 M0 10 H100`, w: 100 },
  cross: { d: 'M4 4 L12 12 M12 4 L4 12', w: 16 },
  dots: { d: `M0 ${CENTER_Y} H0.1`, w: 16 },
};

export interface DividerProps extends Omit<BoxProps, 'children'> {
  /** @default 'solid' */
  variant?: 'solid' | keyof typeof PATTERNS;
  /** @default 'slate' */
  color?: PittoricaColor;
  /** Thickness of the line for 'solid' variant. @default '1px' */
  thickness?: string | number;
  /** Optional text or icon. Only works with 'solid' variant. */
  children?: React.ReactNode;
}

/**
 * Divider.tsx
 */
export const Divider = ({
  variant = 'solid',
  color = 'slate',
  thickness = '1px',
  children,
  className,
  style,
  ...props
}: DividerProps) => {
  const uniqueId = useId();
  const isSvgVariant = variant !== 'solid' && variant in PATTERNS;

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  if (isSvgVariant) {
    const patternId = `pittorica-pattern-${variant}-${uniqueId}`;
    const { d, w } = PATTERNS[variant as keyof typeof PATTERNS];
    const lineCap = ['dots', 'scallop', 'wave'].includes(variant)
      ? 'round'
      : 'square';
    const strokeWidth = variant === 'dots' ? '3' : '1.5';

    return (
      <Box
        as="div"
        role="separator"
        aria-orientation="horizontal"
        className={clsx(
          'pittorica-divider',
          `pittorica-divider--${variant}`,
          className
        )}
        style={{ color: resolvedColor, ...style }}
        {...props}
      >
        <svg
          width="100%"
          height={SVG_HEIGHT}
          fill="none"
          style={{ display: 'block', overflow: 'visible' }}
        >
          <defs>
            <pattern
              id={patternId}
              width={w}
              height={SVG_HEIGHT}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={d}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap={lineCap}
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
      </Box>
    );
  }

  const Tag = children ? 'div' : 'hr';

  return (
    <Box
      as={Tag}
      {...(children ? { role: 'separator' } : {})}
      className={clsx(
        'pittorica-divider',
        'pittorica-divider--solid',
        { 'pittorica-divider--with-children': !!children },
        className
      )}
      style={
        {
          '--divider-color': resolvedColor,
          '--divider-thickness':
            typeof thickness === 'number' ? `${thickness}px` : thickness,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {children && (
        <span className="pittorica-divider__content">{children}</span>
      )}
    </Box>
  );
};

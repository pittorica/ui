import React from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { type BGColorToken, sprinkles } from '@pittorica/styles';

const ELEVATION_COLOR_MAP = {
  0: 'transparent',
  1: '900',
  2: '800',
  3: '700',
  4: '600',
  5: '500',
  6: '400',
  7: '300',
  8: '200',
  9: '100',
  10: 'base',
} as const;

type ElevationLevel = keyof typeof ELEVATION_COLOR_MAP;

type BaseColorToken = Exclude<
  BGColorToken,
  'transparent' | `${string}${number}`
>;

export interface SurfaceProps extends Omit<BoxProps, 'as' | 'color'> {
  color?: BaseColorToken;
  elevation?: ElevationLevel;
}

export const Surface: React.FC<SurfaceProps> = ({
  color = 'brand',
  elevation = 1,
  className,
  ...props
}) => {
  const scaleLevel = ELEVATION_COLOR_MAP[elevation];
  let bgColorToken: BGColorToken;
  let onColorToken: BGColorToken;
  const capitalizedColor = color.charAt(0).toUpperCase() + color.slice(1);

  if (scaleLevel === 'transparent') {
    bgColorToken = 'transparent';
    onColorToken = 'inherit' as BGColorToken;
  } else if (scaleLevel === 'base') {
    bgColorToken = color;
    onColorToken = `on${capitalizedColor}` as BGColorToken;
  } else {
    bgColorToken = `${color}${scaleLevel}` as BGColorToken;
    onColorToken = `on${capitalizedColor}${scaleLevel}` as BGColorToken;
  }

  const surfaceClass = sprinkles({
    bg: bgColorToken,
    c: onColorToken,
  });

  return <Box as="div" className={clsx(surfaceClass, className)} {...props} />;
};

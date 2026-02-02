import React, { CSSProperties } from 'react';

export type PittoricaSourceColor =
  | 'indigo'
  | 'crimson'
  | 'teal'
  | 'amber'
  | 'slate'
  | 'blue'
  | 'red'
  | (string & {});

export type PittoricaAppearance = 'light' | 'dark' | 'inherit';
export type PittoricaRadius = 'none' | 'small' | 'medium' | 'large' | 'full';

export interface PittoThemeProps {
  children: React.ReactNode;
  sourceColor?: PittoricaSourceColor;
  appearance?: PittoricaAppearance;
  radius?: PittoricaRadius;
  className?: string;
  style?: CSSProperties;
  id?: string;
}

export const PittoricaTheme = ({
  children,
  sourceColor = 'indigo',
  appearance = 'light',
  radius = 'medium',
  className,
  style,
  id,
}: PittoThemeProps) => {
  const isCustomColor =
    sourceColor.startsWith('#') || sourceColor.startsWith('rgb');

  const containerProps = {
    id,
    className: ['pittorica-theme', className].filter(Boolean).join(' '),
    'data-source-color': isCustomColor ? 'custom' : sourceColor,
    'data-appearance': appearance,
    'data-radius': radius,
    style: {
      ...style,
      ...(isCustomColor ? { '--pittorica-source-color': sourceColor } : {}),
    } as CSSProperties,
  };

  return <div {...containerProps}>{children}</div>;
};

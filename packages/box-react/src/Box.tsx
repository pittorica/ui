import React from 'react';

import { clsx } from 'clsx';

type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  display?:
    | 'none'
    | 'inline'
    | 'block'
    | 'inline-block'
    | 'flex'
    | 'inline-flex'
    | 'grid';
  m?: Spacing;
  mt?: Spacing;
  mr?: Spacing;
  mb?: Spacing;
  ml?: Spacing;
  p?: Spacing;
  pt?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
  width?: string;
  height?: string;
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
}

export const Box = ({
  as: Tag = 'div',
  children,
  display,
  m,
  mt,
  mr,
  mb,
  ml,
  p,
  pt,
  pr,
  pb,
  pl,
  width,
  height,
  position,
  style,
  className,
  ...props
}: BoxProps) => {
  const utilityStyles: React.CSSProperties = {};

  if (display) utilityStyles.display = display;
  if (width) utilityStyles.width = width;
  if (height) utilityStyles.height = height;
  if (position) utilityStyles.position = position;

  // Margin Mapping
  if (m) utilityStyles.margin = `var(--pittorica-space-${m})`;
  if (mt) utilityStyles.marginTop = `var(--pittorica-space-${mt})`;
  if (mr) utilityStyles.marginRight = `var(--pittorica-space-${mr})`;
  if (mb) utilityStyles.marginBottom = `var(--pittorica-space-${mb})`;
  if (ml) utilityStyles.marginLeft = `var(--pittorica-space-${ml})`;

  // Padding Mapping
  if (p) utilityStyles.padding = `var(--pittorica-space-${p})`;
  if (pt) utilityStyles.paddingTop = `var(--pittorica-space-${pt})`;
  if (pr) utilityStyles.paddingRight = `var(--pittorica-space-${pr})`;
  if (pb) utilityStyles.paddingBottom = `var(--pittorica-space-${pb})`;
  if (pl) utilityStyles.paddingLeft = `var(--pittorica-space-${pl})`;

  /**
   * ORDINE DI MERGE:
   * Fondamentale per far sì che lo 'style' calcolato dai componenti
   * figli (come Text) sovrascriva le utility props del Box.
   */
  const finalStyles: React.CSSProperties = {
    ...utilityStyles,
    ...style,
  };

  return (
    <Tag
      className={clsx('pittorica-box', className)}
      style={finalStyles}
      {...props}
    >
      {children}
    </Tag>
  );
};

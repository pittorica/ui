import React, { type ComponentPropsWithRef, type ElementType } from 'react';

import { clsx } from 'clsx';

type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

interface BoxOwnProps<E extends ElementType> {
  /**
   * The component or HTML tag to render.
   * @default 'div'
   */
  as?: E;
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
  mx?: Spacing;
  my?: Spacing;
  p?: Spacing;
  pt?: Spacing;
  pr?: Spacing;
  pb?: Spacing;
  pl?: Spacing;
  px?: Spacing;
  py?: Spacing;
  width?: string;
  height?: string;
  position?: 'static' | 'relative' | 'absolute' | 'fixed' | 'sticky';
  disabled?: boolean;
  required?: boolean;
}

export type BoxProps<E extends ElementType> = BoxOwnProps<E> &
  Omit<ComponentPropsWithRef<E>, keyof BoxOwnProps<E>>;

export const Box = <E extends ElementType = 'div'>({
  as,
  children,
  display,
  m,
  mt,
  mr,
  mb,
  ml,
  mx,
  my,
  p,
  pt,
  pr,
  pb,
  pl,
  px,
  py,
  width,
  height,
  position,
  style,
  className,
  disabled,
  required,
  ...props
}: BoxProps<E>) => {
  const Tag = as || 'div';

  const utilityStyles: React.CSSProperties = {};

  if (display) utilityStyles.display = display;
  if (width) utilityStyles.width = width;
  if (height) utilityStyles.height = height;
  if (position) utilityStyles.position = position;

  // --- Margin Mapping ---
  if (m) utilityStyles.margin = `var(--pittorica-space-${m})`;
  if (mt) utilityStyles.marginTop = `var(--pittorica-space-${mt})`;
  if (mr) utilityStyles.marginRight = `var(--pittorica-space-${mr})`;
  if (mb) utilityStyles.marginBottom = `var(--pittorica-space-${mb})`;
  if (ml) utilityStyles.marginLeft = `var(--pittorica-space-${ml})`;

  // Axis Mapping (mx, my)
  if (mx) {
    utilityStyles.marginLeft = `var(--pittorica-space-${mx})`;
    utilityStyles.marginRight = `var(--pittorica-space-${mx})`;
  }
  if (my) {
    utilityStyles.marginTop = `var(--pittorica-space-${my})`;
    utilityStyles.marginBottom = `var(--pittorica-space-${my})`;
  }

  // --- Padding Mapping ---
  if (p) utilityStyles.padding = `var(--pittorica-space-${p})`;
  if (pt) utilityStyles.paddingTop = `var(--pittorica-space-${pt})`;
  if (pr) utilityStyles.paddingRight = `var(--pittorica-space-${pr})`;
  if (pb) utilityStyles.paddingBottom = `var(--pittorica-space-${pb})`;
  if (pl) utilityStyles.paddingLeft = `var(--pittorica-space-${pl})`;

  // Axis Mapping (px, py)
  if (px) {
    utilityStyles.paddingLeft = `var(--pittorica-space-${px})`;
    utilityStyles.paddingRight = `var(--pittorica-space-${px})`;
  }
  if (py) {
    utilityStyles.paddingTop = `var(--pittorica-space-${py})`;
    utilityStyles.paddingBottom = `var(--pittorica-space-${py})`;
  }

  const finalStyles: React.CSSProperties = {
    ...style,
    ...utilityStyles,
  };

  return (
    <Tag
      className={clsx('pittorica-box', className)}
      style={finalStyles}
      disabled={disabled}
      required={required}
      {...props}
    >
      {children}
    </Tag>
  );
};

Box.displayName = 'Box';

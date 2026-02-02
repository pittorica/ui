import { type CSSProperties, type ElementType } from 'react';

import { clsx } from 'clsx';

type Spacing = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export interface BoxProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
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
  href?: string;
  target?: string;
  rel?: string;
  htmlFor?: string;
  type?: string;
  /** HTML disabled attribute, useful for interactive elements */
  disabled?: boolean;
}

export const Box = ({
  ref,
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
  href,
  target,
  rel,
  htmlFor,
  type,
  disabled,
  ...props
}: BoxProps & { ref?: React.RefObject<HTMLElement | null> }) => {
  const utilityStyles: CSSProperties = {};

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

  const finalStyles: CSSProperties = {
    ...style,
    ...utilityStyles,
  };

  return (
    <Tag
      ref={ref}
      className={clsx('pittorica-box', className)}
      style={finalStyles}
      href={href}
      target={target}
      rel={rel}
      htmlFor={htmlFor}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </Tag>
  );
};

Box.displayName = 'Box';

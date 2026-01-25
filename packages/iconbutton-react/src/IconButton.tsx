import React from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { type RecipeVariants } from '@vanilla-extract/recipes';

import { iconButtonRecipe } from './iconbutton.css.js';

type IconButtonVariants = RecipeVariants<typeof iconButtonRecipe>;

type BaseIconButtonProps = Omit<BoxProps, 'as' | 'children' | 'size'> & {
  /** The content of the icon button (usually an icon) */
  children: React.ReactNode;
  /** The visual variant of the button */
  variant?: NonNullable<IconButtonVariants>['variant'];
  /** The size of the button */
  size?: NonNullable<IconButtonVariants>['size'];
  /** Whether the button is visually disabled */
  disabled?: NonNullable<IconButtonVariants>['disabled'];
};

/**
 * Properties specific to the button element (when no href is provided).
 */
type ButtonElementProps = BaseIconButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

/**
 * Properties specific to the anchor element (when href is provided).
 */
type AnchorElementProps = BaseIconButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type IconButtonProps = ButtonElementProps | AnchorElementProps;

export const IconButton = ({
  ref,
  children,
  variant = 'text',
  size = 'medium',
  className,
  disabled = false,
  ...props
}: IconButtonProps & {
  ref?: React.RefObject<HTMLButtonElement | HTMLAnchorElement | null>;
}) => {
  const recipeClass = iconButtonRecipe({ variant, size, disabled });
  const isLink = 'href' in props && props.href !== undefined;

  // Determine the underlying HTML tag
  const Component = isLink ? 'a' : 'button';

  return (
    <Box
      as={Component}
      ref={ref}
      className={clsx(recipeClass, className)}
      type={isLink ? undefined : 'button'}
      aria-disabled={disabled ? true : undefined}
      {...(!isLink && { disabled })}
      style={{
        cursor: disabled ? 'not-allowed !important' : 'pointer',
        pointerEvents: disabled && isLink ? 'none' : undefined,
        textDecoration: 'none',
        ...props.style,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

IconButton.displayName = 'IconButton';

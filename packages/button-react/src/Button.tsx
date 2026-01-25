import React from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { type RecipeVariants } from '@vanilla-extract/recipes';

import { buttonRecipe, iconStyle } from './button.css.js';

type ButtonVariants = RecipeVariants<typeof buttonRecipe>;

type BaseButtonProps = Omit<BoxProps, 'as' | 'children'> & {
  /** The content of the button */
  children: React.ReactNode;
  /** The visual variant of the button */
  variant?: NonNullable<ButtonVariants>['variant'];
  /** The size of the button */
  size?: NonNullable<ButtonVariants>['size'];
  /** Whether the button should take up the full width of its container */
  fullWidth?: NonNullable<ButtonVariants>['fullWidth'];
  /**
   * Element placed before the children.
   * Can be a React Node (e.g. `<Icon />`) or a Component type (e.g. `Icon`).
   */
  startDecorator?: React.ReactNode | React.ElementType;
  /**
   * Element placed after the children.
   * Can be a React Node (e.g. `<Icon />`) or a Component type (e.g. `Icon`).
   */
  endDecorator?: React.ReactNode | React.ElementType;
  /** Whether the button/link is visually disabled */
  disabled?: NonNullable<ButtonVariants>['disabled'];
};

/**
 * Properties specific to the button element (when no href is provided).
 */
type ButtonElementProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

/**
 * Properties specific to the anchor element (when href is provided).
 */
type AnchorElementProps = BaseButtonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export type ButtonProps = ButtonElementProps | AnchorElementProps;

/**
 * Helper function to render a decorator dynamically.
 * Accepts either a React Element (<Icon />) or a Component Type (Icon).
 *
 * @param Decorator - The element or component to render.
 * @returns The rendered node or null.
 */
const renderDecorator = (Decorator: React.ReactNode | React.ElementType) => {
  if (!Decorator) return null;

  if (React.isValidElement(Decorator)) {
    return Decorator;
  }

  if (
    typeof Decorator === 'function' ||
    (typeof Decorator === 'object' && Decorator !== null)
  ) {
    const DecoratorComponent = Decorator as React.ElementType;
    return <DecoratorComponent />;
  }

  return Decorator as React.ReactNode;
};

export const Button = ({
  ref,
  children,
  variant = 'filled',
  size = 'medium',
  fullWidth = false,
  startDecorator,
  endDecorator,
  className,
  disabled = false,
  ...props
}: ButtonProps & {
  ref?: React.RefObject<HTMLButtonElement | HTMLAnchorElement | null>;
}) => {
  const recipeClass = buttonRecipe({ variant, size, fullWidth, disabled });
  const isLink = 'href' in props && props.href !== undefined;

  // Determine the underlying HTML tag
  const Component = isLink ? 'a' : 'button';

  return (
    <Box
      as={Component}
      ref={ref}
      className={clsx(recipeClass, className)}
      // If it's a button, explicitly set type="button" to avoid form submission by default.
      // If it's a link, type attribute is invalid/unnecessary.
      type={isLink ? undefined : 'button'}
      // Handle accessibility for disabled links since <a> doesn't support the disabled attribute naturally
      aria-disabled={disabled ? true : undefined}
      // Native disabled attribute only works for buttons
      {...(!isLink && { disabled })}
      style={{
        cursor: disabled ? 'not-allowed !important' : 'pointer',
        pointerEvents: disabled && isLink ? 'none' : undefined, // Prevent clicking disabled links
        textDecoration: 'none', // Reset default link underline
        ...props.style,
      }}
      {...props}
    >
      {startDecorator && (
        <span className={iconStyle} aria-hidden="true">
          {renderDecorator(startDecorator)}
        </span>
      )}

      {children}

      {endDecorator && (
        <span className={iconStyle} aria-hidden="true">
          {renderDecorator(endDecorator)}
        </span>
      )}
    </Box>
  );
};

Button.displayName = 'Button';

import React, { type InputHTMLAttributes } from 'react';

import clsx from 'clsx';

import { type RecipeVariants } from '@vanilla-extract/recipes';

import {
  endDecoratorStyle,
  helperTextRecipe,
  inputContainer,
  inputRecipe,
  nativeInput,
  startDecoratorStyle,
} from './input.css.js';

type InputVariants = RecipeVariants<typeof inputRecipe>;

/**
 * Helper function to render a decorator dynamically.
 * Accepts either a React Element (<Icon />) or a Component Type (Icon).
 */
const renderDecorator = (Decorator: React.ReactNode | React.ElementType) => {
  if (!Decorator) return null;

  // If it's already a React Element (e.g. <Icon size={20} />), return it.
  if (React.isValidElement(Decorator)) {
    return Decorator;
  }

  // If it's a Component function/class (e.g. IconSearch), render it.
  if (
    typeof Decorator === 'function' ||
    (typeof Decorator === 'object' && Decorator !== null)
  ) {
    const DecoratorComponent = Decorator as React.ElementType;
    // You can pass default props here if needed (e.g. size/color context)
    return <DecoratorComponent />;
  }

  // Fallback for strings or other nodes
  return Decorator as React.ReactNode;
};

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  /**
   * Visual style of the input.
   * @default 'outlined'
   */
  variant?: NonNullable<InputVariants>['variant'] | 'plain';

  /**
   * The size of the component.
   * @default 'medium'
   */
  size?: NonNullable<InputVariants>['size'];

  /**
   * If true, the input will take up the full width of its container.
   * @default true
   */
  fullWidth?: NonNullable<InputVariants>['fullWidth'];

  /**
   * If true, the component indicates an error state.
   */
  error?: boolean;

  /**
   * Element placed before the input text (e.g., icon, currency symbol).
   * Accepts a React Element or a Component Type.
   */
  startDecorator?: React.ReactNode | React.ElementType;

  /**
   * Element placed after the input text (e.g., loading spinner, clear button).
   * Accepts a React Element or a Component Type.
   */
  endDecorator?: React.ReactNode | React.ElementType;

  /**
   * Supporting text displayed below the input.
   * Changes color automatically if error is true.
   */
  helperText?: React.ReactNode;
};

/**
 * A flexible Input component following Material Design 3 specs.
 * React 19 Version: 'ref' is passed as a standard prop.
 */
export const Input: React.FC<
  InputProps & { ref?: React.Ref<HTMLInputElement> }
> = ({
  ref,
  variant = 'outlined',
  size = 'medium',
  fullWidth = true,
  error = false,
  disabled = false,
  className,
  startDecorator,
  endDecorator,
  helperText,
  style,
  ...props
}) => {
  const wrapperClass = inputRecipe({
    variant,
    size,
    error,
    disabled,
    fullWidth,
  });

  const helperTextClass = helperTextRecipe({ error });

  return (
    <div
      className={clsx(inputContainer, className)}
      style={{
        width: fullWidth ? '100%' : 'auto',
        cursor: disabled ? 'not-allowed' : 'text',
        ...style,
      }}
    >
      {/* INPUT VISUAL BOX */}
      <div className={wrapperClass}>
        {startDecorator && (
          <span className={startDecoratorStyle}>
            {renderDecorator(startDecorator)}
          </span>
        )}

        <input
          ref={ref}
          className={nativeInput}
          disabled={disabled}
          aria-invalid={error}
          {...props}
        />

        {endDecorator && (
          <span className={endDecoratorStyle}>
            {renderDecorator(endDecorator)}
          </span>
        )}
      </div>

      {/* HELPER TEXT */}
      {helperText && <p className={helperTextClass}>{helperText}</p>}
    </div>
  );
};

Input.displayName = 'Input';

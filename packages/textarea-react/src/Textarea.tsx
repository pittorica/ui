import React, { useId, useLayoutEffect, useRef, useState } from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { pitto } from '@pittorica/styles';
import { Text } from '@pittorica/text-react';
import { type RecipeVariants } from '@vanilla-extract/recipes';

import { textareaRecipe } from './textarea.css.js';

type TextareaVariants = RecipeVariants<typeof textareaRecipe>;

export type TextareaProps = Omit<BoxProps, 'as' | 'children'> &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
    hasError?: boolean;
    helpText?: string;
    variant?: NonNullable<TextareaVariants>['variant'];
    size?: NonNullable<TextareaVariants>['size'];
    disabled?: NonNullable<TextareaVariants>['disabled'];
  };

export const Textarea: React.FC<TextareaProps> = ({
  label,
  hasError = false,
  helpText,
  className,
  style,
  onChange,
  value,
  variant = 'outlined',
  size = 'medium',
  disabled = false,
  ...props
}) => {
  const { ref: _ignoredRef, ...rest } = props;

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const inputId = props.id || useId();

  const [internalValue, setInternalValue] = useState(props.defaultValue || '');
  const controlledValue = value === undefined ? internalValue : value;

  const recipeClass = textareaRecipe({
    variant,
    size,
    error: hasError,
    disabled: disabled || props.readOnly,
  });

  const errorStyle = hasError
    ? {
        borderColor: pitto.color.error[500].color,
        boxShadow: `0 0 0 1px ${pitto.color.error[500].color}`,
      }
    : {};

  useLayoutEffect(() => {
    const t = textareaRef.current;
    if (!t) return;
    t.style.height = 'auto';
    t.style.height = `${t.scrollHeight}px`;
  }, [controlledValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (value === undefined) {
      setInternalValue(e.target.value);
    }
    onChange?.(e);
  };

  return (
    <Box as="div">
      {label && (
        <Text
          as="label"
          htmlFor={inputId}
          size="small"
          style={{ display: 'block', marginBottom: '0.25rem', fontWeight: 600 }}
        >
          {label}
        </Text>
      )}

      <textarea
        id={inputId}
        ref={textareaRef}
        className={clsx(recipeClass, className)}
        style={{
          ...errorStyle,
          ...(disabled && { cursor: 'not-allowed' }),
          ...style,
        }}
        value={controlledValue}
        onChange={handleInputChange}
        aria-invalid={hasError}
        disabled={disabled}
        {...rest}
      />

      {helpText && (
        <Text
          size="small"
          style={{
            marginTop: '0.25rem',
            color: hasError
              ? pitto.color.error[500].color
              : pitto.color.gray[500].color,
          }}
        >
          {helpText}
        </Text>
      )}
    </Box>
  );
};

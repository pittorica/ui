import { createContext, type ReactNode, type Ref, use, useId } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';
import { Text } from '@pittorica/text-react';

type TextFieldSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface TextFieldContextType {
  inputId: string;
  helperId: string;
  disabled?: boolean;
  size: TextFieldSize;
}

const TextFieldContext = createContext<TextFieldContextType | null>(null);

const useTextFieldContext = () => {
  const context = use(TextFieldContext);
  if (!context)
    throw new Error(
      'TextField components must be wrapped in <TextField.Root />'
    );
  return context;
};

/* --- Root --- */
export interface TextFieldRootProps extends BoxProps {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: boolean;
  color?: PittoricaColor;
  disabled?: boolean;
  /** @default 'sm' */
  size?: TextFieldSize;
}

/**
 * Root container for TextField. Orchestrates layout, context, and sizes.
 */
export const TextFieldRoot = ({
  children,
  label,
  helperText,
  error,
  color = 'indigo',
  disabled,
  size = 'sm',
  className,
  style,
  ...props
}: TextFieldRootProps) => {
  const inputId = useId();
  const helperId = useId();

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  return (
    <TextFieldContext value={{ inputId, helperId, disabled, size }}>
      <Box
        {...props}
        className={clsx(
          'pittorica-text-field-root',
          `pittorica-text-field--${size}`,
          className
        )}
        data-error={error}
      >
        {label && (
          <Text
            as="label"
            htmlFor={inputId}
            weight="medium"
            style={{
              paddingLeft: '4px',
              fontSize: 'var(--pittorica-font-size-1)',
              marginBottom: '4px',
              display: 'inline-block',
            }}
          >
            {label}
          </Text>
        )}

        <div
          className="pittorica-text-field-input-wrapper"
          data-disabled={disabled}
          style={
            {
              '--pittorica-source-color': resolvedColor,
              ...style,
            } as React.CSSProperties
          }
        >
          {children}
        </div>

        {helperText && (
          <div id={helperId} className="pittorica-text-field-helper">
            {helperText}
          </div>
        )}
      </Box>
    </TextFieldContext>
  );
};

/* --- Input --- */
export type TextFieldInputProps = React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Native input element with semantic context and responsive sizing.
 */
export const TextFieldInput = ({
  className,
  ref,
  ...props
}: TextFieldInputProps & { ref?: Ref<HTMLInputElement> }) => {
  const { inputId, helperId, disabled } = useTextFieldContext();

  return (
    <input
      {...props}
      id={inputId}
      aria-describedby={helperId}
      disabled={disabled}
      ref={ref}
      className={clsx('pittorica-text-field-input', className)}
    />
  );
};

/* --- Slot --- */
/**
 * Visual slot for icons or interactive elements.
 */
export const TextFieldSlot = ({ children, className, ...props }: BoxProps) => (
  <div className={clsx('pittorica-text-field-slot', className)} {...props}>
    {children}
  </div>
);

export const TextField = {
  Root: TextFieldRoot,
  Input: TextFieldInput,
  Slot: TextFieldSlot,
};

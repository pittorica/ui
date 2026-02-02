import { createContext, type ReactNode, type Ref, use, useId } from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';
import { Text } from '@pittorica/text-react';

interface TextFieldContextType {
  inputId: string;
  helperId: string;
  disabled?: boolean;
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
}

export const TextFieldRoot = ({
  children,
  label,
  helperText,
  error,
  color = 'indigo',
  disabled,
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
    <TextFieldContext value={{ inputId, helperId, disabled }}>
      <Box
        {...props}
        className={clsx('pittorica-text-field-root', className)}
        data-error={error}
      >
        {label && (
          <Text
            as="label"
            htmlFor={inputId}
            size="2"
            weight="medium"
            mb="1"
            style={{ paddingLeft: '4px' }}
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

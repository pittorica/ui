import {
  createContext,
  type ReactNode,
  use,
  useEffect,
  useId,
  useRef,
} from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';
import { Text } from '@pittorica/text-react';

interface TextAreaContextType {
  inputId: string;
  helperId: string;
  disabled?: boolean;
}

const TextAreaContext = createContext<TextAreaContextType | null>(null);

const useTextAreaContext = () => {
  const context = use(TextAreaContext);
  if (!context)
    throw new Error('TextArea components must be wrapped in <TextArea.Root />');
  return context;
};

/* --- Root --- */
export interface TextAreaRootProps extends BoxProps {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: boolean;
  color?: PittoricaColor;
  disabled?: boolean;
}

/**
 * MD3 Filled TextArea Root.
 */
export const TextAreaRoot = ({
  children,
  label,
  helperText,
  error,
  color = 'indigo',
  disabled,
  className,
  style,
  ...props
}: TextAreaRootProps) => {
  const inputId = useId();
  const helperId = useId();

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  return (
    <TextAreaContext value={{ inputId, helperId, disabled }}>
      <Box
        {...props}
        className={clsx('pittorica-textarea-root', className)}
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
          className="pittorica-textarea-wrapper"
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
          <div id={helperId} className="pittorica-textarea-helper">
            {helperText}
          </div>
        )}
      </Box>
    </TextAreaContext>
  );
};

/* --- Content --- */
export interface TextAreaContentProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Enables automatic vertical resizing based on content */
  autoResize?: boolean;
}

/**
 * MD3 Filled TextArea Input with optional Auto-resizing.
 */
export const TextAreaContent = ({
  className,
  autoResize = false,
  onChange,
  value,
  defaultValue,
  ...props
}: TextAreaContentProps) => {
  const { inputId, helperId, disabled } = useTextAreaContext();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    const el = textareaRef.current;
    if (!el || !autoResize) return;

    // Reset height to calculate scrollHeight correctly
    el.style.height = 'auto';
    // Set new height based on scrollHeight
    el.style.height = `${el.scrollHeight}px`;
  };

  useEffect(() => {
    if (autoResize) {
      adjustHeight();
    }
  }, [value, defaultValue, autoResize]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (autoResize) {
      adjustHeight();
    }
    onChange?.(e);
  };

  return (
    <textarea
      {...props}
      id={inputId}
      ref={textareaRef}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      aria-describedby={helperId}
      onChange={handleChange}
      className={clsx('pittorica-textarea-input', className)}
      style={{ overflow: autoResize ? 'hidden' : undefined }}
    />
  );
};

export const TextArea = {
  Root: TextAreaRoot,
  Content: TextAreaContent,
};

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

type TextAreaSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface TextAreaContextType {
  inputId: string;
  helperId: string;
  disabled?: boolean;
  size: TextAreaSize;
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
  /** @default 'sm' */
  size?: TextAreaSize;
}

/**
 * Radix-like Outlined TextArea Root with support for multiple sizes.
 */
export const TextAreaRoot = ({
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
}: TextAreaRootProps) => {
  const inputId = useId();
  const helperId = useId();

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  return (
    <TextAreaContext value={{ inputId, helperId, disabled, size }}>
      <Box
        {...props}
        className={clsx(
          'pittorica-textarea-root',
          `pittorica-textarea--${size}`,
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
          className="pittorica-textarea-wrapper"
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
 * Textarea element optimized for SSR and fluid interactions.
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
    if (globalThis.window === undefined) return;

    const el = textareaRef.current;
    if (!el || !autoResize) return;

    el.style.height = 'auto';
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
      style={{
        overflow: autoResize ? 'hidden' : undefined,
        ...props.style,
      }}
    />
  );
};

export const TextArea = {
  Root: TextAreaRoot,
  Content: TextAreaContent,
};

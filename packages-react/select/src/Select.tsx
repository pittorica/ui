import { createContext, type ReactNode, type Ref, use, useId } from 'react';

import { clsx } from 'clsx';

import { IconChevronDown } from '@tabler/icons-react';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';
import { Text } from '@pittorica/text-react';

/* --- Context --- */
interface SelectContextType {
  inputId: string;
  helperId: string;
  disabled?: boolean;
}

const SelectContext = createContext<SelectContextType | null>(null);

const useSelectContext = () => {
  const context = use(SelectContext);
  if (!context)
    throw new Error('Select components must be wrapped in <Select.Root />');
  return context;
};

/* --- Root --- */
export interface SelectRootProps extends BoxProps {
  label?: ReactNode;
  helperText?: ReactNode;
  error?: boolean;
  color?: PittoricaColor;
  disabled?: boolean;
}

/**
 * MD3 Filled Select component with fixed chevron alignment.
 */
export const SelectRoot = ({
  children,
  label,
  helperText,
  error,
  color = 'indigo',
  disabled,
  className,
  style,
  ...props
}: SelectRootProps) => {
  const inputId = useId();
  const helperId = useId();

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  return (
    <SelectContext value={{ inputId, helperId, disabled }}>
      <Box
        {...props}
        className={clsx('pittorica-select-root', className)}
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
          className="pittorica-select-wrapper"
          style={
            {
              '--pittorica-source-color': resolvedColor,
              ...style,
            } as React.CSSProperties
          }
        >
          {children}
          {/* Slot chevron bilanciato orizzontalmente e centrato verticalmente */}
          <div className="pittorica-select-chevron">
            <IconChevronDown size={20} />
          </div>
        </div>

        {helperText && (
          <div id={helperId} className="pittorica-select-helper">
            {helperText}
          </div>
        )}
      </Box>
    </SelectContext>
  );
};

/* --- Content --- */
export type SelectContentProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const SelectContent = ({
  children,
  className,
  ref,
  ...props
}: SelectContentProps & { ref?: Ref<HTMLSelectElement> }) => {
  const { inputId, helperId, disabled } = useSelectContext();

  return (
    <select
      {...props}
      id={inputId}
      ref={ref}
      disabled={disabled}
      aria-describedby={helperId}
      className={clsx('pittorica-select-input', className)}
    >
      {children}
    </select>
  );
};

/* --- Slot --- */
export const SelectSlot = ({ children, className, ...props }: BoxProps) => (
  <div className={clsx('pittorica-select-slot', className)} {...props}>
    {children}
  </div>
);

export const Select = {
  Root: SelectRoot,
  Content: SelectContent,
  Slot: SelectSlot,
};

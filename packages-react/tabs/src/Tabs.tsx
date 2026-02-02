import {
  createContext,
  type KeyboardEvent,
  use,
  useMemo,
  useRef,
  useState,
} from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

interface TabsContextType {
  value?: string;
  onValueChange: (value: string) => void;
  color: PittoricaColor;
}

const TabsContext = createContext<TabsContextType | null>(null);

const useTabsContext = () => {
  const context = use(TabsContext);
  if (!context)
    throw new Error('Tabs components must be wrapped in <Tabs.Root />');
  return context;
};

/* --- Root --- */
export interface TabsRootProps extends BoxProps {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  color?: PittoricaColor;
}

const TabsRoot = ({
  children,
  defaultValue,
  value: controlledValue,
  onValueChange,
  color = 'indigo',
  className,
  ...props
}: TabsRootProps) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : uncontrolledValue;

  const handleValueChange = (newValue: string) => {
    if (!isControlled) setUncontrolledValue(newValue);
    onValueChange?.(newValue);
  };

  const contextValue = useMemo(
    () => ({
      value: currentValue,
      onValueChange: handleValueChange,
      color,
    }),
    [currentValue, color]
  );

  return (
    <TabsContext value={contextValue}>
      <Box {...props} className={clsx('pittorica-tabs-root', className)}>
        {children}
      </Box>
    </TabsContext>
  );
};

/* --- List --- */
const TabsList = ({ children, className, ...props }: BoxProps) => {
  const listRef = useRef<HTMLDivElement>(null);
  const { onValueChange } = useTabsContext();

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.getAttribute('role') !== 'tab') return;

    const tabs = [
      ...(listRef.current?.querySelectorAll('[role="tab"]') || []),
    ] as HTMLElement[];
    const index = tabs.indexOf(target);

    let nextIndex: number | null = null;

    switch (event.key) {
      case 'ArrowRight': {
        nextIndex = (index + 1) % tabs.length;
        break;
      }
      case 'ArrowLeft': {
        nextIndex = (index - 1 + tabs.length) % tabs.length;
        break;
      }
      case 'Home': {
        nextIndex = 0;
        break;
      }
      case 'End': {
        nextIndex = tabs.length - 1;
        break;
      }
    }

    if (nextIndex !== null) {
      event.preventDefault();
      const nextTab = tabs[nextIndex];
      nextTab.focus();
      const nextValue = nextTab.dataset.value;
      if (nextValue) onValueChange(nextValue);
    }
  };

  return (
    <Box
      ref={listRef}
      role="tablist"
      onKeyDown={handleKeyDown}
      className={clsx('pittorica-tabs-list', className)}
      {...props}
    >
      {children}
    </Box>
  );
};

/* --- Trigger --- */
export interface TabsTriggerProps extends BoxProps {
  value: string;
}

const TabsTrigger = ({
  value: itemValue,
  children,
  className,
  style,
  ...props
}: TabsTriggerProps) => {
  const { value, onValueChange, color } = useTabsContext();
  const isActive = value === itemValue;

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  return (
    <Box
      as="button"
      role="tab"
      type="button"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      data-state={isActive ? 'active' : 'inactive'}
      data-value={itemValue}
      className={clsx('pittorica-tabs-trigger', className)}
      onClick={() => onValueChange(itemValue)}
      style={
        {
          '--pittorica-source-color': resolvedColor,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {children}
    </Box>
  );
};

/* --- Content --- */
export interface TabsContentProps extends BoxProps {
  value: string;
}

const TabsContent = ({
  value: itemValue,
  children,
  className,
  ...props
}: TabsContentProps) => {
  const { value } = useTabsContext();
  const isActive = value === itemValue;

  return (
    <Box
      role="tabpanel"
      tabIndex={0}
      data-state={isActive ? 'active' : 'inactive'}
      className={clsx('pittorica-tabs-content', className)}
      {...props}
    >
      {isActive ? children : null}
    </Box>
  );
};

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
};

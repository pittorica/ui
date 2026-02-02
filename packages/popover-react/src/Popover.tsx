import {
  createContext,
  type CSSProperties,
  type ReactNode,
  type Ref,
  use,
  useMemo,
  useState,
} from 'react';

import { clsx } from 'clsx';

import {
  autoUpdate,
  type ExtendedRefs,
  flip,
  FloatingPortal,
  offset,
  type Placement,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import { Box, type BoxProps } from '@pittorica/box-react';

interface PopoverContextType {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  refs: ExtendedRefs<HTMLElement>;
  floatingStyles: CSSProperties;
  getReferenceProps: (
    userProps?: React.HTMLProps<Element>
  ) => Record<string, unknown>;
  getFloatingProps: (
    userProps?: React.HTMLProps<HTMLElement>
  ) => Record<string, unknown>;
}

const PopoverContext = createContext<PopoverContextType | null>(null);

const usePopoverContext = () => {
  const context = use(PopoverContext);
  if (!context)
    throw new Error('Popover components must be wrapped in <Popover />');
  return context;
};

export interface PopoverProps {
  children: ReactNode;
  /** @default 'bottom' */
  placement?: Placement;
}

export const Popover = ({ children, placement = 'bottom' }: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating<HTMLElement>({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [offset(8), flip(), shift({ padding: 5 })],
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const value = useMemo(
    () => ({
      isOpen,
      setIsOpen,
      refs,
      floatingStyles,
      getReferenceProps,
      getFloatingProps,
    }),
    [isOpen, refs, floatingStyles, getReferenceProps, getFloatingProps]
  );

  return <PopoverContext value={value}>{children}</PopoverContext>;
};

export interface PopoverTriggerProps {
  children: ReactNode;
  ref?: Ref<HTMLElement>;
}

export const PopoverTrigger = ({
  children,
  ref: externalRef,
}: PopoverTriggerProps) => {
  const { refs, getReferenceProps } = usePopoverContext();

  const setRefs = (node: HTMLElement | null) => {
    refs.setReference(node);
    if (!externalRef) return;
    if (typeof externalRef === 'function') {
      externalRef(node);
    } else {
      (externalRef as React.RefObject<HTMLElement | null>).current = node;
    }
  };

  return (
    <Box as="span" display="inline-flex" {...getReferenceProps()} ref={setRefs}>
      {children}
    </Box>
  );
};

export interface PopoverContentProps extends BoxProps {
  ref?: Ref<HTMLElement>;
}

export const PopoverContent = ({
  children,
  className,
  ref: externalRef,
  ...props
}: PopoverContentProps) => {
  const { isOpen, refs, floatingStyles, getFloatingProps } =
    usePopoverContext();

  if (!isOpen) return null;

  const setFloatingRefs = (node: HTMLElement | null) => {
    refs.setFloating(node);
    if (!externalRef) return;
    if (typeof externalRef === 'function') {
      externalRef(node);
    } else {
      (externalRef as React.RefObject<HTMLElement | null>).current = node;
    }
  };

  return (
    <FloatingPortal>
      <Box
        {...props}
        {...getFloatingProps()}
        ref={setFloatingRefs}
        className={clsx('pittorica-popover-content', className)}
        style={{ ...floatingStyles, ...props.style }}
      >
        {children}
      </Box>
    </FloatingPortal>
  );
};

Popover.displayName = 'Popover';
PopoverTrigger.displayName = 'PopoverTrigger';
PopoverContent.displayName = 'PopoverContent';

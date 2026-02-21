import {
  type ComponentProps,
  createContext,
  type ElementType,
  type MouseEvent,
  use,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import FocusLock from 'react-focus-lock';

import { createPortal } from 'react-dom';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { Heading } from '@pittorica/heading-react';
import { PittoricaTheme } from '@pittorica/theme-react';

/* --- Types --- */

/**
 * Appearance types for the Dialog.
 */
export type DialogAppearance = 'light' | 'dark' | 'inherit';

/**
 * Polymorphic props for the Dialog component.
 */
export type DialogProps<E extends ElementType = 'div'> = BoxProps<E> & {
  open: boolean;
  onClose: () => void;
  appearance?: DialogAppearance;
  /** @default true */
  closeOnOverlayClick?: boolean;
  /** @default true */
  closeOnEsc?: boolean;
};

interface DialogContextValue {
  titleId: string;
  descriptionId: string;
}

const DialogContext = createContext<DialogContextValue | null>(null);

/**
 * Internal hook to consume DialogContext safely.
 */
const useDialogContext = (): DialogContextValue => {
  const context = use(DialogContext);
  if (!context) {
    throw new Error('Dialog compound components must be used within a Dialog');
  }
  return context;
};

/* --- Main Component --- */

/**
 * Dialog component providing a modal window with focus trap and scroll lock.
 */
export const Dialog = <E extends ElementType = 'div'>({
  open,
  onClose,
  children,
  className,
  appearance,
  closeOnOverlayClick = true,
  closeOnEsc = true,
  as,
  ...props
}: DialogProps<E>) => {
  const titleId = useId();
  const descriptionId = useId();
  const [inheritedAppearance, setInheritedAppearance] =
    useState<DialogAppearance>();
  const anchorRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && closeOnEsc) onClose();
    };
    globalThis.addEventListener('keydown', handleEsc);
    return () => globalThis.removeEventListener('keydown', handleEsc);
  }, [open, onClose, closeOnEsc]);

  useEffect(() => {
    if (!open) return;
    const originalStyle = globalThis.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [open]);

  useLayoutEffect(() => {
    if (open && anchorRef.current) {
      const themeElement = anchorRef.current.closest(
        '.pittorica-theme'
      ) as HTMLElement | null;
      if (themeElement) {
        const app = themeElement.dataset.appearance as DialogAppearance;
        setInheritedAppearance(app || undefined);
      }
    }
    return;
  }, [open]);

  if (!open || !isMounted) return null;

  const finalAppearance = appearance ?? inheritedAppearance;
  const Tag = as || 'div';

  return (
    <>
      <div ref={anchorRef} style={{ display: 'none' }} aria-hidden="true" />
      {createPortal(
        <div
          className="pittorica-dialog-overlay"
          onClick={closeOnOverlayClick ? onClose : undefined}
          aria-hidden="true"
        >
          <PittoricaTheme appearance={finalAppearance}>
            <FocusLock returnFocus={true}>
              <Box
                as={Tag as ElementType}
                className={clsx('pittorica-dialog-content', className)}
                onClick={(e: MouseEvent<HTMLElement>) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
                {...(props as BoxProps<E>)}
              >
                <DialogContext value={{ titleId, descriptionId }}>
                  {children}
                </DialogContext>
              </Box>
            </FocusLock>
          </PittoricaTheme>
        </div>,
        document.body
      )}
    </>
  );
};

/* --- Compound Components --- */

/**
 * Accessible title for the Dialog.
 */
export const DialogTitle = ({
  children,
  id: _id,
  ...props
}: ComponentProps<typeof Heading>) => {
  const { titleId } = useDialogContext();
  return (
    <Heading as="h2" id={titleId} size="6" mb="3" {...props}>
      {children}
    </Heading>
  );
};

/**
 * Accessible description for the Dialog.
 */
export const DialogDescription = <E extends ElementType = 'div'>({
  children,
  id: _id,
  ...props
}: BoxProps<E>) => {
  const { descriptionId } = useDialogContext();
  return (
    <Box
      id={descriptionId}
      mb="4"
      style={{
        color: 'inherit',
        fontSize: 'var(--pittorica-font-size-3)',
      }}
      {...(props as BoxProps<E>)}
    >
      {children}
    </Box>
  );
};

/**
 * Container for Dialog actions (usually buttons).
 */
export const DialogActions = <E extends ElementType = 'div'>({
  children,
  ...props
}: BoxProps<E>) => (
  <Box
    style={{
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 'var(--pittorica-space-3)',
      marginTop: 'var(--pittorica-space-6)',
    }}
    {...(props as BoxProps<E>)}
  >
    {children}
  </Box>
);

Dialog.displayName = 'Dialog';
DialogTitle.displayName = 'Dialog.Title';
DialogDescription.displayName = 'Dialog.Description';
DialogActions.displayName = 'Dialog.Actions';

/**
 * @file AlertDialog.tsx
 * Standalone AlertDialog component with proper theming and corrected visibility.
 */

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

import { createPortal } from 'react-dom';

import { clsx } from 'clsx';

import { Box } from '@pittorica/box-react';
import { PittoricaTheme } from '@pittorica/theme-react';

/* --- Internal Types --- */

export interface AlertDialogProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  /** @default false */
  closeOnOverlayClick?: boolean;
  /** @default false */
  closeOnEsc?: boolean;
  /**
   * The appearance of the dialog.
   * @default 'inherit'
   */
  appearance?: 'light' | 'dark' | 'inherit';
}

/* --- Standalone Compound Components --- */

export const AlertDialogTitle = ({
  children,
  color,
}: {
  children: ReactNode;
  color?: string;
}) => (
  <Box mb="3">
    <h2
      className="pittorica-alert-dialog-title"
      style={
        {
          '--_alert-dialog-title-color': color
            ? `var(--pittorica-${color}-9)`
            : undefined,
        } as CSSProperties
      }
    >
      {children}
    </h2>
  </Box>
);

export const AlertDialogDescription = ({
  children,
}: {
  children: ReactNode;
}) => (
  <Box mb="6">
    <p className="pittorica-alert-dialog-description">{children}</p>
  </Box>
);

export const AlertDialogActions = ({ children }: { children: ReactNode }) => (
  <Box mt="6" className="pittorica-alert-dialog-actions">
    {children}
  </Box>
);

/* --- Main Standalone Component --- */

export const AlertDialog = ({
  open,
  onClose,
  children,
  className,
  appearance,
  closeOnOverlayClick = false,
  closeOnEsc = false,
}: AlertDialogProps) => {
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const anchorRef = useRef<HTMLDivElement>(null);
  const [inheritedAppearance, setInheritedAppearance] = useState<
    'light' | 'dark' | undefined
  >();

  useEffect(() => {
    setMounted(true);
  }, []);

  useLayoutEffect(() => {
    if (open && anchorRef.current) {
      const themeElement = anchorRef.current.closest(
        '.pittorica-theme'
      ) as HTMLElement | null;
      if (themeElement) {
        const app = themeElement.dataset.appearance as 'light' | 'dark';
        setInheritedAppearance(app || undefined);
      }
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const originalStyle = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (closeOnEsc && e.key === 'Escape') onClose();
    };

    globalThis.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      globalThis.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, closeOnEsc, onClose]);

  if (!open || !mounted || typeof document === 'undefined') return null;

  const finalAppearance =
    appearance === 'inherit'
      ? inheritedAppearance
      : (appearance ?? inheritedAppearance);

  return (
    <>
      <div ref={anchorRef} style={{ display: 'none' }} aria-hidden="true" />
      {createPortal(
        <div
          className={clsx('pittorica-alert-dialog-portal')}
          onClick={closeOnOverlayClick ? onClose : undefined}
        >
          <div className="pittorica-alert-dialog-overlay" aria-hidden="true" />

          <PittoricaTheme appearance={finalAppearance}>
            <Box
              className={clsx('pittorica-alert-dialog-content', className)}
              role="alertdialog"
              aria-modal="true"
              aria-labelledby={titleId}
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </Box>
          </PittoricaTheme>
        </div>,
        document.body
      )}
    </>
  );
};

AlertDialog.displayName = 'AlertDialog';

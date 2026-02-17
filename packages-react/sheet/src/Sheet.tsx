import { type ReactNode, useEffect } from 'react';

import { createPortal } from 'react-dom';

import { clsx } from 'clsx';

import { IconX } from '@tabler/icons-react';

import { Box, type BoxProps } from '@pittorica/box-react';
import { IconButton } from '@pittorica/icon-button-react';

export interface SheetProps extends BoxProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  /**
   * Direction from which the sheet appears.
   * @default 'right'
   */
  side?: 'top' | 'right' | 'bottom' | 'left';
  title?: string;
}

/**
 * Sheet component following MD3 guidelines for modal panels.
 * Supports positioning from all four viewport edges.
 */
export const Sheet = ({
  isOpen,
  onClose,
  children,
  side = 'right',
  title,
  className,
  ...props
}: SheetProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <>
      <div className="pittorica-sheet-overlay" onClick={onClose} />
      <Box
        {...props}
        className={clsx(
          'pittorica-sheet-content',
          `pittorica-sheet--${side}`,
          className
        )}
        role="dialog"
        aria-modal="true"
      >
        {(side === 'bottom' || side === 'top') && (
          <div className="pittorica-sheet-handle" />
        )}

        <Box
          p="4"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {title && (
            <h2 style={{ margin: 0, fontSize: 'var(--pittorica-font-size-4)' }}>
              {title}
            </h2>
          )}
          <IconButton
            variant="text"
            color="slate"
            onClick={onClose}
            aria-label="Close"
          >
            <IconX size={20} />
          </IconButton>
        </Box>

        <Box p="4" style={{ flexGrow: 1, overflowY: 'auto' }}>
          {children}
        </Box>
      </Box>
    </>,
    document.body
  );
};

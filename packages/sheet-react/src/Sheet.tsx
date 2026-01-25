import React, { useEffect } from 'react';

import { createPortal } from 'react-dom';

import clsx from 'clsx';

import { IconX } from '@tabler/icons-react';

import { AnimatePresence, motion, type PanInfo } from 'motion/react';
import type { RecipeVariants } from '@vanilla-extract/recipes';

import {
  closeButton,
  content,
  dragHandle,
  header,
  overlay,
  sheetRecipe,
  titleStyle,
} from './sheet.css.js';

type SheetVariants = RecipeVariants<typeof sheetRecipe>;

export type SheetProps = {
  isOpen: boolean;
  onClose: () => void;

  side?: NonNullable<SheetVariants>['side'];

  maxWidth?: NonNullable<SheetVariants>['width'];

  /**
   * Background color of the sheet.
   */
  color?: string;

  /**
   * Text color of the sheet content (including title and close button).
   * Use this to ensure contrast when using a custom background color.
   */
  textColor?: string;

  title?: React.ReactNode;
  showHandle?: boolean;
  children: React.ReactNode;
  className?: string;
};

const sheetVariants = {
  bottom: {
    hidden: { y: '100%' },
    visible: { y: 0 },
  },
  right: {
    hidden: { x: '100%' },
    visible: { x: 0 },
  },
  left: {
    hidden: { x: '-100%' },
    visible: { x: 0 },
  },
};

export const Sheet: React.FC<SheetProps> = ({
  isOpen,
  onClose,
  side = 'right',
  maxWidth = 'full',
  color,
  textColor,
  title,
  showHandle = true,
  children,
  className,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      globalThis.addEventListener('keydown', handleEsc);
    }

    return () => {
      globalThis.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const unlockScroll = () => {
    document.body.style.overflow = '';
  };

  const handleDragEnd = (_: never, info: PanInfo) => {
    if (info.offset.y > 100 || info.velocity.y > 500) {
      onClose();
    }
  };

  const appliedWidth = side === 'bottom' ? maxWidth : 'full';

  return createPortal(
    <AnimatePresence mode="wait" onExitComplete={unlockScroll}>
      {isOpen && (
        <>
          <motion.div
            className={overlay}
            onClick={onClose}
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />

          <motion.div
            className={clsx(
              sheetRecipe({ side, width: appliedWidth }),
              className
            )}
            style={{
              backgroundColor: color,
              color: textColor,
            }}
            role="dialog"
            aria-modal="true"
            variants={sheetVariants[side]}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300,
              mass: 0.8,
            }}
            drag={side === 'bottom' ? 'y' : false}
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.2 }}
            onDragEnd={handleDragEnd}
          >
            {side === 'bottom' && showHandle && <div className={dragHandle} />}

            <div className={header}>
              {title ? <h2 className={titleStyle}>{title}</h2> : <div />}
              <button
                className={closeButton}
                onClick={onClose}
                aria-label="Close sheet"
              >
                <IconX size={24} />
              </button>
            </div>

            <div className={content}>{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

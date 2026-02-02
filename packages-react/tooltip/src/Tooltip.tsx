import {
  type CSSProperties,
  type ReactNode,
  useCallback,
  useRef,
  useState,
} from 'react';

import { createPortal } from 'react-dom';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';

export interface TooltipProps extends Omit<BoxProps, 'content'> {
  /** The content to display inside the tooltip */
  content: ReactNode;
  /** The element that triggers the tooltip */
  children: ReactNode;
  /**
   * The preferred side of the trigger to render against.
   * @default 'top'
   */
  side?: 'top' | 'bottom';
}

export const Tooltip = ({
  children,
  content,
  side: preferredSide = 'top',
  className,
  ...props
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const [actualSide, setActualSide] = useState(preferredSide);

  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const gap = 8;
    const tooltipHeight = 32;
    let side = preferredSide;

    if (preferredSide === 'top' && triggerRect.top - tooltipHeight - gap < 0) {
      side = 'bottom';
    } else if (
      preferredSide === 'bottom' &&
      triggerRect.bottom + tooltipHeight + gap > window.innerHeight
    ) {
      side = 'top';
    }

    setActualSide(side);

    const top =
      side === 'top' ? triggerRect.top - gap : triggerRect.bottom + gap;

    const left = triggerRect.left + triggerRect.width / 2;

    setCoords({ top, left });
  }, [preferredSide]);

  const handleOpen = () => {
    updatePosition();
    setIsOpen(true);
  };

  const handleClose = () => setIsOpen(false);

  return (
    <Box
      ref={triggerRef}
      as="span"
      className={clsx('pittorica-tooltip-root', className)}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={handleClose}
      {...props}
    >
      {children}
      {isOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            ref={tooltipRef}
            className="pittorica-tooltip-content"
            role="tooltip"
            style={
              {
                top: coords.top,
                left: coords.left,
                transform:
                  actualSide === 'top'
                    ? 'translate(-50%, -100%)'
                    : 'translate(-50%, 0)',
                position: 'fixed',
              } as CSSProperties
            }
          >
            {content}
          </div>,
          document.body
        )}
    </Box>
  );
};

Tooltip.displayName = 'Tooltip';

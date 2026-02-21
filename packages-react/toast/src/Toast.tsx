import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { createPortal } from 'react-dom';

import { IconX } from '@tabler/icons-react';

import { Box } from '@pittorica/box-react';
import { IconButton } from '@pittorica/icon-button-react';
import { type PittoricaColor, Text } from '@pittorica/text-react';
import { PittoricaTheme } from '@pittorica/theme-react';

export interface ToastData {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  duration?: number;
  color?: PittoricaColor;
}

const TOAST_EVENT = 'pittorica-toast';

/**
 * Dispatches a global toast notification.
 */
export const toast = (data: Omit<ToastData, 'id'>) => {
  const id = Math.random().toString(36).slice(2, 9);
  const event = new CustomEvent(TOAST_EVENT, { detail: { ...data, id } });
  globalThis.dispatchEvent(event);
};

/**
 * Individual Toast Item with its own lifecycle and progress bar.
 */
const ToastItem = ({
  t,
  onRemove,
}: {
  t: ToastData;
  onRemove: (id: string) => void;
}) => {
  const color = t.color || 'slate';
  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');

  const resolvedBg = isSemantic
    ? `var(--pittorica-${color}-3)`
    : `color-mix(in srgb, ${color} 12%, var(--pittorica-white))`;

  const resolvedText = isSemantic
    ? `var(--pittorica-${color}-11)`
    : `color-mix(in srgb, ${color} 80%, var(--pittorica-black))`;

  const resolvedBorder = isSemantic
    ? `var(--pittorica-${color}-6)`
    : `color-mix(in srgb, ${color} 20%, transparent)`;

  const duration = t.duration || 3000;

  return (
    <Box
      className="pittorica-toast-root"
      role="status"
      aria-live="polite"
      style={
        {
          '--_toast-bg': resolvedBg,
          '--_toast-text': resolvedText,
          '--_toast-border': resolvedBorder,
        } as React.CSSProperties
      }
    >
      {/* Progress Bar */}
      {duration > 0 && (
        <div
          className="pittorica-toast-progress"
          style={{
            animation: `pittorica-toast-progress-shrink ${duration}ms linear forwards`,
          }}
        />
      )}

      <Box className="pittorica-toast-content">
        <Text weight="bold" style={{ display: 'block' }}>
          {t.title}
        </Text>
        {t.description && (
          <Text
            color="inherit"
            size="2"
            style={{ display: 'block', opacity: 0.8 }}
          >
            {t.description}
          </Text>
        )}
      </Box>
      <IconButton
        variant="text"
        color="inherit"
        size="1"
        onClick={() => onRemove(t.id)}
        aria-label="Close"
      >
        <IconX size={18} />
      </IconButton>
    </Box>
  );
};

/**
 * ToastProvider renders notifications sent via the toast() function.
 */
export const ToastProvider = () => {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const timersRef = useRef<Set<ReturnType<typeof setTimeout>>>(new Set());

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  useEffect(() => {
    const handleAddToast = (e: Event) => {
      const customEvent = e as CustomEvent<ToastData>;
      const newToast = customEvent.detail;

      setToasts((prev) => [...prev, newToast]);

      if (newToast.duration !== 0) {
        const timer = setTimeout(() => {
          removeToast(newToast.id);
          timersRef.current.delete(timer);
        }, newToast.duration || 3000);
        timersRef.current.add(timer);
      }
    };

    globalThis.addEventListener(TOAST_EVENT, handleAddToast);
    return () => {
      globalThis.removeEventListener(TOAST_EVENT, handleAddToast);
      for (const timer of timersRef.current) clearTimeout(timer);
      timersRef.current.clear();
    };
  }, [removeToast]);

  if (typeof document === 'undefined') return null;

  // Attempt to inherit appearance from the body/html theme if present
  const appearance = (document.documentElement.dataset.appearance ||
    document.body.dataset.appearance ||
    'light') as 'light' | 'dark';

  return createPortal(
    <Box
      className="pittorica-toast-viewport"
      role="region"
      aria-label="Notifications"
    >
      <PittoricaTheme appearance={appearance}>
        {toasts.map((t) => (
          <ToastItem key={t.id} t={t} onRemove={removeToast} />
        ))}
      </PittoricaTheme>
    </Box>,
    document.body
  );
};

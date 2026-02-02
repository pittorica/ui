import {
  type ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { createPortal } from 'react-dom';

import { IconSquareRoundedXFilled } from '@tabler/icons-react';

import { Box } from '@pittorica/box-react';
import { IconButton } from '@pittorica/icon-button-react';
import { Text } from '@pittorica/text-react';

export interface ToastData {
  id: string;
  title: ReactNode;
  description?: ReactNode;
  duration?: number;
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

  return createPortal(
    <Box
      className="pittorica-toast-viewport"
      role="region"
      aria-label="Notifications"
    >
      {toasts.map((t) => (
        <Box
          key={t.id}
          className="pittorica-toast-root"
          role="status"
          aria-live="polite"
        >
          <Box className="pittorica-toast-content">
            <Text size="2" weight="bold" style={{ display: 'block' }}>
              {t.title}
            </Text>
            {t.description && (
              <Text size="2" color="slate" style={{ display: 'block' }}>
                {t.description}
              </Text>
            )}
          </Box>
          <IconButton
            variant="text"
            color="slate"
            size="1"
            onClick={() => removeToast(t.id)}
            aria-label="Close"
          >
            <IconSquareRoundedXFilled size={18} />
          </IconButton>
        </Box>
      ))}
    </Box>,
    document.body
  );
};

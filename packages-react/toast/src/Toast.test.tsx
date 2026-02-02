/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { act } from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { toast, ToastProvider } from './Toast.js';

describe('Toast System', () => {
  it('should render a toast when function is called', () => {
    render(<ToastProvider />);

    act(() => {
      toast({ title: 'Notification', description: 'Test Message' });
    });

    expect(screen.getByText('Notification')).toBeInTheDocument();
    expect(screen.getByText('Test Message')).toBeInTheDocument();
  });

  it('should remove toast when clicking IconButton', () => {
    render(<ToastProvider />);

    act(() => {
      toast({ title: 'Removable' });
    });

    const closeBtn = screen.getByLabelText('Close');
    fireEvent.click(closeBtn);

    expect(screen.queryByText('Removable')).not.toBeInTheDocument();
  });

  it('should disappear after default duration (3000ms)', () => {
    vi.useFakeTimers();
    render(<ToastProvider />);

    act(() => {
      toast({ title: 'Temporal' });
    });

    expect(screen.getByText('Temporal')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(3000);
    });

    expect(screen.queryByText('Temporal')).not.toBeInTheDocument();
    vi.useRealTimers();
  });

  it('should support custom duration', () => {
    vi.useFakeTimers();
    render(<ToastProvider />);

    act(() => {
      toast({ title: 'Quick', duration: 500 });
    });

    act(() => {
      vi.advanceTimersByTime(501);
    });

    expect(screen.queryByText('Quick')).not.toBeInTheDocument();
    vi.useRealTimers();
  });
});

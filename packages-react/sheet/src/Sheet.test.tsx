/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Sheet } from './Sheet';

describe('Sheet', () => {
  it('renders correctly when open', () => {
    render(
      <Sheet isOpen={true} onClose={() => {}} title="Test Sheet">
        Content
      </Sheet>
    );
    expect(screen.getByText('Test Sheet')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('calls onClose when overlay is clicked', () => {
    const onClose = vi.fn();
    render(
      <Sheet isOpen={true} onClose={onClose}>
        Content
      </Sheet>
    );

    const overlay = document.querySelector('.pittorica-sheet-overlay');
    if (overlay) fireEvent.click(overlay);

    expect(onClose).toHaveBeenCalled();
  });

  it('locks body scroll when open', () => {
    render(
      <Sheet isOpen={true} onClose={() => {}}>
        Content
      </Sheet>
    );
    expect(document.body.style.overflow).toBe('hidden');
  });
});

/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TextArea } from './TextArea.js';

describe('TextArea', () => {
  it('links label and textarea correctly via generated IDs', () => {
    render(
      <TextArea.Root label="Comments">
        <TextArea.Content />
      </TextArea.Root>
    );

    const label = screen.getByText('Comments');
    const input = screen.getByRole('textbox');

    expect(label).toHaveAttribute('for', input.id);
    expect(input).toHaveAttribute('id');
  });

  it('applies the correct size class to the root', () => {
    const { container } = render(
      <TextArea.Root size="lg">
        <TextArea.Content />
      </TextArea.Root>
    );
    expect(container.firstChild).toHaveClass('pittorica-textarea--lg');
  });

  it('applies error state attributes to root and coordinates styles', () => {
    const { container } = render(
      <TextArea.Root error helperText="Invalid input">
        <TextArea.Content />
      </TextArea.Root>
    );

    const root = container.firstChild;
    expect(root).toHaveAttribute('data-error', 'true');
  });

  it('adjusts height when autoResize is enabled', () => {
    render(
      <TextArea.Root>
        <TextArea.Content autoResize />
      </TextArea.Root>
    );

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;

    // Simulate scrollHeight change
    Object.defineProperty(textarea, 'scrollHeight', {
      configurable: true,
      value: 150,
    });

    fireEvent.change(textarea, { target: { value: 'New long text' } });

    expect(textarea.style.height).toBe('150px');
  });

  it('disables the textarea and applies data-disabled attribute to wrapper', () => {
    render(
      <TextArea.Root disabled>
        <TextArea.Content />
      </TextArea.Root>
    );

    const textarea = screen.getByRole('textbox');
    expect(textarea).toBeDisabled();
    expect(textarea.parentElement).toHaveAttribute('data-disabled', 'true');
  });
});

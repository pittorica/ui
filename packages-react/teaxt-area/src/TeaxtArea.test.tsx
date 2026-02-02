/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TextArea } from './TextArea';

describe('TextArea', () => {
  it('links label and textarea correctly', () => {
    render(
      <TextArea.Root label="Comments">
        <TextArea.Content />
      </TextArea.Root>
    );

    const label = screen.getByText('Comments');
    const input = screen.getByRole('textbox');

    expect(label).toHaveAttribute('for', input.id);
  });

  it('applies error state attributes', () => {
    render(
      <TextArea.Root error helperText="Invalid input">
        <TextArea.Content />
      </TextArea.Root>
    );

    const root = screen.getByText('Invalid input').parentElement;
    expect(root).toHaveAttribute('data-error', 'true');
  });

  it('adjusts height when autoResize is enabled', () => {
    render(
      <TextArea.Root>
        <TextArea.Content autoResize />
      </TextArea.Root>
    );

    const textarea = screen.getByRole('textbox') as HTMLTextAreaElement;

    Object.defineProperty(textarea, 'scrollHeight', {
      configurable: true,
      value: 150,
    });

    fireEvent.change(textarea, { target: { value: 'New long text' } });

    expect(textarea.style.height).toBe('150px');
  });

  it('disables the textarea when root is disabled', () => {
    render(
      <TextArea.Root disabled>
        <TextArea.Content />
      </TextArea.Root>
    );

    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});

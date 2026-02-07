/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Select } from './Select.js';

describe('Select', () => {
  it('links label and select correctly via IDs', () => {
    render(
      <Select.Root label="Language">
        <Select.Content>
          <option value="en">English</option>
        </Select.Content>
      </Select.Root>
    );
    const label = screen.getByText('Language');
    const select = screen.getByRole('combobox');
    expect(label).toHaveAttribute('for', select.id);
  });

  it('applies the correct size class', () => {
    const { container } = render(
      <Select.Root size="lg">
        <Select.Content>
          <option>1</option>
        </Select.Content>
      </Select.Root>
    );
    expect(container.firstChild).toHaveClass('pittorica-select--lg');
  });

  it('is disabled when the Root disabled prop is true', () => {
    render(
      <Select.Root disabled>
        <Select.Content>
          <option>1</option>
        </Select.Content>
      </Select.Root>
    );
    expect(screen.getByRole('combobox')).toBeDisabled();
  });
});

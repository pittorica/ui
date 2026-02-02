/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { RadioCard } from './RadioCard.js';

describe('RadioCard', () => {
  it('selects an item on click', () => {
    const handleChange = vi.fn();
    render(
      <RadioCard.Root onValueChange={handleChange} defaultValue="A">
        <RadioCard.Item value="A">Card A</RadioCard.Item>
        <RadioCard.Item value="B">Card B</RadioCard.Item>
      </RadioCard.Root>
    );

    const cardB = screen.getByRole('radio', { name: /card b/i });
    fireEvent.click(cardB);

    expect(handleChange).toHaveBeenCalledWith('B');
    expect(cardB).toHaveAttribute('aria-checked', 'true');
    expect(cardB).toHaveAttribute('data-state', 'checked');
  });

  it('remains disabled when group is disabled', () => {
    render(
      <RadioCard.Root disabled defaultValue="A">
        <RadioCard.Item value="A">Card A</RadioCard.Item>
      </RadioCard.Root>
    );

    const card = screen.getByRole('radio');
    expect(card).toBeDisabled();

    fireEvent.click(card);
    expect(card).toHaveAttribute('aria-checked', 'true');
  });

  it('renders with correct grid columns', () => {
    const { container } = render(
      <RadioCard.Root columns="3">
        <RadioCard.Item value="1">1</RadioCard.Item>
      </RadioCard.Root>
    );
    const root = container.firstChild as HTMLElement;
    expect(root.style.gridTemplateColumns).toBe('repeat(3, minmax(0, 1fr))');
  });
});

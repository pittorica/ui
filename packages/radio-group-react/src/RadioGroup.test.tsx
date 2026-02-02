/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { RadioGroup, RadioGroupItem } from './RadioGroup.js';

describe('RadioGroup', () => {
  it('manages selection exclusively', () => {
    render(
      <RadioGroup defaultValue="1">
        <RadioGroupItem value="1" aria-label="Option 1" />
        <RadioGroupItem value="2" aria-label="Option 2" />
      </RadioGroup>
    );

    const radio1 = screen.getByLabelText('Option 1');
    const radio2 = screen.getByLabelText('Option 2');

    expect(radio1).toHaveAttribute('aria-checked', 'true');
    expect(radio2).toHaveAttribute('aria-checked', 'false');

    fireEvent.click(radio2);

    expect(radio1).toHaveAttribute('aria-checked', 'false');
    expect(radio2).toHaveAttribute('aria-checked', 'true');
  });

  it('calls onValueChange when a new option is selected', () => {
    const handleChange = vi.fn();
    render(
      <RadioGroup onValueChange={handleChange}>
        <RadioGroupItem value="apple" aria-label="Apple" />
        <RadioGroupItem value="orange" aria-label="Orange" />
      </RadioGroup>
    );

    fireEvent.click(screen.getByLabelText('Orange'));
    expect(handleChange).toHaveBeenCalledWith('orange');
  });

  it('disables all items when group is disabled', () => {
    render(
      <RadioGroup disabled>
        <RadioGroupItem value="1" aria-label="Option 1" />
        <RadioGroupItem value="2" aria-label="Option 2" />
      </RadioGroup>
    );

    expect(screen.getByLabelText('Option 1')).toBeDisabled();
    expect(screen.getByLabelText('Option 2')).toBeDisabled();
  });
});

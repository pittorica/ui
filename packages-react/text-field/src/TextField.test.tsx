/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TextField } from './TextField';

describe('TextField', () => {
  it('links label and input correctly via generated IDs', () => {
    render(
      <TextField.Root label="Username">
        <TextField.Input />
      </TextField.Root>
    );

    const label = screen.getByText('Username');
    const input = screen.getByRole('textbox');

    expect(label).toHaveAttribute('for', input.id);
    expect(input).toHaveAttribute('id');
  });

  it('links helper text to input via aria-describedby', () => {
    render(
      <TextField.Root helperText="Minimum 5 characters">
        <TextField.Input />
      </TextField.Root>
    );

    const input = screen.getByRole('textbox');
    const helper = screen.getByText('Minimum 5 characters');

    expect(input).toHaveAttribute('aria-describedby', helper.id);
  });

  it('respects disabled state from root', () => {
    render(
      <TextField.Root disabled>
        <TextField.Input />
      </TextField.Root>
    );

    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('renders slots in the correct order', () => {
    render(
      <TextField.Root>
        <TextField.Slot data-testid="start">Start</TextField.Slot>
        <TextField.Input />
        <TextField.Slot data-testid="end">End</TextField.Slot>
      </TextField.Root>
    );

    const wrapper = screen.getByRole('textbox').parentElement;
    const children = wrapper?.children;

    expect(children?.[0]).toHaveAttribute('data-testid', 'start');
    expect(children?.[2]).toHaveAttribute('data-testid', 'end');
  });
});

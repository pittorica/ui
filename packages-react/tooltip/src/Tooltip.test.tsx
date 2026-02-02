/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Tooltip } from './Tooltip.js';

describe('Tooltip', () => {
  beforeEach(() => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      width: 100,
      height: 40,
      top: 100,
      left: 100,
      bottom: 140,
      right: 200,
      x: 100,
      y: 100,
      toJSON: () => {},
    });
  });

  it('does not render content by default', () => {
    render(
      <Tooltip content="Tooltip Info">
        <button>Hover me</button>
      </Tooltip>
    );

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('renders content on mouse enter and hides on mouse leave', () => {
    render(
      <Tooltip content="Tooltip Info">
        <button>Hover me</button>
      </Tooltip>
    );

    const trigger = screen.getByText('Hover me');

    // Mouse Enter
    fireEvent.mouseEnter(trigger);
    const tooltip = screen.getByRole('tooltip');
    expect(tooltip).toBeInTheDocument();
    expect(tooltip).toHaveTextContent('Tooltip Info');

    // Mouse Leave
    fireEvent.mouseLeave(trigger);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('renders content on focus and hides on blur', () => {
    render(
      <Tooltip content="Tooltip Info">
        <button>Focus me</button>
      </Tooltip>
    );

    const trigger = screen.getByText('Focus me');

    fireEvent.focus(trigger);
    expect(screen.getByRole('tooltip')).toBeInTheDocument();

    fireEvent.blur(trigger);
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('renders content inside a Portal (body)', () => {
    render(
      <Tooltip content="Portal Content">
        <span>Trigger</span>
      </Tooltip>
    );

    fireEvent.mouseEnter(screen.getByText('Trigger'));

    const tooltip = screen.getByRole('tooltip');
    expect(tooltip.parentElement).toBe(document.body);
  });
});

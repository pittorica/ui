/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('renders correctly as a button by default', () => {
    render(<IconButton>Icon</IconButton>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('pittorica-icon-button');
  });

  it('renders as an anchor when href is provided', () => {
    render(<IconButton href="https://pittorica.it">Link</IconButton>);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://pittorica.it');
  });

  it('correctly forwards the ref to the underlying DOM element', () => {
    let capturedRef: HTMLElement | null = null;

    render(
      <IconButton
        ref={(el: HTMLButtonElement | null) => {
          capturedRef = el;
        }}
      >
        Target
      </IconButton>
    );

    expect(capturedRef).not.toBeNull();

    expect((capturedRef as unknown as HTMLElement).tagName).toBe('BUTTON');

    expect(capturedRef).toBe(screen.getByText('Target'));
  });

  it('applies size and variant classes correctly', () => {
    const { container } = render(
      <IconButton size="1" variant="tonal">
        Icon
      </IconButton>
    );
    const element = container.firstChild as HTMLElement;

    expect(element).toHaveClass('pittorica-icon-button--1');
    expect(element).toHaveClass('pittorica-icon-button--tonal');
  });

  it('computes semantic color CSS variables', () => {
    const { container } = render(<IconButton color="orange">Icon</IconButton>);
    const element = container.firstChild as HTMLElement;

    expect(element.style.getPropertyValue('--pittorica-source-color')).toBe(
      'var(--pittorica-orange-9)'
    );
  });

  it('is disabled when the disabled prop is true', () => {
    render(<IconButton disabled>Icon</IconButton>);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});

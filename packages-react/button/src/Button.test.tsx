/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from './Button.js';

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole('button', { name: /click me/i })
    ).toBeInTheDocument();
  });

  it('renders as an anchor when href is provided', () => {
    render(<Button href="https://google.com">Link</Button>);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://google.com');
    expect(link.tagName).toBe('A');
  });

  it('applies the correct variant class', () => {
    const { container } = render(<Button variant="tonal">Tonal</Button>);
    expect(container.firstChild).toHaveClass('pittorica-button--tonal');
  });

  it('applies the correct size class', () => {
    const { container } = render(<Button size="lg">Large</Button>);
    expect(container.firstChild).toHaveClass('pittorica-button--lg');
  });

  it('is disabled when the disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute('aria-disabled', 'true');
  });

  it('injects dynamic color variables correctly', () => {
    const { container } = render(<Button color="crimson">Colored</Button>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.getPropertyValue('--pittorica-source-color')).toBe(
      'var(--pittorica-crimson-9)'
    );
  });

  it('spreads layout props to the DOM element', () => {
    const { container } = render(
      <Button mt="4" id="custom-id">
        Button
      </Button>
    );
    const element = container.firstChild as HTMLElement;

    expect(element.id).toBe('custom-id');
    // Layout props are handled by the underlying Box component
    expect(element).toHaveStyle({ marginTop: 'var(--pittorica-space-4)' });
  });
});

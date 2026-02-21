/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Container } from './Container';

describe('Container', () => {
  it('should apply the correct maxWidth style', () => {
    const { container } = render(<Container maxWidth="md">Content</Container>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.maxWidth).toBe('var(--pittorica-bp-md)');
  });

  it('should apply data-fixed attribute', () => {
    const { container } = render(<Container fixed>Content</Container>);
    const element = container.firstChild as HTMLElement;
    expect(element.dataset.fixed).toBe('true');
  });

  it('should apply the disable-gutters class when prop is true', () => {
    const { container } = render(<Container disableGutters>Content</Container>);
    const element = container.firstChild as HTMLElement;

    expect(element).toHaveClass('pittorica-container--disable-gutters');
  });
});

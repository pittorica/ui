/**
 * @vitest-environment jsdom
 */
import type { ComponentProps, ElementType } from 'react';

import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Heading } from './Heading.js';

// Mock Text to isolate Heading tests and verify prop passing
vi.mock('@pittorica/text-react', () => ({
  Text: ({
    as: Component = 'span',
    size,
    color,
    ...props
  }: ComponentProps<'span'> & {
    as?: ElementType;
    size?: string;
    color?: string;
  }) => <Component data-size={size} data-test-color={color} {...props} />,
}));

describe('Heading', () => {
  it('should render as an h1 by default', () => {
    const { container } = render(<Heading>Title</Heading>);
    const element = container.firstChild as HTMLElement;
    expect(element.tagName).toBe('H1');
    expect(element.classList.contains('pittorica-heading')).toBe(true);
  });

  it('should automatically assign size based on tag', () => {
    const { container } = render(<Heading as="h3">Title</Heading>);
    const element = container.firstChild as HTMLElement;
    // h3 maps to size 7 in our tagToSizeMap
    expect(element.dataset.size).toBe('7');
  });

  it('should allow manual size override', () => {
    const { container } = render(
      <Heading as="h1" size="3">
        Small H1
      </Heading>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.dataset.size).toBe('3');
  });

  it('should correctly inherit color logic from Text', () => {
    const { container } = render(<Heading color="info">Info Title</Heading>);
    const element = container.firstChild as HTMLElement;
    expect(element.dataset.testColor).toBe('info');
  });
});

/**
 * @vitest-environment jsdom
 */
import type { ComponentProps, ElementType } from 'react';

import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Text } from './Text.js';

// Mock Box to bypass JSDOM style parsing limitations for CSS variables
vi.mock('@pittorica/box-react', () => ({
  Box: ({
    as: Component = 'div',
    style,
    ...props
  }: ComponentProps<'div'> & { as?: ElementType }) => (
    <Component
      style={style}
      data-test-style={JSON.stringify(style)}
      {...props}
    />
  ),
}));

describe('Text', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<Text>Content</Text>);
    expect(getByText('Content')).toBeTruthy();
  });

  it('should render as a span by default', () => {
    const { container } = render(<Text>Content</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element.tagName).toBe('SPAN');
  });

  it('should render as a different HTML element when using the as prop', () => {
    const { container } = render(<Text as="p">Content</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element.tagName).toBe('P');
  });

  it('should apply base class', () => {
    const { container } = render(<Text>Content</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('pittorica-text')).toBe(true);
  });

  it('should apply data-size attribute based on size prop', () => {
    const { container } = render(<Text size="4">Content</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element.dataset.size).toBe('4');
  });

  it('should apply data-weight attribute based on weight prop', () => {
    const { container } = render(<Text weight="bold">Content</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element.dataset.weight).toBe('bold');
  });

  it('should apply text-align style based on align prop', () => {
    const { container } = render(<Text align="center">Content</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element.style.textAlign).toBe('center');
  });

  it('should apply truncate class when truncate prop is true', () => {
    const { container } = render(<Text truncate>Content</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('pittorica-text--truncate')).toBe(true);
  });

  describe('Color prop', () => {
    it('should apply semantic color tokens as CSS variables', () => {
      const { container } = render(<Text color="danger">Content</Text>);
      const element = container.firstChild as HTMLElement;

      const styles = JSON.parse(element.dataset.testStyle || '{}');
      expect(styles.color).toBe('var(--pittorica-danger-9)');
    });

    it('should apply custom HEX colors', () => {
      const hex = '#ff00ff';
      const { container } = render(<Text color={hex}>Content</Text>);
      const element = container.firstChild as HTMLElement;

      const styles = JSON.parse(element.dataset.testStyle || '{}');
      expect(styles.color).toBe(hex);
    });

    it('should support inherited colors via "inherit"', () => {
      const { container } = render(<Text color="inherit">Content</Text>);
      const element = container.firstChild as HTMLElement;

      const styles = JSON.parse(element.dataset.testStyle || '{}');
      expect(styles.color).toBe('inherit');
    });

    it('should not apply color style if color prop is undefined', () => {
      const { container } = render(<Text>Content</Text>);
      const element = container.firstChild as HTMLElement;

      const styles = JSON.parse(element.dataset.testStyle || '{}');
      expect(styles.color).toBeUndefined();
    });
  });

  it('should merge custom className', () => {
    const { container } = render(<Text className="custom-test">Content</Text>);
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('pittorica-text')).toBe(true);
    expect(element.classList.contains('custom-test')).toBe(true);
  });

  it('should merge custom styles', () => {
    const { container } = render(
      <Text style={{ opacity: '0.5' }}>Content</Text>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.style.opacity).toBe('0.5');
  });
});

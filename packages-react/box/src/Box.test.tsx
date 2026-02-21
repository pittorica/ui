/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Box } from './Box';

describe('Box', () => {
  it('should merge class names correctly using clsx', () => {
    const { container } = render(
      <Box className="custom-1" mt="2">
        Content
      </Box>
    );
    const element = container.firstChild as HTMLElement;

    expect(element.classList.contains('pittorica-box')).toBe(true);
    expect(element.classList.contains('custom-1')).toBe(true);
  });

  it('should handle conditional classes gracefully', () => {
    const isActive = false;
    const { container } = render(
      // clsx handles the boolean check internally if we were passing it to className
      <Box className={isActive ? 'active' : undefined}>Content</Box>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('active')).toBe(false);
  });

  it('should apply the required attribute when the required prop is true', () => {
    const { container } = render(<Box as="input" required />);
    const element = container.firstChild as HTMLInputElement;
    expect(element.required).toBe(true);
  });
});

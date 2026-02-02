/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { AspectRatio } from './AspectRatio';

describe('AspectRatio', () => {
  it('applies the ratio as a CSS property', () => {
    const ratio = 16 / 9;
    const { container } = render(
      <AspectRatio ratio={ratio}>Content</AspectRatio>
    );
    const element = container.firstChild as HTMLElement;

    expect(element.style.aspectRatio).toBe(String(ratio));
  });

  it('renders children correctly', () => {
    const { getByText } = render(<AspectRatio>Test</AspectRatio>);
    expect(getByText('Test')).toBeTruthy();
  });
});

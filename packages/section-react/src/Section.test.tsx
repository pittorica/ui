/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Section } from './Section';

describe('Section', () => {
  it('should render as a section tag by default', () => {
    const { container } = render(<Section>Content</Section>);
    const element = container.firstChild as HTMLElement;
    expect(element.tagName).toBe('SECTION');
  });

  it('should apply the correct data-size attribute', () => {
    const { container } = render(<Section size="1">Content</Section>);
    const element = container.firstChild as HTMLElement;
    expect(element.dataset.size).toBe('1');
  });

  it('should allow custom tag via "as" prop', () => {
    const { container } = render(<Section as="div">Content</Section>);
    const element = container.firstChild as HTMLElement;
    expect(element.tagName).toBe('DIV');
  });

  it('should merge classNames correctly', () => {
    const { container } = render(
      <Section className="custom-section">Content</Section>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.classList.contains('pittorica-section')).toBe(true);
    expect(element.classList.contains('custom-section')).toBe(true);
  });
});

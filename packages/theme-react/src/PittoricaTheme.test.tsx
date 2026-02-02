/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { PittoricaTheme } from './PittoricaTheme';

describe('PittoricaTheme', () => {
  it('should render children correctly', () => {
    const { getByText } = render(
      <PittoricaTheme>
        <span>Test Child</span>
      </PittoricaTheme>
    );
    expect(getByText('Test Child')).toBeDefined();
  });

  it('should apply default theme attributes', () => {
    const { container } = render(<PittoricaTheme>Child</PittoricaTheme>);
    const element = container.firstChild as HTMLElement;

    expect(element.classList.contains('pittorica-theme')).toBe(true);
    expect(element.dataset.sourceColor).toBe('indigo');
    expect(element.dataset.appearance).toBe('light');
    expect(element.dataset.radius).toBe('medium');
  });

  it('should handle predefined keyword colors', () => {
    const { container } = render(
      <PittoricaTheme sourceColor="crimson">Child</PittoricaTheme>
    );
    const element = container.firstChild as HTMLElement;

    expect(element.dataset.sourceColor).toBe('crimson');
    // Inline variable should NOT be present for keyword colors
    expect(element.style.getPropertyValue('--pittorica-source-color')).toBe('');
  });

  it('should handle custom HEX colors', () => {
    const customHex = '#ff5500';
    const { container } = render(
      <PittoricaTheme sourceColor={customHex}>Child</PittoricaTheme>
    );
    const element = container.firstChild as HTMLElement;

    expect(element.dataset.sourceColor).toBe('custom');
    expect(element.style.getPropertyValue('--pittorica-source-color')).toBe(
      customHex
    );
  });

  it('should handle custom RGB colors', () => {
    const customRgb = 'rgb(255, 0, 0)';
    const { container } = render(
      <PittoricaTheme sourceColor={customRgb}>Child</PittoricaTheme>
    );
    const element = container.firstChild as HTMLElement;

    expect(element.dataset.sourceColor).toBe('custom');
    expect(element.style.getPropertyValue('--pittorica-source-color')).toBe(
      customRgb
    );
  });

  it('should merge additional classNames and styles', () => {
    const { container } = render(
      <PittoricaTheme className="extra-class" style={{ marginTop: '10px' }}>
        Child
      </PittoricaTheme>
    );
    const element = container.firstChild as HTMLElement;

    expect(element.classList.contains('pittorica-theme')).toBe(true);
    expect(element.classList.contains('extra-class')).toBe(true);
    expect(element.style.marginTop).toBe('10px');
  });

  it('should forward the id prop', () => {
    const { container } = render(
      <PittoricaTheme id="theme-root">Child</PittoricaTheme>
    );
    const element = container.firstChild as HTMLElement;
    expect(element.id).toBe('theme-root');
  });
});

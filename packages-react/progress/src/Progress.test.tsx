/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Progress } from './Progress.js';

describe('Progress', () => {
  it('renders correctly with default values', () => {
    render(<Progress value={50} />);
    const progressbar = screen.getByRole('progressbar');

    expect(progressbar).toHaveAttribute('aria-valuenow', '50');
    expect(progressbar).toHaveAttribute('aria-valuemin', '0');
    expect(progressbar).toHaveAttribute('aria-valuemax', '100');
  });

  it('clamps values between 0 and max', () => {
    const { container: containerMin } = render(<Progress value={-10} />);
    const indicatorMin = containerMin.querySelector(
      '.pittorica-progress-indicator'
    );
    expect(indicatorMin).toHaveStyle({ width: '0%' });

    const { container: containerMax } = render(
      <Progress value={150} max={100} />
    );
    const indicatorMax = containerMax.querySelector(
      '.pittorica-progress-indicator'
    );
    expect(indicatorMax).toHaveStyle({ width: '100%' });
  });

  it('applies custom semantic colors via CSS variables', () => {
    const { container } = render(<Progress value={50} color="orange" />);
    const root = container.firstChild as HTMLElement;
    expect(root.style.getPropertyValue('--pittorica-source-color')).toBe(
      'var(--pittorica-orange-9)'
    );
  });
});

/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Grid } from './Grid';

describe('Grid', () => {
  it('should apply base columns and gap classes', () => {
    const { container } = render(
      <Grid columns="3" gap="4">
        Content
      </Grid>
    );
    const element = container.firstChild as HTMLElement;

    expect(element).toHaveClass('pittorica-grid--columns-3');
    expect(element).toHaveClass('pittorica-grid--gap-4');
  });

  it('should apply fluid auto-fit styles and skip responsive classes', () => {
    const { container } = render(<Grid columns="auto-250px">Content</Grid>);
    const element = container.firstChild as HTMLElement;

    // Fluid logic uses inline styles instead of classes
    expect(element.style.gridTemplateColumns).toBe(
      'repeat(auto-fit, minmax(250px, 1fr))'
    );
    expect(element.className).not.toContain('pittorica-grid--columns-');
  });

  it('should handle separate gapX and gapY classes', () => {
    const { container } = render(
      <Grid gapX="2" gapY="6">
        Content
      </Grid>
    );
    const element = container.firstChild as HTMLElement;

    expect(element).toHaveClass('pittorica-grid--gapX-2');
    expect(element).toHaveClass('pittorica-grid--gapY-6');
  });

  it('should apply responsive classes for breakpoints', () => {
    const { container } = render(
      <Grid columns={{ initial: '1', md: '2', lg: '4' }}>Content</Grid>
    );
    const element = container.firstChild as HTMLElement;

    expect(element).toHaveClass('pittorica-grid--columns-1');
    expect(element).toHaveClass('pittorica-grid--md-columns-2');
    expect(element).toHaveClass('pittorica-grid--lg-columns-4');
  });

  it('should apply alignment and flow classes', () => {
    const { container } = render(
      <Grid align="center" justify="between" flow="row-dense">
        Content
      </Grid>
    );
    const element = container.firstChild as HTMLElement;

    expect(element).toHaveClass('pittorica-grid--align-center');
    expect(element).toHaveClass('pittorica-grid--justify-between');
    expect(element).toHaveClass('pittorica-grid--flow-row-dense');
  });
});

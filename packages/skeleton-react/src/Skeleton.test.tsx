/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Skeleton } from './Skeleton.js';

describe('Skeleton', () => {
  it('renders a loading state by default', () => {
    render(<Skeleton data-testid="skeleton" />);
    const skeleton = screen.getByTestId('skeleton');

    expect(skeleton).toHaveClass('pittorica-skeleton--loading');
    expect(skeleton).toBeVisible();
  });

  it('renders children and removes skeleton when loading is false', () => {
    const { container } = render(
      <Skeleton loading={false}>
        <span>Loaded Content</span>
      </Skeleton>
    );

    expect(screen.getByText('Loaded Content')).toBeInTheDocument();

    const skeletonElement = container.querySelector('.pittorica-skeleton');
    expect(skeletonElement).not.toBeInTheDocument();
  });

  it('applies circular styles when variant is circle', () => {
    render(<Skeleton variant="circle" data-testid="skeleton-circle" />);
    const skeleton = screen.getByTestId('skeleton-circle');

    expect(skeleton).toHaveStyle({
      borderRadius: 'var(--pittorica-radius-full)',
    });
  });

  it('hides children visibility when loading is true', () => {
    render(
      <Skeleton loading={true}>
        <span data-testid="child">Hidden Child</span>
      </Skeleton>
    );

    const child = screen.getByTestId('child');
    expect(child.parentElement).toHaveClass(
      'pittorica-skeleton--hiding-children'
    );
  });

  it('applies custom dimensions via props', () => {
    render(
      <Skeleton width="200px" height="50px" data-testid="skeleton-dims" />
    );
    const skeleton = screen.getByTestId('skeleton-dims');

    expect(skeleton).toHaveStyle({
      width: '200px',
      height: '50px',
    });
  });
});

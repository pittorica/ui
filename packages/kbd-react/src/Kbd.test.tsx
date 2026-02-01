/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Kbd } from './Kbd';

describe('Kbd', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<Kbd>shift</Kbd>);
    expect(getByText('shift')).toBeInTheDocument();
  });

  it('should apply custom class name', () => {
    const { container } = render(<Kbd className="custom-class">ctrl</Kbd>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should apply custom data attribute', () => {
    const { container } = render(<Kbd data-testid="kbd">alt</Kbd>);
    expect(container.firstChild).toHaveAttribute('data-testid', 'kbd');
  });
});

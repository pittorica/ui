/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Strong } from './Strong';

describe('Strong', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<Strong>Test Strong</Strong>);
    expect(getByText('Test Strong')).toBeInTheDocument();
  });

  it('should apply custom class name', () => {
    const { container } = render(
      <Strong className="custom-class">Test Strong</Strong>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should apply custom data attribute', () => {
    const { container } = render(
      <Strong data-testid="strong">Test Strong</Strong>
    );
    expect(container.firstChild).toHaveAttribute('data-testid', 'strong');
  });
});

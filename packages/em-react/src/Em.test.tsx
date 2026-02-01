/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Em } from './Em';

describe('Em', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<Em>Test Emphasis</Em>);
    expect(getByText('Test Emphasis')).toBeInTheDocument();
  });

  it('should apply custom class name', () => {
    const { container } = render(
      <Em className="custom-class">Test Emphasis</Em>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should apply custom data attribute', () => {
    const { container } = render(<Em data-testid="em">Test Emphasis</Em>);
    expect(container.firstChild).toHaveAttribute('data-testid', 'em');
  });
});

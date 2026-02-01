/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Quote } from './Quote';

describe('Quote', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<Quote>Test Quote</Quote>);
    expect(getByText('Test Quote')).toBeInTheDocument();
  });

  it('should apply custom class name', () => {
    const { container } = render(
      <Quote className="custom-class">Test Quote</Quote>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should apply custom data attribute', () => {
    const { container } = render(<Quote data-testid="quote">Test Quote</Quote>);
    expect(container.firstChild).toHaveAttribute('data-testid', 'quote');
  });
});

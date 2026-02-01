/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Blockquote } from './Blockquote';

describe('Blockquote', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<Blockquote>Test Content</Blockquote>);
    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('should apply custom class name', () => {
    const { container } = render(
      <Blockquote className="custom-class">Test Content</Blockquote>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should apply custom data attribute', () => {
    const { container } = render(
      <Blockquote data-testid="blockquote">Test Content</Blockquote>
    );
    expect(container.firstChild).toHaveAttribute('data-testid', 'blockquote');
  });
});

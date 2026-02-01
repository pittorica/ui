/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Link } from './Link';

describe('Link', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<Link href="#">Test Link</Link>);
    expect(getByText('Test Link')).toBeInTheDocument();
  });

  it('should apply custom class name', () => {
    const { container } = render(
      <Link href="#" className="custom-class">
        Test Link
      </Link>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should apply custom data attribute', () => {
    const { container } = render(
      <Link href="#" data-testid="link">
        Test Link
      </Link>
    );
    expect(container.firstChild).toHaveAttribute('data-testid', 'link');
  });

  it('should have the correct href attribute', () => {
    const { getByText } = render(
      <Link href="https://example.com">External Link</Link>
    );
    expect(getByText('External Link')).toHaveAttribute(
      'href',
      'https://example.com'
    );
  });
});

/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Stack } from './Stack';

describe('Stack', () => {
  it('should render children correctly', () => {
    const { getByText } = render(<Stack>Test Stack</Stack>);
    expect(getByText('Test Stack')).toBeInTheDocument();
  });

  it('should apply custom class name', () => {
    const { container } = render(
      <Stack className="custom-class">Test Stack</Stack>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('should apply custom data attribute', () => {
    const { container } = render(<Stack data-testid="stack">Test Stack</Stack>);
    expect(container.firstChild).toHaveAttribute('data-testid', 'stack');
  });
});

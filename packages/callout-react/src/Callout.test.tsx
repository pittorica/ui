/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Callout } from './Callout';

describe('Callout', () => {
  it('renders all sub-components correctly', () => {
    render(
      <Callout>
        <Callout.Icon>ℹ️</Callout.Icon>
        <Callout.Text>This is a message.</Callout.Text>
      </Callout>
    );
    expect(screen.getByText('ℹ️')).toBeTruthy();
    expect(screen.getByText('This is a message.')).toBeTruthy();
  });

  it('applies the correct variant class', () => {
    const { container } = render(<Callout variant="outline">Content</Callout>);
    expect(container.firstChild).toHaveClass('pittorica-callout--outline');
  });
});

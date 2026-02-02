/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Card } from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('applies the translucent class when the prop is true', () => {
    const { container } = render(<Card translucent>Glass Card</Card>);
    expect(container.firstChild).toHaveClass('pittorica-card--translucent');
  });

  it('applies correctly the variant class', () => {
    const { container } = render(<Card variant="outlined">Outlined Card</Card>);
    expect(container.firstChild).toHaveClass(
      'pittorica-card--variant-outlined'
    );
  });
});

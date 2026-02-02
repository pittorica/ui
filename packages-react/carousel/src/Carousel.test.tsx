/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Carousel } from './Carousel';

describe('Carousel', () => {
  it('renders all items provided', () => {
    render(
      <Carousel.Root>
        <Carousel.Item>Item 1</Carousel.Item>
        <Carousel.Item>Item 2</Carousel.Item>
      </Carousel.Root>
    );

    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('has correct scroll snap classes', () => {
    const { container } = render(
      <Carousel.Root>
        <Carousel.Item>Item</Carousel.Item>
      </Carousel.Root>
    );

    const viewport = container.querySelector('.pittorica-carousel-viewport');
    expect(viewport).toBeInTheDocument();
  });
});

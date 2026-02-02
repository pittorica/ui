/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Inset } from './Inset';

describe('Inset', () => {
  it('renders children correctly', () => {
    render(<Inset>Content</Inset>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies the correct side class', () => {
    const { container } = render(<Inset side="top">Content</Inset>);
    expect(container.firstChild).toHaveClass('pittorica-inset--top');
  });

  it('manages overflow style based on clip prop', () => {
    const { container: containerClip } = render(
      <Inset clip={true}>Content</Inset>
    );
    expect(containerClip.firstChild).toHaveStyle({ overflow: 'hidden' });

    const { container: containerNoClip } = render(
      <Inset clip={false}>Content</Inset>
    );
    expect(containerNoClip.firstChild).toHaveStyle({ overflow: 'visible' });
  });

  it('forwards ref correctly', () => {
    let capturedRef: HTMLElement | null = null;
    render(
      <Inset
        ref={(el) => {
          capturedRef = el;
        }}
      >
        Content
      </Inset>
    );
    expect(capturedRef).not.toBeNull();
    expect((capturedRef as unknown as HTMLElement).tagName).toBe('DIV');
  });
});

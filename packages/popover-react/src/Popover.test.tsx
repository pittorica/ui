/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { Popover, PopoverContent, PopoverTrigger } from './Popover';

describe('Popover', () => {
  it('should toggle content visibility on click', async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <PopoverTrigger>
          <button>Open Popover</button>
        </PopoverTrigger>
        <PopoverContent>
          <div>Popover Content</div>
        </PopoverContent>
      </Popover>
    );

    // Default: closed
    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();

    // Click to open
    const trigger = screen.getByRole('button', { name: /open popover/i });
    await user.click(trigger);

    // Verify content exists in Portal
    const content = await screen.findByText('Popover Content');
    expect(content).toBeInTheDocument();

    // Click again to close
    await user.click(trigger);
    expect(screen.queryByText('Popover Content')).not.toBeInTheDocument();
  });

  it('should support external refs on the trigger', async () => {
    let capturedRef: HTMLElement | null = null;
    const setRef = (node: HTMLElement | null) => {
      capturedRef = node;
    };

    render(
      <Popover>
        <PopoverTrigger ref={setRef}>
          <button>Ref Trigger</button>
        </PopoverTrigger>
        <PopoverContent>Content</PopoverContent>
      </Popover>
    );

    expect(capturedRef).not.toBeNull();
    expect((capturedRef as unknown as HTMLElement).tagName).toBe('SPAN');
  });
});

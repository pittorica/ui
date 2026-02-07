/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Flex } from './Flex';

describe('Flex', () => {
  it('should apply semantic justify classes', () => {
    const { container } = render(<Flex justify="between">Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveClass('pittorica-flex--justify-between');
  });

  it('should apply the gap class correctly', () => {
    const { container } = render(<Flex gap="4">Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveClass('pittorica-flex--gap-4');
  });

  it('should apply direction classes correctly', () => {
    const { container } = render(<Flex direction="column">Content</Flex>);
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveClass('pittorica-flex--direction-column');
  });

  it('should apply multiple responsive classes when using object syntax', () => {
    const { container } = render(
      <Flex direction={{ initial: 'column', md: 'row' }}>Content</Flex>
    );
    const element = container.firstChild as HTMLElement;

    expect(element).toHaveClass('pittorica-flex--direction-column');
    expect(element).toHaveClass('pittorica-flex--md-direction-row');
  });

  it('should apply fluid basis custom property correctly', () => {
    const { container } = render(
      <Flex basis="auto-250px">
        <div>Item</div>
      </Flex>
    );
    const element = container.firstChild as HTMLElement;

    expect(element.style.getPropertyValue('--pittorica-flex-basis')).toBe(
      '250px'
    );
  });

  it('should skip responsive classes when fluid basis is detected', () => {
    const { container } = render(<Flex basis="auto-100px">Content</Flex>);
    const element = container.firstChild as HTMLElement;

    expect(element.className).not.toContain('pittorica-flex--basis-');
  });
});

/**
 * @vitest-environment jsdom
 */
import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { Slider } from './Slider.js';

describe('Slider', () => {
  const OriginalPointerEvent = globalThis.PointerEvent;

  beforeEach(() => {
    vi.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
      width: 100,
      height: 20,
      top: 0,
      left: 0,
      bottom: 20,
      right: 100,
      x: 0,
      y: 0,
      toJSON: () => {},
    } as DOMRect);

    const BasePointerEvent = OriginalPointerEvent || globalThis.Event;
    globalThis.PointerEvent = class extends BasePointerEvent {
      constructor(type: string, props: PointerEventInit = {}) {
        super(type, props);
        if (props.clientX !== undefined) {
          Object.defineProperty(this, 'clientX', { value: props.clientX });
        }
      }
    } as unknown as typeof PointerEvent;
  });

  afterEach(() => {
    globalThis.PointerEvent = OriginalPointerEvent;
  });

  it('updates value correctly on click', () => {
    const handleChange = vi.fn();
    render(<Slider min={0} max={100} onValueChange={handleChange} />);

    const sliderRoot = screen.getByRole('slider').parentElement as HTMLElement;

    fireEvent.pointerDown(sliderRoot, {
      clientX: 50,
      pointerId: 1,
      buttons: 1,
    });

    expect(handleChange).toHaveBeenCalledWith(50);
  });

  it('respects the step prop', () => {
    const handleChange = vi.fn();
    render(<Slider min={0} max={100} step={20} onValueChange={handleChange} />);

    const sliderRoot = screen.getByRole('slider').parentElement as HTMLElement;

    fireEvent.pointerDown(sliderRoot, { clientX: 35 });

    expect(handleChange).toHaveBeenCalledWith(40);
  });

  it('clamps value between min and max', () => {
    const handleChange = vi.fn();
    render(<Slider min={10} max={50} onValueChange={handleChange} />);

    const sliderRoot = screen.getByRole('slider').parentElement as HTMLElement;

    fireEvent.pointerDown(sliderRoot, { clientX: 150 });
    expect(handleChange).toHaveBeenCalledWith(50);

    fireEvent.pointerDown(sliderRoot, { clientX: -50 });
    expect(handleChange).toHaveBeenCalledWith(10);
  });
});

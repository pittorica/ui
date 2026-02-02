import {
  type CSSProperties,
  type Ref,
  useCallback,
  useRef,
  useState,
} from 'react';

import { clsx } from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import type { PittoricaColor } from '@pittorica/text-react';

export interface SliderProps extends Omit<
  BoxProps,
  'onChange' | 'value' | 'defaultValue'
> {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  color?: PittoricaColor;
  onValueChange?: (value: number) => void;
}

/**
 * Slider component for numeric input via dragging.
 */
export const Slider = ({
  value: controlledValue,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  color = 'indigo',
  onValueChange,
  className,
  style,
  ref,
  ...props
}: SliderProps & { ref?: Ref<HTMLDivElement> }) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const trackRef = useRef<HTMLDivElement>(null);

  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : uncontrolledValue;

  const percentage = ((currentValue - min) / (max - min)) * 100;

  /**
   * Updates the slider value based on coordinate and target element.
   * Target is used as fallback for tests where refs might be tricky.
   */
  const updateValue = useCallback(
    (clientX: number, target?: HTMLElement) => {
      const element = trackRef.current || target;
      if (!element) return;

      const rect = element.getBoundingClientRect();

      if (!rect || rect.width <= 0) return;

      const xPos = typeof clientX === 'number' ? clientX : 0;

      const x = Math.max(0, Math.min(xPos - (rect.left || 0), rect.width));
      const rawValue = (x / rect.width) * (max - min) + min;

      const steppedValue = Math.round(rawValue / step) * step;
      const finalValue = Math.max(min, Math.min(max, steppedValue));

      if (Number.isNaN(finalValue)) return;

      if (!isControlled) setUncontrolledValue(finalValue);
      onValueChange?.(finalValue);
    },
    [max, min, step, isControlled, onValueChange]
  );

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (disabled) return;

    // Use currentTarget to ensure we have the element geometry immediately
    updateValue(event.clientX, event.currentTarget);

    const handlePointerMove = (e: PointerEvent) => updateValue(e.clientX);
    const handlePointerUp = () => {
      globalThis.removeEventListener('pointermove', handlePointerMove);
      globalThis.removeEventListener('pointerup', handlePointerUp);
    };

    globalThis.addEventListener('pointermove', handlePointerMove);
    globalThis.addEventListener('pointerup', handlePointerUp);
  };

  const isSemantic =
    color !== 'inherit' && !color?.startsWith('#') && !color?.startsWith('rgb');
  const resolvedColor = isSemantic ? `var(--pittorica-${color}-9)` : color;

  return (
    <Box
      {...props}
      ref={ref}
      className={clsx('pittorica-slider-root', className)}
      data-disabled={disabled}
      onPointerDown={handlePointerDown}
      style={
        { '--pittorica-source-color': resolvedColor, ...style } as CSSProperties
      }
    >
      <div className="pittorica-slider-track" ref={trackRef}>
        <div
          className="pittorica-slider-range"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={currentValue}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        className="pittorica-slider-thumb"
        style={{ position: 'absolute', left: `calc(${percentage}% - 8px)` }}
      />
    </Box>
  );
};

Slider.displayName = 'Slider';

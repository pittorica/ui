'use client';

import React, { useMemo } from 'react';

import {
  motion,
  type MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react';

import { animations, bubble, bubbleContainer } from './background.css.js';

type BubbleData = {
  id: string;
  x: number;
  y: number;
  color: string;
  baseSize: number;
  animationDelay: number;
  animationType: string;
  speed: number;
};

const DEFAULT_COLORS = [
  '#08A4BD',
  '#00B4C8',
  '#0099B6',
  '#006BA3',
  '#D87CAC',
  '#FF6B9D',
  '#FF1493',
  '#E60B7A',
  '#B45096',
  '#9D4EDD',
  '#7B2CBF',
  '#5A189A',
  '#00FF88',
  '#00E5A0',
  '#32C8DC',
  '#1DB5B5',
  '#FF6B35',
  '#FF8C42',
  '#FF9800',
  '#FF5733',
];

function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return '255,255,255';
  const r = Number.parseInt(result[1], 16);
  const g = Number.parseInt(result[2], 16);
  const b = Number.parseInt(result[3], 16);
  return `${r},${g},${b}`;
}

const BubbleItem = ({
  data,
  mouseX,
  mouseY,
  interactive,
}: {
  data: BubbleData;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  interactive: boolean;
}) => {
  const rgb = useMemo(() => hexToRgb(data.color), [data.color]);
  const springConfig = { damping: 15, stiffness: 150, mass: 0.5 };

  const xOffset = useTransform(mouseX, (val: number) => {
    if (!interactive) return 0;
    const dx = val - data.x;
    if (Math.abs(dx) < 15) return dx * 0.5;
    return 0;
  });

  const yOffset = useTransform(mouseY, (val: number) => {
    if (!interactive) return 0;
    const dy = val - data.y;
    if (Math.abs(dy) < 15) return dy * 0.5;
    return 0;
  });

  const xSpring = useSpring(xOffset, springConfig);
  const ySpring = useSpring(yOffset, springConfig);

  return (
    <motion.div
      className={bubble}
      style={{
        position: 'absolute',
        left: `${data.x}%`,
        top: `${data.y}%`,
        width: `${data.baseSize}px`,
        height: `${data.baseSize}px`,
        background: `radial-gradient(circle at center, rgba(${rgb}, 0.8) 0%, rgba(${rgb}, 0.3) 50%, rgba(${rgb}, 0) 100%)`,
        filter: `drop-shadow(0 0 30px rgba(${rgb}, 0.6))`,
        animation: interactive
          ? 'none'
          : `${data.animationType} ${data.speed}s ease-in-out infinite, ${animations.wander} ${data.speed + 10}s ease-in-out infinite`,
        x: interactive ? xSpring : '-50%',
        y: interactive ? ySpring : '-50%',
        translateX: '-50%',
        translateY: '-50%',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: 'easeOut',
        delay: data.animationDelay,
      }}
    />
  );
};

interface BackgroundBubblesProps {
  colors?: string[];
  animationSpeed?: number;
  interactive?: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export const BackgroundBubbles = ({
  colors = DEFAULT_COLORS,
  animationSpeed = 15,
  interactive = false,
  containerRef,
}: BackgroundBubblesProps) => {
  const [bubbles, setBubbles] = React.useState<BubbleData[]>([]);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  React.useEffect(() => {
    const numBubbles = colors.length;
    const cols = Math.ceil(Math.sqrt(numBubbles * 0.5));
    const rows = Math.ceil(numBubbles / cols);
    const cellWidth = 100 / cols;
    const cellHeight = 100 / rows;

    const availableCells = Array.from({ length: cols * rows }, (_, i) => i);

    for (let i = availableCells.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [availableCells[i], availableCells[j]] = [
        availableCells[j],
        availableCells[i],
      ];
    }

    const newBubbles: BubbleData[] = availableCells
      .slice(0, numBubbles)
      .map((cellIndex, i) => {
        const col = cellIndex % cols;
        const row = Math.floor(cellIndex / cols);
        const jitterX = (Math.random() - 0.5) * cellWidth * 1.2;
        const jitterY = (Math.random() - 0.5) * cellHeight * 1.2;

        return {
          id: `bubble-${Math.random().toString(36).slice(2, 11)}`,
          x: col * cellWidth + cellWidth / 2 + jitterX,
          y: row * cellHeight + cellHeight / 2 + jitterY,
          color: colors[i % colors.length],
          baseSize: 600 + (i % 5) * 120,
          animationDelay: i * 0.05,
          speed: animationSpeed + (i % 4) * 8,
          animationType: [animations.float, animations.drift, animations.pulse][
            i % 3
          ],
        };
      });

    // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
    setBubbles(newBubbles);
  }, [colors, animationSpeed]);

  React.useEffect(() => {
    if (!interactive || !containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
      mouseX.set(xPercent);
      mouseY.set(yPercent);
    };

    const element = containerRef.current;
    element.addEventListener('mousemove', handleMouseMove);
    return () => element.removeEventListener('mousemove', handleMouseMove);
  }, [interactive, mouseX, mouseY, containerRef]);

  if (bubbles.length === 0) return null;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', width: 0, height: 0 }}
        aria-hidden="true"
      >
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className={bubbleContainer}>
        {bubbles.map((bubbleData) => (
          <BubbleItem
            key={bubbleData.id}
            data={bubbleData}
            mouseX={mouseX}
            mouseY={mouseY}
            interactive={interactive}
          />
        ))}
      </div>
    </>
  );
};

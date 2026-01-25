import { keyframes, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

// Keyframes
const float = keyframes({
  '0%, 100%': { transform: 'translateY(-80px)' },
  '50%': { transform: 'translateY(80px)' },
});

const drift = keyframes({
  '0%, 100%': { transform: 'translateX(-80px)' },
  '50%': { transform: 'translateX(80px)' },
});

const pulse = keyframes({
  '0%, 100%': { transform: 'scale(0.9)' },
  '50%': { transform: 'scale(1.15)' },
});

const wander = keyframes({
  '0%': { transform: 'translate(0, 0)' },
  '25%': { transform: 'translate(50px, -50px)' },
  '50%': { transform: 'translate(-30px, 40px)' },
  '75%': { transform: 'translate(60px, 30px)' },
  '100%': { transform: 'translate(0, 0)' },
});

// Recipes
export const backgroundRecipe = recipe({
  base: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  variants: {
    position: {
      absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
      },
      relative: {
        position: 'relative',
        zIndex: 0,
      },
    },
  },
  defaultVariants: {
    position: 'absolute',
  },
});

export const bubbleContainer = style({
  position: 'absolute',
  inset: '-40%',
  filter: 'url(#gooey) blur(80px)',
  mixBlendMode: 'normal',
  pointerEvents: 'none', // Ensure clicks pass through to content
});

export const bubble = style({
  borderRadius: '50%',
  mixBlendMode: 'normal',
  transition: 'mix-blend-mode 0.3s ease',
});

export const contentContainer = style({
  position: 'relative',
  zIndex: 10,
  width: '100%',
  height: '100%',
});

// Export animation names for use in inline styles
export const animations = {
  float,
  drift,
  pulse,
  wander,
};

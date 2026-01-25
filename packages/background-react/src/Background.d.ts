import React from 'react';
export interface BackgroundProps extends React.PropsWithChildren {
  className?: string;
  style?: React.CSSProperties;
  /**
   * The visual variant of the background.
   * - 'bubbles': Floating, gooey bubbles.
   * - 'beams': Animated gradient beams.
   * - 'moon': Rocky, cratered surface texture.
   * - 'image': A static background image specified by imageUrl.
   * @default 'bubbles'
   */
  variant?: 'bubbles' | 'beams' | 'moon' | 'image';
  /**
   * URL of the image to use when variant is set to 'image'.
   */
  imageUrl?: string;
  colors?: string[];
  animationSpeed?: number;
}
export declare const Background: React.FC<BackgroundProps>;
//# sourceMappingURL=Background.d.ts.map

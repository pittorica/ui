import React, { type BlockquoteHTMLAttributes } from 'react';

import clsx from 'clsx';

import { Box, type BoxProps } from '@pittorica/box-react';
import { Surface, type SurfaceProps } from '@pittorica/surface-react';
import { Text } from '@pittorica/text-react';
import { type RecipeVariants } from '@vanilla-extract/recipes';

import { blockquoteRecipe } from './blockquote.css.js';
import { getColorHexValue } from './get-color-hex-value.js';

type BlockquoteVariants = RecipeVariants<typeof blockquoteRecipe>;

type BaseBlockquoteProps = Omit<
  BlockquoteHTMLAttributes<HTMLQuoteElement> & BoxProps,
  'as' | 'color' | 'cite'
>;

export interface BlockquoteProps extends BaseBlockquoteProps {
  variant?: NonNullable<BlockquoteVariants>['variant'];
  author?: string;
  source?: string;
  color?: BoxProps['color'];
}

export const Blockquote: React.FC<BlockquoteProps> = ({
  variant = 'classic',
  author,
  source,
  color = 'inherit',
  className,
  children,
  ...props
}) => {
  const recipeClass = blockquoteRecipe({ variant });

  const hexColor = getColorHexValue(color, 'currentColor');

  const tokenColor = color;

  const accentColor = variant === 'solid' ? undefined : tokenColor;

  const borderStyleProps =
    variant === 'classic'
      ? {
          style: {
            borderLeftWidth: '4px',
            borderLeftStyle: 'solid' as React.CSSProperties['borderLeftStyle'],
            borderLeftColor: hexColor,
          } as React.CSSProperties,
        }
      : {};

  const authorSeparator = variant === 'minimal' ? '' : '— ';

  const content = (
    <>
      <Text
        as="p"
        size={variant === 'solid' ? 'large' : 'medium'}
        variant="body"
        style={{ whiteSpace: 'pre-line' }}
        color={accentColor}
      >
        {children}
      </Text>

      {(author || source) && (
        <Box
          as="footer"
          marginTop="medium"
          style={{
            textAlign:
              variant === 'solid' || variant === 'minimal' ? 'center' : 'right',
            opacity: 0.8,
          }}
        >
          <Text
            as="cite"
            size="small"
            variant="label"
            style={{ fontStyle: 'normal' }}
            color={accentColor}
          >
            {authorSeparator}
            {author}
            {author && source && ', '}
            {source && (
              <Box as="span" style={{ fontStyle: 'italic' }}>
                {source}
              </Box>
            )}
          </Text>
        </Box>
      )}
    </>
  );

  const innerContent =
    variant === 'solid' ? (
      <Surface
        color={tokenColor as SurfaceProps['color']}
        className={clsx(recipeClass, className)}
      >
        {content}
      </Surface>
    ) : (
      content
    );

  return (
    <Box
      as="blockquote"
      className={clsx(recipeClass, className)}
      {...borderStyleProps}
      {...props}
    >
      {innerContent}
    </Box>
  );
};

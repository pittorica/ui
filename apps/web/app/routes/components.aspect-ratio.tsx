import {
  AspectRatio,
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Section,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { AspectRatio, Box } from '@pittorica/react';

export const Example = () => {
  return (
    <Box style={{ width: '400px' }}>
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1769251297393-8178b5988b08"
          alt="Landscape"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </AspectRatio>
    </Box>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Aspect Ratio</Heading>
          <Text size="4" color="gray" mb="6">
            Displays content within a desired ratio, useful for maintaining
            consistent dimensions for images, videos, and cards.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/aspect-ratio-react
`}
            </Code>
          </Flex>
        </Flex>

        {/* Interactive Preview */}
        <Section>
          <Heading size="4" mb="4">
            Usage Preview
          </Heading>
          <Card
            variant="outlined"
            p="9"
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Box style={{ width: '100%', maxWidth: '500px' }}>
              <AspectRatio
                ratio={16 / 9}
                style={{
                  borderRadius: 'var(--pittorica-radius-3)',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1769251297393-8178b5988b08?q=80&w=1170&auto=format&fit=crop"
                  alt="Landscape"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </AspectRatio>
            </Box>
          </Card>
        </Section>

        {/* Implementation Code */}
        <Box>
          <Heading size="4" mb="4">
            Implementation
          </Heading>
          <Code language="typescript" filename="Example.tsx" showLineNumbers>
            {codeExample}
          </Code>
        </Box>
      </Flex>
    </Container>
  );
}

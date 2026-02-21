import {
  AspectRatio,
  Box,
  Card,
  Code,
  Container,
  Flex,
  Grid,
  Heading,
  Section,
  Table,
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

        {/* Common Ratios */}
        <Section>
          <Heading size="4" mb="4">
            Common Ratios
          </Heading>
          <Grid columns="3" gap="4">
            <Box>
              <Text size="2" mb="2" color="gray">
                16:9 (Video)
              </Text>
              <AspectRatio
                ratio={16 / 9}
                style={{ borderRadius: 8, overflow: 'hidden' }}
              >
                <img src="https://picsum.photos/id/10/400/300" alt="16:9" />
              </AspectRatio>
            </Box>
            <Box>
              <Text size="2" mb="2" color="gray">
                4:3 (Classic)
              </Text>
              <AspectRatio
                ratio={4 / 3}
                style={{ borderRadius: 8, overflow: 'hidden' }}
              >
                <img src="https://picsum.photos/id/20/400/300" alt="4:3" />
              </AspectRatio>
            </Box>
            <Box>
              <Text size="2" mb="2" color="gray">
                1:1 (Square)
              </Text>
              <AspectRatio
                ratio={1}
                style={{ borderRadius: 8, overflow: 'hidden' }}
              >
                <img src="https://picsum.photos/id/30/400/300" alt="1:1" />
              </AspectRatio>
            </Box>
          </Grid>
        </Section>

        {/* Implementation Code */}
        <Box mb="9">
          <Heading size="4" mb="4">
            Implementation
          </Heading>
          <Code language="typescript" filename="Example.tsx" showLineNumbers>
            {codeExample}
          </Code>
        </Box>

        {/* Api Reference */}
        <Section>
          <Flex direction="column" gap="4">
            <Heading size="4" mb="4">
              Api
            </Heading>
            <Text mb="4" color="gray">
              Aspect Ratio component accepts all standard Box props in addition
              to the following:
            </Text>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>Prop</Table.ColumnHeader>
                  <Table.ColumnHeader>Type</Table.ColumnHeader>
                  <Table.ColumnHeader>Default</Table.ColumnHeader>
                  <Table.ColumnHeader>Description</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <Code>ratio</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">number</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">1 / 1</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The desired aspect ratio.</Text>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>
          </Flex>
        </Section>
      </Flex>
    </Container>
  );
}

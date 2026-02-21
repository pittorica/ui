import {
  Blockquote,
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  PittoricaTheme,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Blockquote, Flex } from '@pittorica/react';

export const Example = () => {
  return (
    <Flex direction="column" gap="4">
      <Blockquote variant="classic" color="indigo">
        Design is how it works.
      </Blockquote>
      <Blockquote variant="soft" color="teal">
        Stay hungry, stay foolish.
      </Blockquote>
    </Flex>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Blockquote</Heading>
          <Text size="4" color="gray" mb="6">
            Displays extended quotations with various visual styles and semantic
            colors.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/blockquote-react
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
              flexDirection: 'column',
              gap: '1rem',
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Blockquote variant="classic" color="indigo">
              "The only way to do great work is to love what you do." — Steve
              Jobs
            </Blockquote>
            <Blockquote variant="soft" color="teal">
              "Innovation distinguishes between a leader and a follower."
            </Blockquote>
            <Blockquote variant="outline" color="orange">
              "Stay hungry, stay foolish."
            </Blockquote>
            <Blockquote variant="solid" color="crimson">
              "Design is not just what it looks like and feels like. Design is
              how it works."
            </Blockquote>
          </Card>
        </Section>

        {/* Dark Mode Preview */}
        <Section>
          <Heading size="4" mb="4">
            Dark Mode Preview
          </Heading>
          <PittoricaTheme appearance="dark">
            <Card
              variant="outlined"
              p="9"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                backgroundColor: 'var(--pittorica-black)',
              }}
            >
              <Blockquote variant="soft" color="indigo">
                "Dark mode soft variant."
              </Blockquote>
              <Blockquote variant="solid" color="teal">
                "Dark mode solid variant."
              </Blockquote>
            </Card>
          </PittoricaTheme>
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
              Blockquote component accepts all standard Text props in addition
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
                    <Code>variant</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      'classic' | 'soft' | 'solid' | 'outline'
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'classic'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The visual style of the blockquote.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>color</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">PittoricaColor</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      The semantic color of the blockquote elements.
                    </Text>
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

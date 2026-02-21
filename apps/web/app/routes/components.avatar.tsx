import {
  Avatar,
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Avatar, Flex } from '@pittorica/react';

export const Example = () => {
  return (
    <Flex gap="4" align="center">
      {/* Image Avatar */}
      <Avatar
        src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb"
        alt="Colm Tuite"
        fallback="CT"
      />

      {/* Fallback Avatar */}
      <Avatar alt="John Doe" />

      {/* Custom Size and Radius */}
      <Avatar size="6" radius="medium" fallback="JD" />
    </Flex>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Avatar</Heading>
          <Text size="4" color="gray" mb="6">
            An image element with a fallback for representing the user, support
            for various sizes, shapes, and automatic initials.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/avatar-react
`}
            </Code>
          </Flex>
        </Flex>

        {/* Interactive Preview - Sizes */}
        <Section>
          <Heading size="4" mb="4">
            Sizes
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
            <Flex
              gap="4"
              align="center"
              style={{ flexWrap: 'wrap', justifyContent: 'center' }}
            >
              <Avatar
                size="2"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&dpr=2&q=80"
                alt="Size 2"
              />
              <Avatar
                size="4"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&dpr=2&q=80"
                alt="Size 4"
              />
              <Avatar
                size="6"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&dpr=2&q=80"
                alt="Size 6"
              />
              <Avatar
                size="8"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&dpr=2&q=80"
                alt="Size 8"
              />
            </Flex>
          </Card>
        </Section>

        {/* Interactive Preview - Fallbacks */}
        <Section>
          <Heading size="4" mb="4">
            Fallbacks & Shapes
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
            <Flex gap="4" align="center">
              <Avatar radius="none" fallback="Sq" color="indigo" />
              <Avatar radius="medium" fallback="Md" color="crimson" />
              <Avatar radius="full" alt="John Doe" />
              <Avatar
                radius="full"
                src="https://broken.link/image.jpg"
                fallback="Err"
              />
            </Flex>
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
                justifyContent: 'center',
                backgroundColor: 'var(--pittorica-black)',
                color: 'var(--pittorica-white)',
              }}
            >
              <Flex gap="4" align="center">
                <Avatar fallback="D" color="indigo" />
                <Avatar fallback="M" color="teal" />
                <Avatar fallback="P" color="orange" />
                <Avatar
                  src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=128&h=128&dpr=2&q=80"
                  alt="Dark Image"
                />
              </Flex>
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
              Avatar component accepts all standard Box props in addition to the
              following:
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
                    <Code>src</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">string</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The image source URL.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>alt</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">string</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The alt text for the image.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>fallback</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">ReactNode</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">-</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      Content to render when image fails to load.
                    </Text>
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
                    <Text size="2">'indigo'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The semantic color of the fallback.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>size</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'1' | ... | '9'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'3'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The size of the avatar.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>radius</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      'none' | 'small' | 'medium' | 'large' | 'full'
                    </Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'full'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The border radius of the avatar.</Text>
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

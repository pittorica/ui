import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Section,
  Skeleton,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Skeleton, Flex, Box } from '@pittorica/react';

export const Example = () => {
  return (
    <Flex align="center" gap="3">
      <Skeleton variant="circle" width={48} height={48} />
      <Box width={150}>
        <Skeleton variant="text" mb="1" />
        <Skeleton variant="text" width="60%" />
      </Box>
    </Flex>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Skeleton</Heading>
          <Text size="4" color="gray" mb="6">
            A placeholder component used to represent the shape of content while
            it is loading. Helps to reduce layout shifting and improve perceived
            performance.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/skeleton-react
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
              gap: 32,
              backgroundColor: 'var(--pittorica-slate-2)',
            }}
          >
            <Box>
              <Text size="2" color="gray" mb="3">
                List Item Loading
              </Text>
              <Flex align="center" gap="4">
                <Skeleton variant="circle" width="48px" height="48px" />
                <Box style={{ flexGrow: 1 }}>
                  <Skeleton variant="text" mb="2" width="40%" />
                  <Skeleton variant="text" width="80%" />
                </Box>
              </Flex>
            </Box>

            <Box>
              <Text size="2" color="gray" mb="3">
                Rectangular Content
              </Text>
              <Skeleton variant="rect" height="150px" />
            </Box>
          </Card>
        </Section>

        {/* Dark Mode Preview */}
        <Section>
          <Heading size="4" mb="4">
            Dark Mode Preview
          </Heading>
          <Card
            variant="outlined"
            p="9"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 32,
              backgroundColor: 'var(--pittorica-black)',
              color: 'var(--pittorica-white)',
            }}
          >
            <Box>
              <Flex align="center" gap="4">
                <Skeleton variant="circle" width="48px" height="48px" />
                <Box style={{ flexGrow: 1 }}>
                  <Skeleton variant="text" mb="2" width="40%" />
                  <Skeleton variant="text" width="80%" />
                </Box>
              </Flex>
            </Box>
            <Skeleton variant="rect" height="100px" />
          </Card>
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
              Skeleton component accepts all standard Box props in addition to
              the following:
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
                    <Code>loading</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">boolean</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">true</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">
                      Whether to show the skeleton placeholder.
                    </Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>variant</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'rect' | 'circle' | 'text'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">'rect'</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The shape of the skeleton.</Text>
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

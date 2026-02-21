import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Heading,
  Progress,
  Section,
  Table,
  Text,
} from '@pittorica/react';

export default function Route() {
  const codeExample = `import 'pittorica';
import { Progress, Flex } from '@pittorica/react';

export const Example = () => {
  return (
    <Flex direction="column" gap="4">
      <Progress value={45} color="indigo" />
      <Progress value={70} color="teal" />
    </Flex>
  );
};`;

  return (
    <Container maxWidth="lg" py="4">
      <Flex direction="column">
        {/* Header & Installation */}
        <Flex direction="column" gap="4">
          <Heading size="8">Progress</Heading>
          <Text size="4" color="gray" mb="6">
            Displays an indicator of the status of a task or process.
          </Text>

          <Flex direction="row" gap="2" basis="auto-300px">
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/react
`}
            </Code>
            <Code language="bash" showLineNumbers filename="Terminal">
              {`npm install pittorica @pittorica/progress-react
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
              <Text weight="bold" mb="2">
                Standard
              </Text>
              <Progress value={40} color="indigo" />
            </Box>

            <Box>
              <Text weight="bold" mb="2">
                Semantic States
              </Text>
              <Flex direction="column" gap="3">
                <Progress value={100} color="success" />
                <Progress value={65} color="teal" />
                <Progress value={15} color="danger" />
              </Flex>
            </Box>
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
              Progress component accepts all standard Box props in addition to
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
                    <Code>value</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">number</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">0</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The current progress value.</Text>
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>
                    <Code>max</Code>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">number</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">100</Text>
                  </Table.Cell>
                  <Table.Cell>
                    <Text size="2">The maximum progress value.</Text>
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
                    <Text size="2">The semantic color of the bar.</Text>
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

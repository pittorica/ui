import {
  Avatar,
  Box,
  Button,
  Callout,
  Card,
  Chip,
  Code,
  Container,
  Divider,
  Flex,
  Heading,
  Skeleton,
} from '@pittorica/react';

export default function Route() {
  return (
    <Flex direction={'column'} gap={'9'}>
      <Box style={{ backgroundColor: 'var(--pittorica-source-color)' }}>
        <Container maxWidth="lg" pt="4" pb="6">
          <Flex
            direction={'column'}
            justify={'center'}
            align={'center'}
            gap={'6'}
          >
            <Avatar size="9" src="/assets/logo/logo.png" fallback="P" />

            <Heading size="9" color="white">
              Pittorica
            </Heading>
            <Heading size={'6'} color="white">
              a painterly, CSS-first UI framework that brings elegant,
              lightweight structure to modern interfaces.
            </Heading>

            <Callout color="warning" style={{ textAlign: 'center' }}>
              <Callout.Text>
                Warning: Pittorica is under active development, unwanted changes
                may occur.
              </Callout.Text>
            </Callout>

            <Card translucent p="4">
              <Flex direction={'column'} justify={'center'} align={'stretch'}>
                <Code
                  showLineNumbers
                  language="bash"
                >{`npm install pittorica @pittorica/react
`}</Code>

                <Code
                  showLineNumbers
                  language="typescript"
                >{`import 'pittorica';
import { Box, Button } from '@pittorica/react';

export default function Route () {
  return (
    <Box>
      <Button variant="elevated" size="lg">Click me</Button>
    </Box>
  )
}`}</Code>
              </Flex>
            </Card>

            <Button variant="elevated" size="lg">
              Browse Components
            </Button>
          </Flex>
        </Container>
      </Box>

      <Box id="showroom" mb="9">
        <Container maxWidth="lg">
          <Flex
            gap="4"
            wrap="wrap"
            basis="auto"
            justify={'center'}
            align={'stretch'}
          >
            <Card translucent p="4">
              <Flex gap="2" justify="center" align="center">
                <Button>filled (default)</Button>
                <Button variant="outlined">outlined</Button>
                <Button variant="text">text</Button>
                <Button variant="tonal">tonal</Button>
                <Button variant="elevated">elevated</Button>
              </Flex>
            </Card>

            <Card translucent p="4">
              <Avatar size="4" fallback="JD" />
            </Card>

            <Card translucent p="4">
              <Heading size="3">Small Card</Heading>
            </Card>

            <Card translucent p="4">
              <Button variant="tonal">Action</Button>
            </Card>

            <Card translucent p="4">
              <Flex gap="2" justify="center" align="center">
                <Chip variant="outline">Outlined</Chip>
                <Chip variant="soft">soft</Chip>
                <Chip variant="solid">Solid</Chip>
                <Chip variant="solid" color="danger">
                  Danger
                </Chip>
              </Flex>
            </Card>

            <Card translucent p="4">
              <Skeleton>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
                facere repellendus aspernatur perferendis voluptatum nulla! Non
                iusto ab expedita laudantium quos omnis, quibusdam illo in
                vitae! Explicabo, ex cupiditate. Distinctio.
              </Skeleton>
            </Card>

            <Divider variant="wave" color="white" />

            <Heading size="6">and many more components...</Heading>
          </Flex>
        </Container>
      </Box>
    </Flex>
  );
}

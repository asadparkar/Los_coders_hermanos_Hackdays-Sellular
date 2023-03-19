import {
  Container,
  Box,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select, Textarea,VStack,Stack,Button, useColorModeValue,
} from '@chakra-ui/react';

const CreateTEvent = () => {

  return (
    <Container maxW="5xl" p={{ base: 5, md: 10 }}>
      <Heading as="h3" size="lg" mb="4" fontWeight="bold" textAlign="left">
        Create an event !
      </Heading>
      <VStack
        as="form"
        spacing={8}
        w="100%"
        bg={useColorModeValue('gray.50')}
        rounded="lg"
        boxShadow="lg"
        p={{ base: 5, sm: 10 }}
      >
      <VStack spacing={4} w="100%">
          <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
            <FormControl id="name">
              <FormLabel>Event Name</FormLabel>
              <Input type="text" placeholder="contest title" rounded="md" />
            </FormControl>
            <FormControl id="location">
              <FormLabel>Event Location</FormLabel>
              <Input type="text" placeholder="where is it taking place?" rounded="md" />
            </FormControl>
          </Stack>
          <FormControl id="subject">
            <FormLabel>Event Theme</FormLabel>
            <Input type="text" placeholder="what's it about?" rounded="md" />
          </FormControl>
          <FormControl id="description">
            <FormLabel>description</FormLabel>
            <Textarea size="lg" placeholder="Enter details" rounded="md" />
          </FormControl>
          <FormControl>
          <FormLabel fontSize="0.75rem" fontWeight="bold">
            Event Timeline
          </FormLabel>
          <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
            <FormControl id="r-start">
              <FormLabel>registration start </FormLabel>
              <Input type="text" placeholder=".." rounded="md" />
            </FormControl>
            <FormControl id="r-end">
              <FormLabel>registration end </FormLabel>
              <Input type="text" placeholder=".." rounded="md" />
            </FormControl>
            <FormControl id="h-start">
              <FormLabel>hackathon start </FormLabel>
              <Input type="text" placeholder=".." rounded="md" />
            </FormControl>
            <FormControl id="h-end">
              <FormLabel>hackathon end </FormLabel>
              <Input type="text" placeholder=".." rounded="md" />
            </FormControl>
          </Stack>
        </FormControl>
          <FormControl>
          <FormLabel fontSize="0.75rem" fontWeight="bold">
            MODE
          </FormLabel>
          <Select>
            <option value="online">online</option>
            <option value="offline">offline</option>
            <option value="hybrid">hybrid</option>
          </Select>
        </FormControl>
        <FormControl id="prize">
            <FormLabel>Event prize</FormLabel>
            <Input type="text" placeholder="what's the prize?" rounded="md" />
          </FormControl>
        </VStack>
        <VStack w="100%">
          <Button
            bg="purple.300"
            color="white"
            _hover={{
              bg: 'purple.500'
            }}
            rounded="md"
            w={{ base: '100%', md: 'max-content' }}
          >
            Submit
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default CreateTEvent;
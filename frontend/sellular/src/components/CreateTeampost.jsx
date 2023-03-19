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

  const CreateTeampost = () => {

    return (
      <Container maxW="5xl" p={{ base: 5, md: 10 }}>
        <Heading as="h3" size="lg" mb="4" fontWeight="bold" textAlign="left">
          Create an application to get team members
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
                <FormLabel>Title</FormLabel>
                <Input type="text" placeholder="contest title" rounded="md" />
              </FormControl>
              <FormControl id="name">
                <FormLabel>Domain</FormLabel>
                <Input type="text" placeholder="which field?" rounded="md" />
              </FormControl>
            </Stack>
            <FormControl id="subject">
              <FormLabel>Problem Statement</FormLabel>
              <Input type="text" placeholder="what's it about?" rounded="md" />
            </FormControl>
            <FormControl id="description">
              <FormLabel>description</FormLabel>
              <Textarea size="lg" placeholder="Enter details" rounded="md" />
            </FormControl>
            <FormControl>
            <FormLabel fontSize="0.75rem" fontWeight="bold">
              Required Roles
            </FormLabel>
            <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
              <FormControl id="name">
                <FormLabel></FormLabel>
                <Input type="text" placeholder=".." rounded="md" />
              </FormControl>
              <FormControl id="name">
                <FormLabel></FormLabel>
                <Input type="text" placeholder=".." rounded="md" />
              </FormControl>
            </Stack>
          </FormControl>
          <FormControl id="description">
              <FormLabel>Responsibilities</FormLabel>
              <Textarea size="lg" placeholder="Enter details" rounded="md" />
            </FormControl>
            <FormControl>
            <FormControl id="name">
                <FormLabel>Location</FormLabel>
                <Input type="text" placeholder="where is it taking place?" rounded="md" />
              </FormControl>
            <FormLabel fontSize="0.75rem" fontWeight="bold">
              MODE
            </FormLabel>
            <Select>
              <option value="online">online</option>
              <option value="offline">offline</option>
              <option value="hybrid">hybrid</option>
            </Select>
          </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
              bg="green.300"
              color="white"
              _hover={{
                bg: 'green.500'
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
  
  export default CreateTeampost;
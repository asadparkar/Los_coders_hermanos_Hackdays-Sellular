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
  import { decodeToken } from "react-jwt";

import axios from 'axios';
  import { useState } from 'react';
  const CreateTeampost = () => {
    const token = localStorage.getItem('jwt')
    const decodedToken = decodeToken(token);
    const [title,setTitle] = useState('');
    const [domain,setDomain] = useState('');
    const [statement,setStatement] = useState('');
    const [description,setDescription] = useState('');
    const [Responsibilities,setResponsibilities] = useState('');
    const [roleone,setRoleone] = useState('');
    const [roletwo,setRoletwo] = useState('');
    const [location,setLocation] = useState('');
    const [mode,setMode] = useState('online');
    
    const post = (async()=>{
      return await axios.post('https://asadparkar.tech/devconnectb/api/thread/create',{
        title:title,
        status:'open',
        field:domain,
        problem:statement,
        description:description,
        positions:[roleone,roletwo],
        responsibilities:Responsibilities,
        mode:mode,
        location:location,
        prize:"Rs 50,000",
        additionalDetail:'Additional Detail',
        user_id:decodeToken(token).user_id
      })
    })
    const handleSubmit = (()=>{
      post().then((response)=>{
        alert("Your Team Post has been Created!")
      })
    })

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
                <Input type="text" placeholder="contest title" rounded="md" onChange={(e)=>{setTitle(e.target.value)}}/>
              </FormControl>
              <FormControl id="name">
                <FormLabel>Domain</FormLabel>
                <Input type="text" placeholder="which field?" rounded="md" onChange={(e)=>{setDomain(e.target.value)}} />
              </FormControl>
            </Stack>
            <FormControl id="subject">
              <FormLabel>Problem Statement</FormLabel>
              <Input type="text" placeholder="what's it about?" rounded="md" onChange={(e)=>{setStatement(e.target.value)}}/>
            </FormControl>
            <FormControl id="description">
              <FormLabel>description</FormLabel>
              <Textarea size="lg" placeholder="Enter details" rounded="md" onChange={(e)=>{setDescription(e.target.value)}}/>
            </FormControl>
            <FormControl>
            <FormLabel fontSize="0.75rem" fontWeight="bold">
              Required Roles
            </FormLabel>
            <Stack w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
              <FormControl id="name">
                <FormLabel></FormLabel>
                <Input type="text" placeholder=".." rounded="md" onChange={(e)=>{setRoleone(e.target.value)}} />
              </FormControl>
              <FormControl id="name">
                <FormLabel></FormLabel>
                <Input type="text" placeholder=".." rounded="md" onChange={(e)=>{setRoletwo(e.target.value)}}/>
              </FormControl>
            </Stack>
          </FormControl>
          <FormControl id="description">
              <FormLabel>Responsibilities</FormLabel>
              <Textarea size="lg" placeholder="Enter details" rounded="md" onChange={(e)=>{setResponsibilities(e.target.value)}}/>
            </FormControl>
            <FormControl>
            <FormControl id="name">
                <FormLabel>Location</FormLabel>
                <Input type="text" placeholder="where is it taking place?" rounded="md" onChange={(e)=>{setLocation(e.target.value)}}/>
              </FormControl>
            <FormLabel fontSize="0.75rem" fontWeight="bold">
              MODE
            </FormLabel>
            <Select onChange={(e)=>{setMode(e.target.value)}}>
              <option value="online">online</option>
              <option value="offline">offline</option>
              <option value="hybrid">hybrid</option>
            </Select>
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
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </VStack>
        </VStack>
      </Container>
    );
  };
  
  export default CreateTeampost;
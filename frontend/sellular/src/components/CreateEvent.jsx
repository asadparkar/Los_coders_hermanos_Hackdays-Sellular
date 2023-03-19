import {
  Container,
  Box,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select, Textarea,VStack,Stack,Button, useColorModeValue, InputGroup, InputLeftAddon, InputRightElement,SimpleGrid
} from '@chakra-ui/react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { decodeToken } from "react-jwt";




const CreateTEvent = () => {
    const token = localStorage.getItem('jwt')
    const decodedToken = decodeToken(token);
    const [event_name,setEventName] = useState('')
    const [event_location,setEventLocation] = useState('')
    const [event_theme,setEventTheme] = useState('')
    const [event_description,setEventdesc] = useState('')
    const [event_timeline1,setTimeline1] = useState('')
    const [event_timeline2,setTimeline2] = useState('')
    const [event_timeline3,setTimeline3] = useState('')
    const [event_timeline4,setTimeline4] = useState('')
    const [event_mode,setEventMode] = useState('')
    const [event_prize,setEventPrize] = useState('')
    const [Thumbnail,setThumbnail] = useState('')
    const [render,setRedner] = useState(false)
    const postEvent = (async()=>{
      return await axios.post('https://asadparkar.tech/devconnectb/api/event/create',{
        event_name:event_name,
        event_location:event_location,
        event_img:Thumbnail,
        event_mode:event_mode,
        event_theme:event_theme,
        description:event_description,
        event_prize:event_prize,
        event_timeline:[event_timeline1,event_timeline2,event_timeline3,event_timeline4],
        event_status:"open",
        organizer:decodeToken(localStorage.getItem('jwt')).user_id
      })
    })
    const handleClick = (()=>{
      postEvent().then((response)=>{
        alert("Hackathon has been Posted!")
      }).catch((err)=>console.log(err))
    })

    // useEffect(()=>{
    //   if (!decodedToken){
    //     setRedner(!render)
    //   }
    // },[render])

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
              <Input onChange={(e)=>{setEventName(e.target.value)}} type="text" placeholder="contest title" rounded="md" />
            </FormControl>
            <FormControl id="location">
              <FormLabel>Event Location</FormLabel>
              <Input onChange={(e)=>{setEventLocation(e.target.value)}} type="text" placeholder="where is it taking place?" rounded="md" />
            </FormControl>

          </Stack>

          <FormControl id="subject">
            <FormLabel>Event Theme</FormLabel>
            <Input onChange={(e)=>{setEventTheme(e.target.value)}} type="text" placeholder="what's it about?" rounded="md" />
          </FormControl>
          <FormControl id="subject">
            <FormLabel>Thumbnail Link</FormLabel>
            <Input onChange={(e)=>{setThumbnail(e.target.value)}} type="text" placeholder="Thumbnail/Banner Link" rounded="md" />
          </FormControl>
          <FormControl id="description">
            <FormLabel>description</FormLabel>
            <Textarea onChange={(e)=>{setEventdesc(e.target.value)}} size="lg" placeholder="Enter details" rounded="md" />
          </FormControl>
          <FormControl>
          <FormLabel fontSize="0.75rem" fontWeight="bold">
            Event Timeline
          </FormLabel>
          <Stack  w="100%" spacing={3} direction={{ base: 'column', md: 'row' }}>
            <FormControl id="r-start">
              <FormLabel>registration start </FormLabel>
              <Input onChange={(e)=>{setTimeline1(e.target.value)}} type="text" placeholder=".." rounded="md" />
            </FormControl>
            <FormControl id="r-end">
              <FormLabel>registration end </FormLabel>
              <Input onChange={(e)=>{setTimeline2(e.target.value)}} type="text" placeholder=".." rounded="md" />
            </FormControl>
            <FormControl id="h-start">
              <FormLabel>hackathon start </FormLabel>
              <Input onChange={(e)=>{setTimeline3(e.target.value)}} type="text" placeholder=".." rounded="md" />
            </FormControl>
            <FormControl id="h-end">
              <FormLabel>hackathon end </FormLabel>
              <Input onChange={(e)=>{setTimeline4(e.target.value)}} type="text" placeholder=".." rounded="md" />
            </FormControl>
          </Stack>
        </FormControl>
          <FormControl>
          <FormLabel fontSize="0.75rem" fontWeight="bold">
            MODE
          </FormLabel>
          <Select onChange={(e)=>{setEventMode(e.target.value);}}>
            <option value="online">online</option>
            <option value="offline">offline</option>
            <option value="hybrid">hybrid</option>
          </Select>
        </FormControl>
        <FormControl id="prize">
            <FormLabel>Event prize</FormLabel>
            <Input onChange={(e)=>{setEventPrize(e.target.value)}} type="text" placeholder="what's the prize?" rounded="md" />
          </FormControl>
        </VStack>
        <VStack w="100%">
          <Button
          onClick={(e)=>{e.preventDefault; handleClick()}}
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
import { Box, Button, FormControl, FormLabel, Heading, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Switch, Text, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Hackathon from '../components/Hacakthon';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const Hackathons = () => {
    const hackathons = useRef();
    const [isLoading,setLoading] = useState(false);
    const getHackathons = async()=>{
        setLoading(true)
        return await axios.get('https://asadparkar.tech/devconnectb/api/event/events');
    }

    useEffect(()=>{
        getHackathons().then((response)=>{
        hackathons.current = response.data.events
        setLoading(false)
        console.log(hackathons)
        });
    },[])
  return (
    <Box padding={{base:1,sm:15}} bg='#F5F7F7' fontFamily={'Poppins'}>
      <Box display={'flex'}>
        <Heading color={'black'} fontSize={{ base: 'xl', sm: '2xl' }} marginBottom='20px' marginLeft={'10px'}>
         All Hackathons
        </Heading>
      </Box>

        {isLoading && <div style={{background:'#FFFFFF', padding:'30px', width:'90%', borderRadius:'20px', boxShadow:'5px 5px 15px gray', height:'350px'}}>
          <Skeleton height={'20px'} w='90%' />
          <Skeleton height={'20px'} w='50%' marginTop={'10px'} />
          <Skeleton height={'100px'} w='20%' marginTop={'15px'} />
          <Skeleton height={'45px'} w='10%' marginTop={'50px'} />
        </div>}

        {isLoading && <div style={{background:'#FFFFFF', padding:'30px', width:'90%', borderRadius:'20px', boxShadow:'5px 5px 15px gray', marginTop:'25px'}}>
          <Skeleton height={'20px'} w='90%' />
          <Skeleton height={'20px'} w='50%' marginTop={'10px'} />
          <Skeleton height={'100px'} w='20%' marginTop={'15px'} />
          <Skeleton height={'45px'} w='10%' marginTop={'50px'} />
        </div>}

        <Box display={'flex'} justifyContent='center' flexDirection={'column'}>
        {hackathons.current?.map((item)=>(
          <Box marginTop={'15px'}>
            <Hackathon event_name={item.event_name} status={item.event_status} event_theme={item.event_theme} mode={item.event_mode} applicants={item.event_applications.length+1}  />
          </Box>
        ))}
        </Box>
    </Box>
  )
}

export default Hackathons
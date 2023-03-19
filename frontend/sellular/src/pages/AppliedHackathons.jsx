import { Box, Button, FormControl, FormLabel, Heading, IconButton, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Switch, Text, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import Thread from './Thread'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'
import { decodeToken } from "react-jwt";

const AppliedHackathons = () => {
  const token = localStorage.getItem('jwt')
  const decodedToken = decodeToken(token);
  const threads = useRef();
  const [isLoading,setLoading] = useState(false);
  const array = ["Web Developer", "App Developer"]
  const getThreads = async()=>{
    setLoading(true)
    return await axios.post('https://asadparkar.tech/devconnectb/api/event/appliedevents',{
        id:decodedToken.user_id
    })
  }


  useEffect(()=>{
    getThreads().then((response)=>{
      threads.current = response.data.myEventApplications.applied_events
      console.log(threads)
      setLoading(false)
    });
  },[])
  return (
    <Box padding={{base:1,sm:15}} bg='#F5F7F7'>
      <Box display={'flex'} justifyContent='center' alignItems={'center'}>
        <Heading color={'black'} fontSize={{ base: 'xl', sm: '2xl' }} marginBottom='20px' marginLeft={'10px'}>
         All Opportunities
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





        <Box display={'flex'} justifyContent='center' flexDirection={'column'} padding='15px'>
        {threads.current?.map((item)=>(
          <Box marginTop={'15px'} bg='#FFFFFF' padding={'10px'} boxShadow='xl' borderRadius={'10px'}>
          
          </Box>
        ))}
        
        </Box>

    </Box>
  )
}

export default AppliedHackathons
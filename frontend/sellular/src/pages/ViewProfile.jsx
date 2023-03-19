import { Box, Image, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { decodeToken } from "react-jwt";

const ViewProfile = () => {
    const token = localStorage.getItem('jwt')
    const decodedToken = decodeToken(token);
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [bio,setBio] = useState();
  const [user,setUser] = useState();
  const [render,setRender] = useState(false)
  useEffect(()=>{
    if (!user){
      setRender(!render)
    }
    axios.get(`https://asadparkar.tech/devconnectb/api/user/myprofile/${decodeToken(token).user_id}`).then((response)=>{
      setUser(response.data.user);
    })
  },[render])
  return (
    <Box>

    <Box padding={'20px'} fontFamily='Poppins' bg='#F5F7F7' >
      <Box display={'flex'} justifyContent='center' alignItems={'center'}  padding={'10px'}>
        <Image marginRight={'20px'} width={'150px'} borderRadius='100%' src='https://static.vecteezy.com/system/resources/previews/011/431/445/non_2x/cute-astronaut-working-with-laptop-on-moon-cartoon-illustration-cartoon-style-icon-or-mascot-character-vector.jpg' alt='cute coder' />
      <Box>
        <Text fontSize='5xl' fontWeight={'bold'}>{user?.name}</Text>
        <Text>{user?.email}</Text>
      </Box>
      </Box>

      <Text fontSize={'3xl'} fontWeight='bold'>{user?.bio}</Text>
    </Box>
    </Box>

  )
}

export default ViewProfile
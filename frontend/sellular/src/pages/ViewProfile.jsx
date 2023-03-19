import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ViewProfile = () => {
  return (
    <Box padding={'20px'} fontFamily='Poppins' >
      <Box display={'flex'} justifyContent='center' alignItems={'center'} bg='#F5F7F7' padding={'10px'}>
        <Image marginRight={'20px'} width={'150px'} borderRadius='100%' src='https://static.vecteezy.com/system/resources/previews/011/431/445/non_2x/cute-astronaut-working-with-laptop-on-moon-cartoon-illustration-cartoon-style-icon-or-mascot-character-vector.jpg' alt='cute coder' />
      <Box>
        <Text fontSize='5xl' fontWeight={'bold'}>Asad Parkar</Text>
        <Text>asadparkar34@gmail.com</Text>
      </Box>


      </Box>
    </Box>
  )
}

export default ViewProfile
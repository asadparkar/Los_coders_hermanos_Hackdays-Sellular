import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import User from '../components/User'

const FindTeamMates = () => {
  return (
    <Box padding={{base:1,sm:15}} bg='#F5F7F7'>
       <Heading color={'black'} fontSize={{ base: 'xl', sm: '2xl' }} marginBottom='20px' marginLeft={'10px'}>
         Explore other users on our platform !
        </Heading>
        <User />
    </Box>
  )
}

export default FindTeamMates
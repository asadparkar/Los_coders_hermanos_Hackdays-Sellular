import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hackathon = ({event_name,status,event_theme,mode,applicants}) => {
    const navigate = useNavigate()
  return (
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        bg='#FFFFFF'
        padding={6}
        boxShadow='lg'
        borderWidth='1px'
        borderRadius='15px'
        transition='all 0.3s'
        _hover={{  borderColor:status==='open'?'#3B49DF':'red'}}
        fontFamily='Poppins'
        w='90%'
        >
        <Stack w='100%' display='flex'>
            <CardBody>
            <Stack style={{display:'flex'}} flexDirection={{md:'row', sm:'column'}} alignItems='center'>
            <Heading fontSize={{md:'2xl', sm:'md'}} fontFamily='Poppins'>{event_name}</Heading>
            <Stack style={{fontWeight:'bold', border:'1px solid', padding:'6px', borderRadius:'5px', marginLeft:'auto'}} color={status==="open"?'#549165':'red'} marginLeft={{md:'auto !important', sm:'0 !important'}} textAlign='center'>
                <Text>{status}</Text>
            </Stack>
            </Stack>


            <Stack marginTop={'15px'}>

                <Box style={{display:'flex', flexDirection:'column'}}>
                <Box>
                <Text fontSize='lg' color='gray.500' fontWeight='bold' marginTop={'10px'}>{mode}</Text>
                </Box>
            <Text fontSize='lg' color='gray.500' fontWeight='bold' marginTop={'20px'}>Theme</Text>

            <Box style={{border:'1px solid #BDCDD6', borderRadius:'5px', padding:'2px', width:'120px', textAlign:'center'}}>
            <Text textAlign={'center'} fontSize='md' color='gray.500' fontWeight='medium'>{event_theme}</Text>
            </Box>
            </Box>
            </Stack>

            <Box>
            <Text fontSize='lg' color='gray.500' fontWeight='bold' marginTop={'20px'}>{applicants}+ Participating</Text>
            </Box>
            </CardBody>

            <CardFooter>
            <Button onClick={()=>{navigate(`thread/${id}`)}} variant='solid' bgColor={'#3B49DF'} color='white' _hover={{bg:'#3E54AC'}}>
                View Details
            </Button>
            </CardFooter>

        </Stack>
        </Card>
  )
}

export default Hackathon
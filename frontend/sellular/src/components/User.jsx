import { Box, Button, Image, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import {
    Heading,
    Avatar,
    Center,
    Stack,
    Link,
    Badge,
    useColorModeValue
  } from "@chakra-ui/react"
  import { Link as LinkTwo } from 'react-router-dom';

const User = () => {
    const [isLoading,setLoading] = useState(false)
    const profile_pics = ['https://www.sketchappsources.com/resources/source-image/profile-illustration-gunaldi-yunus.png','https://pbs.twimg.com/media/EyZAnGRW8Ak_9CQ.jpg:large','https://pbs.twimg.com/media/Eslwk0hXIAU5oDG.jpg:large','https://pbs.twimg.com/media/E4v9IG2WEAMIToW.jpg:large','https://pbs.twimg.com/media/E0zh_UCWEAMbzjA?format=jpg&name=large','https://pbs.twimg.com/media/EuYy8vVXYAM4XQS.jpg:large']

    const navigate = useNavigate();
    const [users,setUsers] = useState();
    const token = localStorage.getItem('jwt');
    const getUsers = async()=>{
        return await axios.get('https://asadparkar.tech/devconnectb/api/user/users',{
            headers:{
                'Authorization':`bearer ${localStorage.getItem('jwt')}`
            }
        });
    }
    useEffect(()=>{
        setLoading(true);
        getUsers().then((response)=>{
            setUsers(response.data.users);
            setLoading(false)
        }).catch((error)=>{
            if (error.response.status === 401){
                localStorage.removeItem('jwt');
                navigate('/')
            }
        })
    },[localStorage.getItem('jwt')])
  return (
  <Box>
    <Box>
        {isLoading && <Box bg='white' padding={'15px'} borderRadius='15px' boxShadow={'xl'} height='200px' w='80%'>
            <Box>
                <Skeleton height={'50px'} w='50px' marginTop={'10px'} borderRadius='100%'/>
            </Box>
            <Box>
                <Skeleton height={'20px'} w='70%' marginTop={'10px'} />
                <Skeleton height={'40px'} w='40%' marginTop={'10px'} />
                <Skeleton height={'20px'} w='20%' marginTop={'10px'} />
            </Box>
        </Box> }

        {isLoading && <Box bg='white' padding={'15px'} borderRadius='15px' boxShadow={'xl'} height='200px' w='80%' marginTop={'10px'}>
            <Box>
                <Skeleton height={'50px'} w='50px' marginTop={'10px'} borderRadius='100%'/>
            </Box>
            <Box>
                <Skeleton height={'20px'} w='70%' marginTop={'10px'} />
                <Skeleton height={'40px'} w='40%' marginTop={'10px'} />
                <Skeleton height={'20px'} w='20%' marginTop={'10px'} />
            </Box>
        </Box>}

        {isLoading && <Box bg='white' padding={'15px'} borderRadius='15px' boxShadow={'xl'} height='200px' w='80%' marginTop={'10px'}>
            <Box>
                <Skeleton height={'50px'} w='50px' marginTop={'10px'} borderRadius='100%'/>
            </Box>
            <Box>
                <Skeleton height={'20px'} w='70%' marginTop={'10px'} />
                <Skeleton height={'40px'} w='40%' marginTop={'10px'} />
                <Skeleton height={'20px'} w='20%' marginTop={'10px'} />
            </Box>
        </Box>}
   </Box>


   {users?.map((index)=>(
    <Center py={6}>
    <Box
      maxW={"400px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={6}
      textAlign={"center"}
    >
      <Avatar
        size={"xl"}
        src={profile_pics[Math.floor(Math.random() * profile_pics.length)]}
        alt={"Avatar Alt"}
        mb={4}
        pos={"relative"}
        _after={{
          content: '""',
          w: 4,
          h: 4,
          bg: "green.300",
          border: "2px solid white",
          rounded: "full",
          pos: "absolute",
          bottom: 0,
          right: 3
        }}
      />
      <Heading fontSize={"2xl"} fontFamily={"body"}>
      {index.name}
      </Heading>
      <Text
        textAlign={"center"}
        color={useColorModeValue("gray.700", "gray.400")}
        px={3}
      >
        {index.bio}
        <Link href={"#"} color={"blue.400"}>
         
        </Link>{" "}
      </Text>

      <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
      <Box display={{base:'column',sm:'flex'}}>
                 {index.skills.map((index)=>(
                     <Box fontSize={{base:'xs',sm:'sm'}} borderRadius='5px' border={'1px solid'} padding='2px' marginRight={'10px'} marginTop='5px' key={index}>{index}</Box>
                     )) }
     </Box>
      </Stack>
      <Button bg='#3B49DF' color={'white'} _hover={{bg:'#3E54AC'}} marginTop='20px'>View Profile</Button>
      {/* <Stack mt={8} direction={"row"} spacing={4}>
        <Button
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          _focus={{
            bg: "gray.200"
          }}
        >
          Message
        </Button>
        <Button
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          bg={"blue.400"}
          color={"white"}
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "blue.500"
          }}
          _focus={{
            bg: "blue.500"
          }}
        >
          Follow
        </Button>
      </Stack> */}
    </Box>
  </Center>
    // <Box  bg={'white'} w="40%" padding={'15px'} boxShadow='xl' borderWidth={'2px'}  borderRadius='15px' fontFamily='Poppins' marginTop={'15px'}>
    //     <Box display="flex" flexDirection={'column'} flexWrap="wrap" justifyContent={{md:'flex-start', sm:'center'}} alignItems={'center'}>
    //         <Box>
    //             <Image boxShadow={'sm'} borderRadius='100%' w='120px' h='120px' src={profile_pics[Math.floor(Math.random() * profile_pics.length)]} alt='profile pic' />
    //         </Box>
    //         <Box marginLeft={'20px'}>
    //             <Text fontWeight={'bold'} fontSize='xl'>{index.name}</Text>
    //             <Text>{index.bio}</Text>
    //             <Text color={'gray.500'} fontSize={'md'} marginTop={'10px'}>Interests</Text>
    //             <Box display={{base:'column',sm:'flex'}}>
    //             {index.skills.map((index)=>(
    //                 <Box fontSize={{base:'xs',sm:'sm'}} borderRadius='5px' border={'1px solid'} padding='2px' marginRight={'10px'} marginTop='5px' key={index}>{index}</Box>
    //             )) }
    //             </Box>
    //             <Button bg='#3B49DF' color={'white'} _hover={{bg:'#3E54AC'}} marginTop='20px'>View Profile</Button>
    //         </Box>
    //     </Box>
    // </Box>
   ))}

  </Box>

  )
}


export default User


  
//   export default function SocialProfileSimple() {
//     return (
//       <Center py={6}>
//         <Box
//           maxW={"320px"}
//           w={"full"}
//           bg={useColorModeValue("white", "gray.900")}
//           boxShadow={"2xl"}
//           rounded={"lg"}
//           p={6}
//           textAlign={"center"}
//         >
//           <Avatar
//             size={"xl"}
//             src={
//               "https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
//             }
//             alt={"Avatar Alt"}
//             mb={4}
//             pos={"relative"}
//             _after={{
//               content: '""',
//               w: 4,
//               h: 4,
//               bg: "green.300",
//               border: "2px solid white",
//               rounded: "full",
//               pos: "absolute",
//               bottom: 0,
//               right: 3
//             }}
//           />
//           <Heading fontSize={"2xl"} fontFamily={"body"}>
//             Lindsey James
//           </Heading>
//           <Text fontWeight={600} color={"gray.500"} mb={4}>
//             @lindsey_jam3s
//           </Text>
//           <Text
//             textAlign={"center"}
//             color={useColorModeValue("gray.700", "gray.400")}
//             px={3}
//           >
//             Actress, musician, songwriter and artist. PM for work inquires or{" "}
//             <Link href={"#"} color={"blue.400"}>
//               #tag
//             </Link>{" "}
//             me in your posts
//           </Text>
  
//           <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
//             <Badge
//               px={2}
//               py={1}
//               bg={useColorModeValue("gray.50", "gray.800")}
//               fontWeight={"400"}
//             >
//               #art
//             </Badge>
//             <Badge
//               px={2}
//               py={1}
//               bg={useColorModeValue("gray.50", "gray.800")}
//               fontWeight={"400"}
//             >
//               #photography
//             </Badge>
//             <Badge
//               px={2}
//               py={1}
//               bg={useColorModeValue("gray.50", "gray.800")}
//               fontWeight={"400"}
//             >
//               #music
//             </Badge>
//           </Stack>
  
//           <Stack mt={8} direction={"row"} spacing={4}>
//             <Button
//               flex={1}
//               fontSize={"sm"}
//               rounded={"full"}
//               _focus={{
//                 bg: "gray.200"
//               }}
//             >
//               Message
//             </Button>
//             <Button
//               flex={1}
//               fontSize={"sm"}
//               rounded={"full"}
//               bg={"blue.400"}
//               color={"white"}
//               boxShadow={
//                 "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
//               }
//               _hover={{
//                 bg: "blue.500"
//               }}
//               _focus={{
//                 bg: "blue.500"
//               }}
//             >
//               Follow
//             </Button>
//           </Stack>
//         </Box>
//       </Center>
//     )
//   }
  
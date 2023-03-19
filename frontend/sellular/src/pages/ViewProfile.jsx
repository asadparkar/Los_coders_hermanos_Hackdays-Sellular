import * as React from 'react';
import {
  Container,
  Avatar,
  Heading,
  Text,
  VStack,
  Stack,
  Link,
  IconButton,
  Divider,
  Flex,
  Box,
  Center, useColorModeValue, HStack, Image,
} from '@chakra-ui/react';
import { FaEnvelope, FaMapPin, FaSuitcase } from 'react-icons/fa';
// Here we have used react-icons package for the icons
import { FaGithub, FaDev, FaLinkedin, FaQuora, FaTwitter } from 'react-icons/fa';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};


export const IntroSection = () => {
  return (
    <Container maxW="7xl" p={['4', '8', '12']}>
      <Flex
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Flex
    shadow="lg"
    rounded="lg"
    mb={8}
    direction="column"
    alignItems="center"
    justifyContent="center"
  >
    <Box
      bg="#edf3f8"
      _dark={{
        bg: "#3e3e3e",
      }}
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1666795599746-0f62dfa29a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      height="100%"
      width="100%"
      borderRadius="lg"
      p={8}
      display="flex"
      alignItems="left"
    >
      <Image
        src="https://images.unsplash.com/photo-1623930154261-37f8b293c059?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
        alt="Profile Picture"
        borderRadius="full"
        boxSize="150px"
        shadow="lg"
        border="5px solid"
        mb={-20}
        borderColor="gray.800"
        _dark={{
          borderColor: "gray.200",
        }}
      />
    </Box>
    <Box
      gridColumn="span 8"
      p={8}
      width="full"
      height="full"
      borderRadius="lg"
      textAlign="left"
      mt={10}
    >
      <Text
        fontSize="4xl"
        fontWeight="bold"
        color="gray.800"
        _dark={{
          color: "white",
        }}
      >
        Christian Buehner
      </Text>
      <HStack
        spacing={3}
        color="gray.800"
        _dark={{
          color: "gray.200",
        }}
      >
        <FaSuitcase size={24} />
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="gray.800"
          _dark={{
            color: "gray.200",
          }}
        >
          DEVELOPER
        </Text>
      </HStack>
      <HStack
        spacing={3}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <FaMapPin size={20} />
        <Text fontSize="lg">Germany</Text>
      </HStack>
      <HStack
        spacing={3}
        color="gray.700"
        _dark={{
          color: "gray.200",
        }}
      >
        <FaEnvelope size={20} />
        <Text fontSize="lg">chris@buehner.com</Text>
      </HStack>
    </Box>
  </Flex>
</Flex>;
<Center fontWeight={'bold'} fontSize="5rem">  ABOUT ME </Center>

<Divider />
    </Container>
  );
};



const ViewProfile = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }} mx="auto" >
      <Text>My Profile</Text>
        <IntroSection />
      <Center w="100%"
    bg={useColorModeValue('gray.50')}
    rounded="lg"
    boxShadow="lg"
    p="5">
        <VStack spacing={4} px={2} alignItems={{ base: 'center', sm: 'flex-start' }}>
          <Heading
            textAlign={{ base: 'center', sm: 'left' }}
            margin="0 auto"
            width={{ base: '23rem', sm: 'auto' }}
            fontSize={{ base: '1rem', sm: '2rem' }}
          >
            'more details' Passionate about Tech. Lover of web and opensource.
            sjdkfjsdfbsd fsdbfjsdbfjsabfjdsf sndf jsd fjsd fjsd fsdbfjsdbfjsabfjdsfsfsd
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nihil ducimus voluptatem repellat id optio beatae numquam harum quos nesciunt?
          </Heading>
          {/* <Text textAlign="center">'more details' Passionate about Tech. Lover of web and opensource.</Text> */}
          <Center fontSize="xl" lineHeight={1.2} fontWeight="bold">College</Center>
          <HStack spacing="2">
            <Text textAlign="center" fontSize="xl" lineHeight={1.2} fontWeight="bold">Phone no</Text>
            </HStack>
          
          <Divider />
          <Flex alignItems="center" justify="center" w="100%">
            <Box textAlign="center">
              {accounts.map((sc, index) => (
                <IconButton
                  key={index}
                  as={Link}
                  isExternal
                  href={sc.url}
                  aria-label={sc.label}
                  colorScheme={sc.type}
                  rounded="full"
                  icon={sc.icon}
                  {...iconProps}
                />
              ))}
            </Box>
          </Flex>
        </VStack>
      </Center>
    </Container>
  );
};

const accounts = [
  {
    url: 'https://github.com/MA-Ahmad',
    label: 'Github Account',
    type: 'gray',
    icon: <FaGithub />
  },
  {
    url: 'https://twitter.com/muhammad_ahmaad',
    label: 'Twitter Account',
    type: 'twitter',
    icon: <FaTwitter />
  },
  {
    url: 'https://dev.to/m_ahmad',
    label: 'Dev Account',
    type: 'gray',
    icon: <FaDev />
  },
  {
    url: 'https://linkedin.com/in/muhammad-ahmad20',
    label: 'LinkedIn Account',
    type: 'linkedin',
    icon: <FaLinkedin />
  },
  {
    url: 'https://www.quora.com/profile/Muhammad-Ahmad-66',
    label: 'Quora Account',
    type: 'red',
    icon: <FaQuora />
  }
];

export default ViewProfile;
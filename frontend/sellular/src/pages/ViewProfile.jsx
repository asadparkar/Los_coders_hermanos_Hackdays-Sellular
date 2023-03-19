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
  Center, useColorModeValue, HStack
} from '@chakra-ui/react';
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
      <Stack as="main" mx="auto" marginTop="3rem">
        <Stack spacing={2} marginBottom={8}>
          <Heading display="flex">Hi, I'm Ahmad </Heading>
          <HStack alignItems="center">
            <Text>
              I am a Full Stack developer, an open source lover and a writer from Pakistan
            </Text>
            <Avatar
              d={['none', 'block', 'block']}
              size="sm"
              borderRadius="0"
              backgroundColor="transparent"
              name="Pakistan Flag"
              src="https://www.flaticon.com/premium-icon/icons/svg/1863/1863138.svg"
            />
          </HStack>
          <Text>
            This is my digital garden, where I write about the things I'm working on and share what
            I've learned.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};


const ViewProfile = () => {
  return (
    <Container maxW="7xl" p={{ base: 5, md: 10 }} mx="auto" >
        <IntroSection />
      <Center w="100%"
    bg={useColorModeValue('gray.50')}
    rounded="lg"
    boxShadow="lg"
    p="5">
        <VStack spacing={4} px={2} alignItems={{ base: 'center', sm: 'flex-start' }}>
          <Stack justifyContent="center" alignItems="center">
            <Avatar
              boxShadow="xl"
              size="xl"
              src="https://avatars2.githubusercontent.com/u/37842853?v=4"
              mx="auto"
            />
            <Text fontSize="sm">Name </Text>
          </Stack>
          <Heading
            textAlign={{ base: 'center', sm: 'left' }}
            margin="0 auto"
            width={{ base: '23rem', sm: 'auto' }}
            fontSize={{ base: '2.5rem', sm: '3rem' }}
          >
            'bio' Full-Stack
            <br /> Developer based <br /> in Nerul
          </Heading>
          <Text textAlign="center">'more details' Passionate about Tech. Lover of web and opensource.</Text>
          <Text textAlign="center" fontSize="xl" lineHeight={1.2} fontWeight="bold">College</Text>
          <HStack spacing="2">
            <Text textAlign="center" fontSize="xl" lineHeight={1.2} fontWeight="bold">Email</Text>
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
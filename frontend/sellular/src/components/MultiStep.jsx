import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';
import axios from 'axios';
import { useToast } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [name,setName] = useState('');
  const [lastname,setLastName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const [loading,setLoading] = useState(false)
    //FOR ERROR HANDLING
    const [error_message,setErrorMessage] = useState('');
    const [isError,setError] = useState(false)

  const handleSave = async()=>{
    await axios.post('https://asadparkar.tech/devconnectb/api/user/signup',{
      name:name,
      email:email,
      password:password
    }).then((response)=>{
      localStorage.setItem('user',response.data.user._id)
      alert("User Created Sucessfully! Click Next and fill the required details!")
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="bold" mb="2%">
        User Registration
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" onChange={(e)=>{setName(e.target.value)}} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" onChange={(e)=>{setLastName(e.target.value)}} />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" onChange={(e)=>{setEmail(e.target.value)}} />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl>
        <FormLabel htmlFor="password" fontWeight={'normal'} mt="2%">
          Password
        </FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? 'text' : 'password'}
            placeholder="Enter password"
            onChange={(e)=>{setPassword(e.target.value)}}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
          
        </InputGroup>
        <Button onClick={handleSave} marginTop='10px' colorScheme='blue'>Save</Button>
      </FormControl>
    </>
  );
};

const Form2 = () => {
  const [skillone,setSetSkillOne] = useState('');
  const [skilltwo,setSetSkillTwo] = useState('');

    const [loading,setLoading] = useState(false)
    //FOR ERROR HANDLING
    const [error_message,setErrorMessage] = useState('');
    const [isError,setError] = useState(false)

    const handleSave = async()=>{
      await axios.post('https://asadparkar.tech/devconnectb/api/user/update',{
        skills:[skillone,skilltwo],
        user_id:localStorage.getItem('user')
      }).then((response)=>{
        alert("Skills saved! Click Next")
      })
    }
  return (
    <>
      <Heading w="100%" textAlign={'center'} mb="2%" fontWeight="bold">
        User Skills
      </Heading>
      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Skills
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e)=>{setSetSkillOne(e.target.value)}}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
         Skills
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
          onChange={(e)=>{setSetSkillTwo(e.target.value)}}
        />
        <Button onClick={handleSave} marginTop='10px' colorScheme='blue'>Save</Button>

      </FormControl>
    </>
  );
};

const Form3 = () => {
  const [github,setGitHub] = useState('');
  const [resume,setResume] = useState('');
  const [college,setCollege] = useState('');
  const [phone,setPhone] = useState('');
  const [linkedin,setLinkedin] = useState('');
  const [bio,setBio] = useState('');

  const [loading,setLoading] = useState(false)
    //FOR ERROR HANDLING
    const [error_message,setErrorMessage] = useState('');
    const [isError,setError] = useState(false)

    const handleSave = async()=>{
      await axios.post('https://asadparkar.tech/devconnectb/api/user/update',{
        github:github,
        linkedin:linkedin,
        resume:resume,
        bio:bio,
        college:college,
        phone:phone,
        user_id:localStorage.getItem('user')
      }).then((response)=>{
        alert("Details Saved! Click Submit and use Login")
      })
    }
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="bold">
        Social info
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Github
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e)=>{setGitHub(e.target.value)}}
            />
          </InputGroup>
        </FormControl>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Linkedin
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e)=>{setLinkedin(e.target.value)}}
            />
          </InputGroup>
        </FormControl>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Resume Link
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              http://
            </InputLeftAddon>
            <Input
              type="tel"
              placeholder="www.example.com"
              focusBorderColor="brand.400"
              rounded="md"
              onChange={(e)=>{setResume(e.target.value)}}
            />
          </InputGroup>
        </FormControl>
        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Your BIO
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
            onChange={(e)=>{setBio(e.target.value)}}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
        <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            College Name
          </FormLabel>
          <Input id="first-name" placeholder="college name.." onChange={(e)=>{setCollege(e.target.value)}}/>
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Phone no
          </FormLabel>
          <Input id="last-name" placeholder="phone no.." onChange={(e)=>{setPhone(e.target.value)}}/>
        </FormControl>

      </Flex>
      </SimpleGrid>
        <Button onClick={handleSave} marginTop='10px' colorScheme='blue'>Save</Button>
    </>
  );
};

export default function MultiStep() {
    const handleSubmit = ()=>{

      // setLoading(true)
      // axios.post('https://asadparkar.tech/devconnectb/api/user/signup',{
      //   name:name,
      //   email:email,
      //   password:password
      // }).then((response)=>{
      //   setLoading(false)
      // }).catch((error)=>{
      //   setError(true);
      //   setErrorMessage(error.response.data.error);
      //   setLoading(false);
      // })
    }
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form" marginTop="10rem">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Link to='/home'>
                <Button
                  w="7rem"
                  colorScheme="red"
                  variant="solid"
                  // onClick={() => {
                  //   toast({
                  //     title: 'Account created.',
                  //     description: "We've created your account for you.",
                  //     status: 'success',
                  //     duration: 3000,
                  //     isClosable: true,
                  //   });
                  // }}
                  >
                  Submit
                </Button>
              </Link>

            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
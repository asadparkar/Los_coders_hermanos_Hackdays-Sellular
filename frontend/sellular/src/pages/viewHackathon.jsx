import { Box, Button, Image, Spinner, Text,Input,Select,Alert,AlertDescription,AlertIcon,AlertTitle} from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { FaLaptop,FaBiking,FaMapMarker,FaTrophy,FaUserFriends,FaUserAlt} from "react-icons/fa";
import axios from 'axios';
import loading from '../assets/images/loading.png'
import { decodeToken } from "react-jwt";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

const ViewHackathon = () => { 
    const token = localStorage.getItem('jwt')
    const decodedToken = decodeToken(token);
    const {id} = useParams();
    const  navigate = useNavigate();
    const [index,setThread] = useState({});
    const [isLoaded,setLoading] = useState(false);
    const [isUserApplied,setApplied] = useState(false);
    const hackathon = useRef();
    const application_ids = useRef();
    const [isSubmitted,setSubmitted] = useState(false)
    const [isOrganizer,setOrganizer] = useState(false);
    const[render,setRerender] = useState(false)

        //THIS IS FOR MODAL
        const { isOpen, onOpen, onClose } = useDisclosure()
        const initialRef = React.useRef(null)
        const finalRef = React.useRef(null)
    
    //STATES FOR APPLICATION
    const [team_name,setTeamName] = useState();
    const [joinType,setJoinType] = useState();
    const [whyJoin,setWhyJoin] = useState();




    const getApplication = async(item)=>{
        application_ids.current = item
    }

    const getHackathon = async()=>{
        return await axios.get(`https://asadparkar.tech/devconnectb/api/event/event/${id}`)
    }

    useEffect(()=>{
        getHackathon().then((response)=>{
            getApplication(response.data.event.event_applications)
            setThread({
                event_id:response.data.event._id,
                title:response.data.event.event_name,
                event_img:response.data.event.event_img,
                mode:response.data.event.event_mode,
                location:response.data.event.event_location,
                event_theme:response.data.event.event_theme,
                description:response.data.event.description,
                event_prize:response.data.event.event_prize,
                event_timeline:response.data.event.event_timeline,
                event_status:response.data.event.event_status,
                event_applications:response.data.event.event_applications,
                organizer:response.data.event.organizer,
            })
            application_ids.current.forEach(element => {
                if (!index.organizer){
                    setRerender(!render);
                }
            if (index.organizer === decodedToken.user_id){
                setOrganizer(true)
            }
            if (element.applicant_id === decodedToken.user_id){
                setApplied(true)
            }

        });
        setLoading(true)

        }).catch((error)=>{
            console.log(error)
            navigate('*');
        })
    },[render])

        const submitApplication = async()=>{
            return await axios.post('https://asadparkar.tech/devconnectb/api/event/apply',{
                event_id:index.event_id,
                team_name:team_name,
                applicant_id:decodedToken.user_id,
                join_type:joinType,
                why_join:whyJoin,
                application_status:'pending'
            })
    }
    const handleClick = ()=>{
        submitApplication().then((response)=>{
            console.log(response)
            if (response.status === 200){
                setSubmitted(true);
                return;
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    const handleAccept = async (id)=>{
        await axios.post('https://asadparkar.tech/devconnectb/api/event/application/changestatus',{
            id:id,
            payload:'accepted'
        }).then((response)=>{
            if (response.status === 200){
                window.location.reload();
            }
        }).catch((err)=>{
            console.log(err)
        })
    }

        const handleReject = async (id)=>{
        await axios.post('https://asadparkar.tech/devconnectb/api/event/application/changestatus',{
            id:id,
            payload:'rejected'
        }).then((response)=>{
            if (response.status === 200){
                window.location.reload();

            }
        }).catch((err)=>{
            console.log(err)
        })
    }
  return (
    <Box padding={'45px'} fontFamily='Poppins' >
        <Box bg='gray.100' padding={'10px'} borderRadius='15px'>
            {!isLoaded && <Box display={'flex'} justifyContent='center' alignItems={'center'}>
                <Spinner size='xl' />
            </Box> }
            {isLoaded && <Box>
            <Text fontSize={'3xl'} fontWeight='bold'>{index.title}</Text>
            <Text fontSize={'2xl'} color='gray.500' fontWeight={'medium'}>{index.event_theme}</Text>
            <Box display={'flex'} justifyContent='center'>
                <Image height={'400px'} src={index.event_img || 'https://www.nyit.edu/files/box/article_images/Box_20210408_ETICHackathonPreview_Hero.jpg'} alt='Hackathon Thumbnail' />
            </Box>

            <Text fontSize={'lg'} marginTop='20px' fontWeight={'medium'} color='#3B49DF'>Hackathon Status:</Text>
            <Text fontSize={'lg'}>{index.event_status}</Text>

            <Box marginTop={'15px'} display='flex'>
                <Box display={'flex'} alignItems='center'>
                    <FaLaptop/>
                    <Text marginLeft={'10px'} marginRight='15px'>{index.mode}</Text>
                </Box>
                <Box display={'flex'} alignItems='center'>
                    <FaMapMarker/>
                    <Text marginLeft={'10px'}>{index.location}</Text>
                </Box>
            </Box>

            <Text fontSize={'lg'} marginTop='20px' fontWeight={'medium'} color='#3B49DF'>Description:</Text>
            <Text fontSize={'lg'} >{index.description}</Text>


            <Text fontSize={'lg'} marginTop='20px' fontWeight={'medium'} color='#3B49DF'>Prizes </Text>
            <Text fontSize={'lg'}>
            {index.event_prize}
            </Text>



            <Box display={'flex'} alignItems='center' color={'gray.500'} marginTop='40px'>
                <Box marginRight={'10px'}>
                    <FaUserAlt />
                </Box>
                <Box fontSize={'xl'} fontWeight='bold' key={index} >
                    {application_ids.current.length+1}+ Participating
                </Box>
            </Box>
            {!isUserApplied && !isOrganizer  && <Button marginTop={'25px'} _hover={{bg:'#3E54AC'}} color={'white'} bg={'#3B49DF'} onClick={onOpen}>Apply Now</Button> }
            {isUserApplied && !isOrganizer &&
            <Button isDisabled marginTop={'25px'} _hover={{bg:'#3E54AC'}} color={'white'} bg={'#3B49DF'} onClick={()=>{
            }}>Applied</Button>
            }
            </Box>}

            {isOrganizer && <Box>
                <Text fontSize={'xl'} fontWeight='bold' marginTop={'10px'}>Applications</Text>
                {application_ids?.current?.filter(item => item.application_status.includes('pending')).map((item)=>(
                    <Box bg={'gray.200'} borderRadius='10px' padding={'10px'}>
                    <Text fontSize={'lg'} marginTop='10px'>Team Name : {item.team_name} </Text>
                    <Text fontSize={'lg'} marginTop='10px'>Type: {item.join_type}</Text>
                    <Text fontSize={'md'} marginTop='10px'>{item.why_join}</Text>
                    <Box display={'flex'}>
                        <Button marginTop={'10px'} marginRight='10px' colorScheme='blue' onClick={()=>{handleAccept(item._id)}}>Accept</Button>
                        <Button marginTop={'10px'} colorScheme='red' onClick={()=>{handleReject(item._id)}}>Reject</Button>
                    </Box>
                    </Box>
                ))}

            </Box>}
        </Box>
        <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalOverlay
                 backdropFilter='blur(10px)'

                 />
                <ModalContent>
                  <ModalHeader>Applying for {index.title}</ModalHeader>
                  <ModalCloseButton />
                  {!isSubmitted && <ModalBody pb={6}>
                    <Box display={'flex'} flexDirection='column'>
                      <Input value={team_name} placeholder='Team Name' onChange={(e)=>{setTeamName(e.target.value)}} />
                    <Select placeholder='Register as' marginTop={'25px'} borderColor='black' value={joinType} onChange={(e)=>{
                        setJoinType(e.target.value);
                    }}>
                        <option value='individual'>Individual</option>
                        <option value='team' style={{color:'black'}}>Team</option>

                    </Select>
                      <Input marginTop={'25px'} value={whyJoin} placeholder='Why do you want to Participate?' onChange={(e)=>{setWhyJoin(e.target.value)}} />
                    </Box>
                    <Button onClick={handleClick} marginTop={'20px'} colorScheme='blue'>Apply</Button>

                  </ModalBody>}
                {isSubmitted && <Alert
                status='success'
                variant='subtle'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                height='200px'
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={1} fontSize='lg'>
                    Application submitted!
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    Thanks for submitting your application. Sit back and relax till our team reviews your application 😺
                </AlertDescription>
                </Alert>}
                </ModalContent>
              </Modal>
    </Box>
  )
}

export default ViewHackathon
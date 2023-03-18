import {
    Container,
    Box,
    Avatar,
    Button,
    HStack,
    VStack,
    Image,
    Input,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    Link,
    MenuDivider,
    useColorModeValue
    } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
    //hello
    const IconButton = ({ children }) => {
    return (
    <Button
    padding="0.4rem"
    width="auto"
    height="auto"
    borderRadius="100%"
    bg="transparent"
    _hover={{ bg: "#f6f6f6" }}
    >
    {children}
    </Button>
    )
    }
    
    const Header = () => {
        const navigate = useNavigate();
        const handleClick = ()=>{
            localStorage.removeItem('jwt');
            navigate('/')
        }
    return (
    <Box
    py="2"
    boxShadow="lg"
    border="0 solid #e5e7eb"
    position="fixed"
    top="0"
    // bg={useColorModeValue("gray.100", "gray.700")}
    bg='#F5F7F7'
    width="100%"
    zIndex="10"
    height='10%'
    display={'flex'}
    flexDirection='column'
    alignItems={'center'}
    justifyContent='center'
    >
    <Container maxW="1580px" px={4} mx="auto">
    <HStack spacing={4}>
    <Image
    alt="DevConnect logo"
    h={'90px'}
    w='90px'
    src="https://cdn.discordapp.com/attachments/835850564771643402/1083983817733324820/mini_project_2_logo.png"
    />

    <Spacer />
    <HStack spacing={3}>
    <Button
    color="#fff"
    rounded="md"
    bg="#3b49df"
    _hover={{ bg: "#323ebe" }}
    >
    Create Event
    </Button>
    <IconButton>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    role="img"
    aria-labelledby="ap1tc5wqdskeg9i5jtulggx2n8axe0vz"
    >
    <title id="ap1tc5wqdskeg9i5jtulggx2n8axe0vz">
    Notifications
    </title>
    <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1116 0v7zm-2 0v-7a6 6 0 10-12 0v7h12zm-9 4h6v2H9v-2z"></path>
    </svg>
    </IconButton>
    <Menu isLazy>
    <MenuButton as={Button} size="sm" px={0} py={0} rounded="full">
    <Avatar
    size="sm"
    src={"https://avatars2.githubusercontent.com/u/37842853?v=4"}
    />
    </MenuButton>
    <MenuList
    zIndex={5}
    border="2px solid"
    borderColor={useColorModeValue("gray.700", "gray.100")}
    boxShadow="4px 4px 0"
    >
    <Link
    href="https://dev.to/m_ahmad"
    _hover={{ textDecoration: "none" }}
    isExternal
    >
    <MenuItem>
    <VStack justify="start" alignItems="left">
    <Text fontWeight="500">Umam</Text>
    <Text size="sm" color="gray.500" mt="0 !important">
    @u_khan
    </Text>
    </VStack>
    </MenuItem>
    </Link>
    <MenuDivider />
    <MenuItem>
    <Text fontWeight="500">My Dashboard</Text>
    </MenuItem>
    <MenuItem>
    <Text fontWeight="500">Create Post</Text>
    </MenuItem>
    <MenuItem>
    <Text fontWeight="500">Update Profile</Text>
    </MenuItem>
    <MenuItem>
    <Text fontWeight="500">Settings</Text>
    </MenuItem>
    <MenuDivider />
    <MenuItem onClick={handleClick}>
    <Text fontWeight="500">Sign Out</Text>
    </MenuItem>
    </MenuList>
    </Menu>
    </HStack>
    </HStack>
    </Container>
    </Box>
    )
    }
    
    export default Header
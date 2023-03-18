import { Box, Flex, Icon, Text, useColorModeValue,CardHeader,Card,CardBody, CardFooter } from '@chakra-ui/react';
import React from 'react';
import {AddIcon,ChatIcon,DownloadIcon,CheckIcon} from '@chakra-ui/icons'

function TimelineRow(props) {
	const { logo, title, date, color, index, arrLength } = props;
	const textColor = useColorModeValue('gray.700', 'white.300');
	const bgIconColor = useColorModeValue('white.300', 'gray.700');

	return (
		<Flex alignItems='center' minH='78px' justifyContent='start' mb='5px'>
			<Flex direction='column' h='100%'>
				<Icon
					as={logo}
					bg={bgIconColor}
					color={color}
					h={'30px'}
					w={'26px'}
					pe='6px'
					zIndex='1'
					position='relative'
					right={document.documentElement.dir === 'rtl' ? '-8px' : ''}
					left={document.documentElement.dir === 'rtl' ? '' : '-8px'}
				/>
				<Box w='2px' bg='gray.200' h={index === arrLength - 1 ? '15px' : '100%'} />
			</Flex>
			<Flex direction='column' justifyContent='flex-start' h='100%'>
				<Text fontSize='sm' color={textColor} fontWeight='bold'>
					{title}
				</Text>
				<Text fontSize='sm' color='gray.400' fontWeight='normal'>
					{date}
				</Text>
			</Flex>
		</Flex>
	);
}

const timelineData = [
    {
      logo: AddIcon,
      title: "Registration starts",
      date: "22 DEC 7:20 PM",
      color: "brand.300",
    },
    {
      logo: ChatIcon,
      title: "Registration ends",
      date: "21 DEC 11:21 PM",
      color: "blue.300",
    },
    {
      logo: DownloadIcon,
      title: "Hackathon starts",
      date: "21 DEC 9:28 PM",
      color: "orange.300",
    },
    {
      logo: CheckIcon,
      title: "Hackathon ends",
      date: "20 DEC 3:52 PM",
      color: "red.300",
    },
  ]

function TimeLine() {
    
   const textColor = useColorModeValue("gray.700", "white.300")
  const bgIconColor = useColorModeValue("white.300", "gray.700")
  const bg = useColorModeValue("gray.50", "gray.700")

  return (
    <Card p="1rem" maxHeight="50%" width="20%">
      <CardHeader pt="0px" p="28px 0px 35px 21px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
            Orders overview
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            <Text fontWeight="bold" as="span" color="brand.300">
              +30%
            </Text>{" "}
            this month.
          </Text>
        </Flex>
      </CardHeader>
      <CardBody ps="26px" pe="0px" mb="31px" position="relative">
        <Flex direction="column">
          {timelineData.map((row, index, arr) => {
            return (
              <TimelineRow
                logo={row.logo}
                title={row.title}
                date={row.date}
                color={row.color}
                index={index}
                arrLength={arr.length}
              />
            )
          })}
        </Flex>
      </CardBody>
    </Card>
  )
}

export default TimeLine

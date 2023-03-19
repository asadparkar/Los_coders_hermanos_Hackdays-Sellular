
import { Box, Heading, Text } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

export default function NoEvents() {
  return (
    <Box textAlign="center" py={10} px={6} mt="10rem">
      <InfoIcon boxSize={'50px'} color={'blue.500'} />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        WHOOPS, this is empty
      </Heading>
      <Text color={'gray.500'}>
        You currently have no events, join some or create some!
      </Text>
    </Box>
  );
}
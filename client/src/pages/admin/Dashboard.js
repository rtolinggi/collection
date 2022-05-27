import { Box, Heading, Text } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <>
      <Heading size='md' color='gray.700'>
        Dashboard
      </Heading>
      <Box
        as='main'
        backgroundColor='white'
        w='100%'
        p={4}
        rounded='md'
        boxShadow='lg'
        my={2}>
        <Text fontWeight='semibold' size='lg'>
          Contet
        </Text>
      </Box>
    </>
  );
};

export default Dashboard;

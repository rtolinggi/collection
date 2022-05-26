import { Box, Heading } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <>
      <Box
        as="main"
        backgroundColor="white"
        w="100%"
        p={4}
        rounded="md"
        boxShadow="lg"
        my={2}
      >
        <Heading size="sm" fontFamily="body">
          Dashboard Page
        </Heading>
      </Box>
    </>
  );
};

export default Dashboard;

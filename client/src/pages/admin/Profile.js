import { Box, Heading } from "@chakra-ui/react";

const Profile = () => {
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
          Profil Page
        </Heading>
      </Box>
    </>
  );
};

export default Profile;

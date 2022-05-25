import { Box, Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";

const AdminLayout = ({ children }) => {
  return (
    <Flex direction='column' bg='blue.50' opacity='90'>
      <Header />
      <Flex w='100%' h='93.6vh'>
        <Box
          w='250px'
          left={["-250px", "-250px", "0"]}
          bg='white'
          top='0'
          bottom='0'
          pos='fixed'>
          <SideBar />
        </Box>
        <Box opacity='inherit' flex='1' pl='300px' pr='50px' my={10}>
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default AdminLayout;

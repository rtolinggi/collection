import { Box, Flex, useBoolean } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideBar from "../components/sidebar/SideBar";

const AdminLayout = () => {
  const [showSidebar, setShowSidebar] = useBoolean(true);

  return (
    <Flex direction="column">
      <Header showSidebar={setShowSidebar} />
      <Flex w="100%" pos="relative" left="0" top={14}>
        <Box
          as="nav"
          zIndex={99}
          w="250px"
          top={14}
          bottom="0"
          pos="fixed"
          left={showSidebar ? "0" : "-250"}
          bg="white"
        >
          <SideBar />
        </Box>
        <Box
          w={["100%", "100%", showSidebar ? "calc(100% - 250px)" : "100%"]}
          pos="absolute"
          p={6}
          left={["0px", "0px", !showSidebar ? "0px" : "250px"]}
        >
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default AdminLayout;

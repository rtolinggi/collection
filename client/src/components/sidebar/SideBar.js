import {
  Avatar,
  AvatarBadge,
  Divider,
  Flex,
  Text,
  VStack,
  Box,
  Heading,
  Center,
  Icon,
} from "@chakra-ui/react";
import avatarProfile from "../../assets/images/avatar.jpg";
import { RiDashboardLine, RiProfileLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  let activeStyle = {
    color: "#00A3C4",
    borderRightWidth: "3px",
    borderRightColor: "#00A3C4",
    width: "100%",
    fontWeight: "bold",
  };
  return (
    <Flex
      zIndex={1001}
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      w="100%"
      h="full"
      flexDir="column"
      justifyContent="space-between"
    >
      <VStack>
        <Center
          w="full"
          h="8rem"
          borderBottom="1px"
          borderBottomColor="gray.200"
          pos="relative"
        >
          <VStack>
            <Heading size="xs" color="primary.600">
              rtolinggi
            </Heading>
            <Text>rtolinggi91@gmail.com</Text>
          </VStack>
          <Avatar src={avatarProfile} pos="absolute" bottom={-8} size="lg" />
        </Center>
        <Flex
          direction="column"
          align="start"
          w="full"
          pt="25px"
          pl={4}
          gap={4}
        >
          <Text fontSize="xs" fontWeight="semi-bold">
            HOME
          </Text>
          <NavLink
            to="/admin/dashboard"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div />
            <Box py={2} display="flex" gap={4} _hover={{ color: "cyan.500" }}>
              <Icon as={RiDashboardLine} w={5} h={5} />
              <Text>Dashboard</Text>
            </Box>
          </NavLink>
          <Text fontSize="xs" fontWeight="semi-bold">
            MENU
          </Text>
          <NavLink
            to="/admin/profile"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div />
            <Box py={2} display="flex" gap={4} _hover={{ color: "cyan.500" }}>
              <Icon as={RiProfileLine} w={5} h={5} />
              <Text>Profile</Text>
            </Box>
          </NavLink>
        </Flex>
      </VStack>
      <VStack>
        <Divider />
        <Flex justify="space-around" align="center" p="5%" gap={2}>
          <Avatar size="sm">
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
          <Flex flexDir="column" align="center" justify="start" pos="relative">
            <Text size="md" fontWeight="bold">
              rtolinggi91@gmail.com
            </Text>
            <Text alignSelf="self-start">admin</Text>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default SideBar;

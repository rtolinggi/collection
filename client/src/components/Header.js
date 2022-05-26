import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Icon,
} from "@chakra-ui/react";
import {
  RiArrowDownSLine,
  RiLogoutBoxLine,
  RiProfileLine,
  RiUserSettingsLine,
} from "react-icons/ri";
import { IoMenuOutline } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { BiAtom } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut, unauthenticateUser } from "../features/auth/authSlice";

const Header = ({ showSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    const response = await dispatch(signOut()).unwrap();
    if (response.success) {
      dispatch(unauthenticateUser());
      return navigate("/");
    }
    console.log(response);
  };
  return (
    <Flex
      as="header"
      zIndex={100}
      alignItems="center"
      justify="space-between"
      boxShadow="md"
      h={14}
      pos="fixed"
      top="0"
      left="0"
      width="100%"
      bg="white"
    >
      <Center w="250px" display={["none", "none", "flex"]}>
        <BiAtom
          style={{
            fontSize: "1.8rem",
            color: "#03506f",
            fontWeight: "bolder",
          }}
        />
        <Heading as="h4" size="md" color="primary.500">
          Collection
        </Heading>
      </Center>
      <Box flex="1">
        <Flex justify="space-between" align="center" gap={6}>
          <Icon
            as={IoMenuOutline}
            w={8}
            h={8}
            ml={2}
            color="cyan.300"
            _hover={{ color: "cyan.600" }}
            cursor="pointer"
            onClick={showSidebar.toggle}
          />
          <Center w="250px" display={["flex", "flex", "none"]}>
            <BiAtom
              style={{
                fontSize: "1.8rem",
                color: "#03506f",
                fontWeight: "bolder",
              }}
            />
            <Heading as="h4" size="md" color="primary.500">
              Collection
            </Heading>
          </Center>
          <Flex align="center" justify="center">
            <Menu isLazy>
              <MenuButton
                fontSize="2xl"
                fontWeight="semibold"
                color="primary.600"
                pos="relative"
                top="1px"
                mr={["10px", "10px", "0px"]}
              >
                <Badge
                  variant="solid"
                  colorScheme="red"
                  pos="absolute"
                  top="-6px"
                  borderRadius="50%"
                  fontSize="10px"
                  right="-4px"
                >
                  7
                </Badge>
                {<MdNotificationsNone color="red.500" />}
              </MenuButton>
              <MenuList fontSize="sm">
                <MenuItem
                  _hover={{ bg: "cyan.50" }}
                  icon={
                    <Icon
                      as={RiUserSettingsLine}
                      w={4}
                      h={4}
                      color="gray.600"
                    />
                  }
                >
                  Setting
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "cyan.50" }}
                  icon={
                    <Icon as={RiProfileLine} w={4} h={4} color="gray.600" />
                  }
                >
                  Profile
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  _hover={{ bg: "cyan.50" }}
                  icon={
                    <Icon as={RiLogoutBoxLine} w={4} h={4} color="gray.600" />
                  }
                  onClick={handleLogout}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu isLazy>
              <MenuButton
                display={["none", "none", "flex"]}
                as={Button}
                mr="10px"
                variant="outline"
                borderWidth="0px"
                fontWeight="normal"
                letterSpacing="tighter"
                _hover={{ bg: "transparent" }}
                _focus={{
                  boxShadow: "outline",
                  ring: "0px",
                  ringColor: "white",
                  outline: "none",
                }}
                _active={{
                  boxShadow: "outline",
                  ringColor: "white",
                  bg: "transparent",
                  ring: "0px",
                  outline: "none",
                }}
                rightIcon={<RiArrowDownSLine />}
                bg="transparent"
              >
                <Avatar bg="primary.500" size="xs" mr={2} />
                rtolinggi
              </MenuButton>
              <MenuList fontSize="sm">
                <MenuItem
                  _hover={{ bg: "cyan.50" }}
                  icon={
                    <Icon
                      as={RiUserSettingsLine}
                      w={4}
                      h={4}
                      color="gray.600"
                    />
                  }
                >
                  Setting
                </MenuItem>
                <MenuItem
                  _hover={{ bg: "cyan.50" }}
                  icon={
                    <Icon as={RiProfileLine} w={4} h={4} color="gray.600" />
                  }
                >
                  Profile
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  _hover={{ bg: "cyan.50" }}
                  icon={
                    <Icon as={RiLogoutBoxLine} w={4} h={4} color="gray.600" />
                  }
                  onClick={handleLogout}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;

import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {
  RiArrowDownSLine,
  RiLogoutBoxLine,
  RiProfileLine,
  RiUserSettingsLine,
  RiMailCheckLine,
} from "react-icons/ri";
import { IoIosNotificationsOutline, IoMdMail } from "react-icons/io";
import { MdNotificationsNone, MdOutlineMail } from "react-icons/md";
const Header = () => {
  return (
    <Flex
      alignItems="center"
      justify="space-between"
      boxShadow="md"
      px={8}
      py={3}
    >
      <Box bg="white">
        <p>Logo</p>
      </Box>
      <Box bg="white">
        <Flex justify="center" align="center">
          <Menu isLazy>
            <MenuButton
              fontSize="2xl"
              fontWeight="light"
              mr={4}
              color="primary.600"
              pos="relative"
            >
              <Badge
                variant="solid"
                colorScheme="green"
                pos="absolute"
                top="-6px"
                borderRadius="50%"
                fontSize="10px"
                right="-4px"
              >
                5
              </Badge>
              {<MdOutlineMail />}
            </MenuButton>
            <MenuList fontSize="sm">
              <MenuItem icon={<RiUserSettingsLine />}>Setting</MenuItem>
              <MenuItem icon={<RiProfileLine />}>Profile</MenuItem>
              <MenuDivider />
              <MenuItem icon={<RiLogoutBoxLine />}>Logout</MenuItem>
            </MenuList>
          </Menu>
          <Menu isLazy>
            <MenuButton
              fontSize="2xl"
              fontWeight="semibold"
              mr={12}
              color="primary.600"
              pos="relative"
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
              <MenuItem icon={<RiUserSettingsLine />}>Setting</MenuItem>
              <MenuItem icon={<RiProfileLine />}>Profile</MenuItem>
              <MenuDivider />
              <MenuItem icon={<RiLogoutBoxLine />}>Logout</MenuItem>
            </MenuList>
          </Menu>
          <Menu isLazy>
            <MenuButton
              as={Button}
              p={0}
              variant="outline"
              borderWidth="0px"
              fontWeight="normal"
              letterSpacing="tighter"
              _hover={{ bg: "white" }}
              _focus={{
                boxShadow: "outline",
                ring: "0px",
                ringColor: "white",
                outline: "none",
              }}
              _active={{
                boxShadow: "outline",
                ringColor: "white",
                bg: "white",
                ring: "0px",
                outline: "none",
              }}
              rightIcon={<RiArrowDownSLine />}
              bg="white"
            >
              <Avatar bg="primary.500" size="xs" mr={2} />
              rtolinggi
            </MenuButton>
            <MenuList fontSize="sm">
              <MenuItem icon={<RiUserSettingsLine />}>Setting</MenuItem>
              <MenuItem icon={<RiProfileLine />}>Profile</MenuItem>
              <MenuDivider />
              <MenuItem icon={<RiLogoutBoxLine />}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Header;

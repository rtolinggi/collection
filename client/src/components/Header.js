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

const Header = () => {
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
      zIndex={100}
      alignItems='center'
      justify='space-between'
      boxShadow='md'
      py='2.5'
      pos='static'
      top='0'
      left='0'
      width='100%'
      overflow='hidden'
      bg='white'>
      <Center w='250px'>
        <BiAtom
          style={{
            fontSize: "1.8rem",
            color: "#03506f",
            fontWeight: "bolder",
          }}
        />
        <Heading as='h4' size='md' color='primary.500'>
          Collection
        </Heading>
      </Center>
      <Box flex='1'>
        <Flex justify='space-between' align='center' gap={6}>
          <Box
            borderRadius='sm'
            color='cyan.500'
            _hover={{ bg: "cyan.100", color: "gray.600" }}
            fontSize='3xl'
            fontWeight='bold'
            cursor='pointer'>
            <IoMenuOutline />
          </Box>
          <Flex align='center' justify='center'>
            <Menu isLazy>
              <MenuButton
                fontSize='2xl'
                fontWeight='semibold'
                color='primary.600'
                pos='relative'
                top='1px'>
                <Badge
                  variant='solid'
                  colorScheme='red'
                  pos='absolute'
                  top='-6px'
                  borderRadius='50%'
                  fontSize='10px'
                  right='-4px'>
                  7
                </Badge>
                {<MdNotificationsNone color='red.500' />}
              </MenuButton>
              <MenuList fontSize='sm'>
                <MenuItem icon={<RiUserSettingsLine />}>Setting</MenuItem>
                <MenuItem icon={<RiProfileLine />}>Profile</MenuItem>
                <MenuDivider />
                <MenuItem icon={<RiLogoutBoxLine />}>Logout</MenuItem>
              </MenuList>
            </Menu>
            <Menu isLazy>
              <MenuButton
                as={Button}
                mr='10px'
                variant='outline'
                borderWidth='0px'
                fontWeight='normal'
                letterSpacing='tighter'
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
                bg='transparent'>
                <Avatar bg='primary.500' size='xs' mr={2} />
                rtolinggi
              </MenuButton>
              <MenuList fontSize='sm'>
                <MenuItem
                  _hover={{ bg: "cyan.50" }}
                  icon={<RiUserSettingsLine />}>
                  Setting
                </MenuItem>
                <MenuItem _hover={{ bg: "cyan.50" }} icon={<RiProfileLine />}>
                  Profile
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  _hover={{ bg: "cyan.50" }}
                  icon={<RiLogoutBoxLine />}
                  onClick={handleLogout}>
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

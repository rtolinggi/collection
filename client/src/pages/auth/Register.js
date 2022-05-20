import React from "react";
import {
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiAtom } from "react-icons/bi";
import {
  RiMailLine,
  RiLock2Line,
  RiUser3Line,
  RiUserAddLine,
} from "react-icons/ri";
import { NavLink } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";

const Register = () => {
  return (
    <AuthLayout>
      <Container
        as='main'
        maxW='sm'
        bg='white'
        borderRadius='lg'
        p={6}
        boxShadow='dark-lg'>
        <HStack>
          <BiAtom
            style={{
              fontSize: "1.8rem",
              color: "#03506f",
              fontWeight: "bolder",
            }}
          />
          <Heading size='md' as='h1' color='#03506f'>
            Register
          </Heading>
        </HStack>

        <Divider my={4} />
        <Stack spacing={6}>
          <Stack spacing={2}>
            <FormControl>
              <FormLabel htmlFor='username' fontSize='sm'>
                Full Name
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  color='primary.600'
                  fontSize='md'
                  children={<RiUser3Line />}
                />
                <Input id='username' type='text' placeholder='Full Name' />
              </InputGroup>
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='email' fontSize='sm'>
                Email address
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  color='primary.600'
                  fontSize='md'
                  children={<RiMailLine />}
                />
                <Input id='email' type='email' placeholder='Email' />
              </InputGroup>
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='password' fontSize='sm'>
                Password
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  color='primary.600'
                  fontSize='md'
                  children={<RiLock2Line />}
                />
                <Input id='password' type='password' placeholder='Password' />
              </InputGroup>
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='repeatPassword' fontSize='sm'>
                Repeat Password
              </FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents='none'
                  color='primary.600'
                  fontSize='md'
                  children={<RiLock2Line />}
                />
                <Input
                  id='repeatPassword'
                  type='password'
                  placeholder='Repeat Password'
                />
              </InputGroup>
              {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
            </FormControl>
          </Stack>
          <Button
            w={["full", "fit-content"]}
            size='sm'
            leftIcon={<RiUserAddLine />}>
            Register
          </Button>
        </Stack>
        <Divider my={4} />
        <Stack align='center'>
          <Text>
            Do You have an Account ?{" "}
            <Text
              as={NavLink}
              to='/login'
              textDecoration='none'
              fontWeight='bold'
              color='primary.600'>
              Login
            </Text>
          </Text>
        </Stack>
      </Container>
    </AuthLayout>
  );
};

export default Register;

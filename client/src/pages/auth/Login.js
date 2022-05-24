import React from "react";
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BiAtom } from "react-icons/bi";
import { RiMailLine, RiLock2Line, RiLoginCircleLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import InputCostum from "../../components/InputCostum";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { authenticateUser, signIn } from "../../features/auth/authSlice";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  })
  .required();

const Login = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    try {
      const response = await dispatch(signIn(values)).unwrap();
      if (response.success) {
        dispatch(authenticateUser());
        navigate("/admin");
        return;
      }
      return console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  // function onSubmit(values) {
  //   return new Promise((resolve) => {
  //     const data = dispatch(signIn(values)).unwrap();
  //     console.log(data);
  //     resolve();
  //   });
  // }

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
            Login
          </Heading>
        </HStack>
        <Divider my={4} />
        <Stack as='form' onSubmit={handleSubmit(onSubmit)} spacing={6}>
          <Stack spacing={2}>
            <InputCostum
              name='email'
              title='Email'
              InputLeftIcon={<RiMailLine />}
              register={register}
              errorMessage={errors?.email?.message}
            />
            <InputCostum
              name='password'
              title='Password'
              type='password'
              InputLeftIcon={<RiLock2Line />}
              register={register}
              errorMessage={errors?.password?.message}
            />
          </Stack>
          <Flex justifyContent='space-between' alignItems='center'>
            <Checkbox size='md' colorScheme='primary'>
              <Text as='span' fontSize='sm'>
                Remember Me
              </Text>
            </Checkbox>
            <Text
              as={NavLink}
              to='/forgotPassword'
              color='primary.600'
              fontWeight='semibold'>
              Forgot Password?
            </Text>
          </Flex>
          <Button
            w={["full", "fit-content"]}
            // onClick={increment}
            isLoading={isLoading}
            type='submit'
            size='sm'
            leftIcon={<RiLoginCircleLine />}>
            Login
          </Button>
        </Stack>
        <Divider my={4} />
        <Stack align='center'>
          <Text>
            Dont have an Account ?{" "}
            <Text
              as={NavLink}
              to='/register'
              textDecoration='none'
              fontWeight='bold'
              color='primary.600'>
              Register
            </Text>
          </Text>
        </Stack>
      </Container>
    </AuthLayout>
  );
};

export default Login;

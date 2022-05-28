import React from "react";
import {
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { BiAtom } from "react-icons/bi";
import {
  RiMailLine,
  RiLock2Line,
  RiUser3Line,
  RiUserAddLine,
} from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import AuthLayout from "../../layouts/AuthLayout";
import { useForm } from "react-hook-form";
import InputCostum from "../../components/InputCostum";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../features/auth/authSlice";
import toastCostum from "../../components/toastCostum";

const schema = yup
  .object({
    username: yup.string().min(6).required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    repeatPassword: yup
      .string()
      .min(6)
      .required()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

const Register = () => {
  const { isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    try {
      console.log(values);
      const response = await dispatch(signUp(values)).unwrap();
      if (response.success) {
        toast(
          toastCostum(
            "Registration Successfully",
            "Please Check your email to Activation Account",
            "success"
          )
        );
        return navigate("/");
      }
      toast(toastCostum("Registration Failed", response.message, "error"));
    } catch (error) {
      toast(toastCostum("Registration Failed", error, "error"));
    }
  };

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
        <Stack as='form' onSubmit={handleSubmit(onSubmit)} spacing={6}>
          <Stack spacing={2}>
            <InputCostum
              name='username'
              title='Full Name'
              InputLeftIcon={<RiUser3Line />}
              register={register}
              errorMessage={errors?.username?.message}
            />
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
            <InputCostum
              name='repeatPassword'
              title='Repeat Password'
              type='password'
              InputLeftIcon={<RiLock2Line />}
              register={register}
              errorMessage={errors?.repeatPassword?.message}
            />
          </Stack>
          <Button
            w={["full", "fit-content"]}
            size='sm'
            type='submit'
            isLoading={isLoading}
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

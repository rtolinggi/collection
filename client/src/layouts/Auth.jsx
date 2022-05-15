import { Center } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <Center
      minH="100vh"
      w="full"
      bgGradient="radial(circle,rgba(130,219,216,1)0%, rgba(59,172,182,1) 50%, rgba(47,143,157,1) 100%)"
    >
      <Outlet />
    </Center>
  );
};

export default Auth;

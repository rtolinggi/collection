import { Flex } from "@chakra-ui/react";

const AuthLayout = ({ children }) => {
  return (
    <Flex
      justify='center'
      alignItems='center'
      minH='100vh'
      w='full'
      bgGradient='radial(circle, rgba(97,208,252,1) 0%, rgba(26,112,147,1) 35%, rgba(3,80,111,1) 100%)'>
      {children}
    </Flex>
  );
};

export default AuthLayout;

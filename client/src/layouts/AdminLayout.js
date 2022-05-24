import { Flex } from "@chakra-ui/react";

const AdminLayout = ({ children }) => {
  return <Flex direction="column">{children}</Flex>;
};

export default AdminLayout;

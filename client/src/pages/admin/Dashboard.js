import { Heading } from "@chakra-ui/react";
import AdminLayout from "../../layouts/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <Heading size='sm' fontFamily='body'>
        Dashboard Page
      </Heading>
    </AdminLayout>
  );
};

export default Dashboard;

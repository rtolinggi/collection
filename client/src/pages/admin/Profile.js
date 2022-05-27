import {
  Box,
  Flex,
  Heading,
  Spinner,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../features/auth/profileSlice";

const Profile = () => {
  const { data, isLoading } = useSelector((state) => state.profile);

  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    const getData = async () => {
      const response = await dispatch(getProfile()).unwrap();
      return response;
    };
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <Flex align='center' justify='center' w='100%' h='100vh'>
          <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='primary.600'
            size='xl'
          />
        </Flex>
      ) : (
        <Box
          as='main'
          backgroundColor='white'
          w='100%'
          p={4}
          rounded='md'
          boxShadow='lg'
          my={2}>
          <Heading size='sm' fontFamily='body' mb={8}>
            Profil Page
          </Heading>
          <TableContainer>
            <Table variant='striped' size='sm'>
              <TableCaption
                mb={8}
                fontWeight='semibold'
                fontSize='large'
                fontFamily='body'
                placement='top'
                alignSelf='self-start'>
                Imperial to metric conversion factors
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>To convert</Th>
                  <Th>into</Th>
                  <Th>multiply by</Th>
                </Tr>
              </Thead>
              <Tbody>
                {/* <Tr>
                  <Td>yards</Td>
                  <Td>metres (m)</Td>
                  <Td isNumeric>0.91444</Td>
                </Tr> */}
                {data?.profil ? (
                  data?.profil.map((items, idx) => {
                    return (
                      <Tr key={idx}>
                        <Td>{items.username}</Td>
                        <Td>{items.profil.name}</Td>
                        <Td>{items.email}</Td>
                      </Tr>
                    );
                  })
                ) : (
                  <p>No Data</p>
                )}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </>
  );
};

export default Profile;

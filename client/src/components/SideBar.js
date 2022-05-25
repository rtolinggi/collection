import {
  Avatar,
  AvatarBadge,
  Divider,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

const SideBar = () => {
  return (
    <Flex
      pt='65px'
      boxShadow='0 4px 12px 0 rgba(0,0,0,0.05)'
      w='100%'
      h='full'
      flexDir='column'
      justifyContent='space-between'>
      <VStack p='5%'>
        <div>TOP POSITION</div>
      </VStack>
      <VStack>
        <Divider />
        <Flex justify='space-around' align='center' p='5%' gap={2}>
          <Avatar size='sm'>
            <AvatarBadge boxSize='1.25em' bg='green.500' />
          </Avatar>
          <Flex flexDir='column' align='center' justify='start' pos='relative'>
            <Text size='md' fontWeight='bold'>
              rtolinggi91@gmail.com
            </Text>
            <Text alignSelf='self-start'>admin</Text>
          </Flex>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default SideBar;

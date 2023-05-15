import { Box, Text, Divider, Flex, Image, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";

const Friends = () => {
  const [friends] = useState([
    { id: 1, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
    { id: 2, img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: 3, img: 'https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg' },
    { id: 4, img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80' },
    { id: 5, img: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { id: 6, img: 'https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg' },
  ]);

  return (
    <Box bg="#222" className="m-1 mt-2 rounded-md p-2">
      <Text className="mt-1">2 пости</Text>
      <Divider borderColor="#828282" border="2x" className="mt-1 mb-2" />
      <Text>280 підписок</Text>
      <Flex flexWrap="wrap"  alignItems='flex-start'>
  {friends.map((item) => (
    <Box key={item.id} mb="4" mr="5" >
      <Flex flexDirection="column" alignItems="center">
        <Image className="w-12 h-12 rounded-full object-cover" src={item.img} />
        <Text className="mt-1" textAlign="center">
          Артем
        </Text>
      </Flex>
    </Box>
  ))}
</Flex>
    </Box>
  );
};

export default Friends;

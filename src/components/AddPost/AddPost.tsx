import { Box, Flex, Input, Image } from "@chakra-ui/react";
import UserInfo from "../UserInfo/UserInfo";

const AddPost = () => {
  return (
    <Flex bg='#222' className="mt-2 rounded-md p-2 pl-2 pr-4" alignItems='center'  >
        <Image className="w-10 h-10 rounded-full object-cover mr-2" src='https://pbs.twimg.com/profile_images/1510563022472888320/U8gI3rz__400x400.jpg' />
        <Input className="bg-transparent border-none w-full focus:outline-none" placeholder="Що у вас нового?" />
    </Flex>
  );
};

export default AddPost;

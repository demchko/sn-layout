import { Box, Flex, Text } from "@chakra-ui/react";
import UserInfo from "../UserInfo/UserInfo";
import AddPost from "../AddPost/AddPost";
import Posts from "../Posts/Posts";

const UserRight = () => {
  return (
    <Box className="m-1 mr-10" >
        <UserInfo />
        <AddPost />
        <Posts />
    </Box>
  );
};

export default UserRight;

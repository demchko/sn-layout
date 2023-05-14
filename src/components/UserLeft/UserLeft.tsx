import { Box, Flex, Text } from "@chakra-ui/react";
import UserImage from "../UserImage/UserImage";
import Friends from "../Friends/Friends";

const UserLeft = () => {
  return (
    <Box>
      <UserImage />
      <Friends />
    </Box>
  );
};

export default UserLeft;

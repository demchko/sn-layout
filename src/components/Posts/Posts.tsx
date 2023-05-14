import { useState } from 'react';
import { Box, Flex, Text, Divider, Button, Image } from "@chakra-ui/react";
import Post from '../Post/Post';


const Posts = () => {
  return (
    <Box >
        <Post isFirst={true} /> 
        <Post isFirst={false} /> 
    </Box>
    );
};

export default Posts;

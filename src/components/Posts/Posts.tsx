import { useState } from 'react';
import { Box, Flex, Text, Divider, Button, Image } from "@chakra-ui/react";
import Post from '../Post/Post';

const like = '/post/like.png';
const comment = '/post/comment.png';
const watch = '/post/watch.png';

const Posts = () => {
  return (
    <Box >
        <Post isFirst={true} /> 
        <Post isFirst={false} /> 
    </Box>
    );
};

export default Posts;

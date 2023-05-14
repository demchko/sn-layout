import { Box, Flex, Text, Image, Button, Grid, AspectRatio } from "@chakra-ui/react";

const UserImage = () => {
  return (
    <Box bg='#222222' className="font-sans m-1 rounded-md p-2" >
      <AspectRatio ratio={5/7} className="rounded-md overflow-hidden">
        <Image src='https://pbs.twimg.com/profile_images/1510563022472888320/U8gI3rz__400x400.jpg' objectFit="cover" />
      </AspectRatio>
      <Grid templateColumns='4fr 1fr' className="mt-2" >
        <Button bg='#333' className='rounded-sm mr-1 p-1' >Редагувати</Button>
        <Button bg='#333' className='rounded-sm p-1' >...</Button>
      </Grid>
    </Box>
  );
};

export default UserImage;

import { useState, useRef, useEffect } from 'react';
import { Box, Flex, Text, Divider, Button, Image, Grid } from "@chakra-ui/react";

interface PostProps {
  isFirst: boolean;
}

const Post: React.FC<PostProps> = ({ isFirst }) => {
  const [showFullText, setShowFullText] = useState(false);
  const [buttonModal, setButtonModal] = useState(false);
  const [underlineAll, setUnderlineAll] = useState(true);
  const [underlineMine, setUnderlineMine] = useState(false);

  const text = "Українська мова є однією з найкрасивіших та найбагатших мов світу. Вона має витончений граматичний апарат та безліч виразних слів, які дозволяють точно і яскраво виражати будь-які думки і почуття. Українська мова має глибокі історичні корені, що пов'язані з культурою та традиціями українського народу. Це мова, яку люблять і поважають не тільки українці, а й люди з інших країн. Навчитися володіти українською мовою - це не тільки корисно, але й цікаво та захоплююче. Вона дає можливість пізнати нові культури, знайомитися з новими людьми та сприяє розвитку особистості.";
  const truncatedText = text.substring(0, 300) + "...";

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setButtonModal(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Box bg='#222' className='mt-2 mb-5 rounded-md pt-1 pr-4 pl-4 pb-2'>
      {isFirst && (
        <Box className='mt-1'>
          <Grid templateColumns='1fr 1fr 5.5fr'>
            <Box>
              <Button
                onClick={() => {
                  setUnderlineAll(true);
                  setUnderlineMine(false);
                }}
              >
                Всі записи
              </Button>
              <Divider
                borderColor={underlineAll ? "#71AAEB" : "#828282"}
                border='2x'
                mt='5px'
              />
            </Box>
            <Box textAlign='center'>
  <Button
    onClick={() => {
      setUnderlineAll(false);
      setUnderlineMine(true);
    }}
  >
    Мої записи
  </Button>
  <Divider
    borderColor={underlineMine ? "#71AAEB" : "#828282"}
    border='2x'
    mt='5px'
  />
</Box>
<Box>
  <Button color='rgba(0, 0, 0, 0)'>fg</Button>
  <Divider borderColor="#828282" border='2x' mt='5px' />
</Box>
</Grid>
</Box>
)}
<Flex className='mt-3' justifyContent='space-between' alignItems='flex-start'>
  <Flex alignItems='center'>
    <Image
      className='w-10 h-10 rounded-full object-cover mr-2'
      src='https://pbs.twimg.com/profile_images/1510563022472888320/U8gI3rz__400x400.jpg'
      alt='avatar'
    />
    <Box>
      <Text className='text-lg'>Артем Демітко</Text>
      <Text color='#777' className=''>
        8 січня о 16:48
      </Text>
    </Box>
  </Flex>
  <Flex flexDirection='column' alignItems='flex-end' position='relative'>
    <Button
      ref={buttonRef}
      className='text-3xl'
      color='#828282'
      onClick={() => setButtonModal(!buttonModal)}
    >
      ...
    </Button>
    {buttonModal && (
      <Button position='absolute' bg='#333333' top='100%' className='p-1.5 rounded-md animate-fadeIn'>
        Видалити запис
      </Button>
    )}
  </Flex>
</Flex>
{text.length > 300 ? (
  <Box>
    <Text className='mt-4 animate-fadeIn'>{showFullText ? text : truncatedText}</Text>
    <Button color='#71AAEB' onClick={() => setShowFullText(!showFullText)} mt='2'>
      {showFullText ? 'Згорнути' : 'Показати ще'}
    </Button>
  </Box>
) : (
  <Text className='mt-4 animate-fadeIn'>{text}</Text>
)}
<Image className='mt-2' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='back' />
<Divider borderColor='#828282' border='2x' className='mt-3' />
<Flex justifyContent='space-between' alignItems='center' className='mt-3'>
  <Flex alignItems='center'>
    <Flex bg='#333333' className='p-1 rounded-md'>
      <Button>
        <Image objectFit='contain' src='like.svg' className='mr-1' />
        <Text color='#828282' >2 100</Text>
      </Button>
    </Flex>
    <Flex bg='#333333' className='p-1 rounded-md ml-2'>
      <Button>
        <Image objectFit='contain' src='comment.svg' className='mr-1' />
        <Text color='#828282' >43</Text>
      </Button>
    </Flex>
  </Flex>
  <Flex bg='#333333' className='p-1 rounded-md'>
    <Button>
      <Image objectFit='contain' className='mr-1' src='eye.svg' />
      <Text color='#828282' >27 930</Text>
    </Button>
  </Flex>
</Flex>
</Box>
  );
}

export default Post;

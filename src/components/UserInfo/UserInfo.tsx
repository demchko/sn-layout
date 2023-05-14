import { useState } from 'react';
import { Box, Button, Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";

const UserInfo = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <Box bg='#222' className="rounded-md pt-1 pr-4 pl-4 pb-2" >
        <Flex justifyContent='space-between' alignItems='center' >
            <Text className="text-2xl" >Артем Демітко</Text>
            <Flex alignItems='center' >
              <Box className='w-3 h-3 rounded-md mr-1' bg='#0077FF' ></Box>
              <Text>online</Text>
            </Flex>
        </Flex>
        <Text className="mt-1" >Хуйня, артем заїбався</Text>
        <Divider borderColor="#828282" border="2x" className="mt-3 mb-3" />
        <Box>
          {showMoreInfo && (
            <>
              <Grid templateColumns='1fr 2fr' className="mt-3" >
                <Text></Text>
                <Text color='#71AAEB'>
                  <Button>Редактувати</Button>
                </Text>
             </Grid>
              <Grid templateColumns='1fr 2fr' className="mt-3" >
                <Text>Про мене:</Text>
                <Text>Справді, я не можу сказати, що моє життя було складним. Я народився в багатій родині і мав все, що мені потрібно було. Вже в дитинстві мені стали доступні найкращі школи та університети, а в подальшому я отримав високооплачувану роботу в одному з найбільших фінансових конгломератів країни.</Text>
             </Grid>
            </>
          )}
          <Grid templateColumns='1fr 2fr' className="mt-3" >
            <Text>День народження:</Text>
            <Text>20 квітня 1889 р.</Text>
          </Grid>
          <Grid  templateColumns='1fr 2fr' className="mt-3" >
            <Text>Місто:</Text>
            <Text>Браунау-на-Інні</Text>
          </Grid>
          <Grid  templateColumns='1fr 2fr' className="mt-3" >
            <Text>Сайт:</Text>
            <Text>Snapster.com</Text>
          </Grid>
          {showMoreInfo && (
            <>
             <Grid  templateColumns='1fr 3fr' className="mt-3" >
               <Text>Контактна інформація</Text>
               <Divider borderColor="#828282" border="2x" className='mt-2' />
             </Grid>
             <Grid  templateColumns='1fr 2fr' className="mt-3" >
               <Text>Discord:</Text>
               <Text>https://www.youtube.com/@danbucks</Text>
             </Grid>
             <Grid  templateColumns='1fr 2fr' className="mt-3" >
               <Text>Instagram:</Text>
               <Text>https://www.youtube.com/@danbucks</Text>
             </Grid>
             <Grid  templateColumns='1fr 2fr' className="mt-3" >
               <Text>Telegram:</Text>
               <Text>https://www.youtube.com/@danbucks</Text>
             </Grid>
             <Grid  templateColumns='1fr 2fr' className="mt-3" >
               <Text>TikTok:</Text>
               <Text>https://www.youtube.com/@danbucks</Text>
             </Grid>
             <Grid  templateColumns='1fr 2fr' className="mt-3" >
               <Text>Twitter:</Text>
               <Text>https://www.youtube.com/@danbucks</Text>
             </Grid>
             <Grid  templateColumns='1fr 2fr' className="mt-3" >
               <Text>YouTube:</Text>
               <Text>https://www.youtube.com/@danbucks</Text>
             </Grid>
            </>
          )}
          <Grid templateColumns='1fr 2fr' className="mt-5">
            <Text></Text>
            {
            !showMoreInfo 
            ? <Text onClick={() => setShowMoreInfo(true)} _hover={{ cursor: "pointer"}}>
                Показати більше інформації
              </Text>
            : <Text onClick={() => setShowMoreInfo(false)} _hover={{ cursor: "pointer"}}>
                 Показати менше
              </Text>
            }
          </Grid>
        </Box>
    </Box>
  );
};

export default UserInfo;

import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import UserLeft from "../UserLeft/UserLeft";
import UserRight from "../UserRight/UserRight";

const MainComponent = () => {
  return (
    <Grid templateColumns="1fr 4fr" >
      <UserLeft />
      <UserRight />
    </Grid>
  );
};

export default MainComponent;

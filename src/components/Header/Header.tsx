import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import logo from "@/public/logo_dark.png";
import Link from "next/link";

const Header = () => {
  return (
    <Box bg="#222" h={{ base: "120px", md: "160px" }}>
      <Flex
        maxW="1200px"
        color="white"
        mx="auto"
        h="100%"
        px={{ base: 4, md: 8 }}
        alignItems="center"
      >
        <Link href={'/'} >
          <Box my={10} mr={15} cursor={'pointer'}
          >
            <Image src={logo} width={40} height={40} alt="Logo" />
          </Box>
        </Link>
        
        <Link href={'/'}>
          <Text fontWeight="thin" className="text-3xl" textDecoration={'none'} color='white' letterSpacing="wider" cursor={'pointer'}
          >
            Snapster
          </Text>
        </Link>

      </Flex>
    </Box>
  );
};

export default Header;

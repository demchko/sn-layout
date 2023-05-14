import { Box, Button, Flex, Image, useMediaQuery, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

const Sidebar = () => {
  const [menu] = useState([
    { id: 1, title: "Моя сторінка", link: "/user", img: "home.svg" },
    { id: 2, title: "Новини", link: "/news", img: "home.svg" },
    { id: 3, title: "Повідомлення", link: "/message", img: "message.svg" },
    { id: 5, title: "Форум", link: "/forum", img: "home.svg" },
    { id: 6, title: "Друзі", link: "/friends", img: "friend.svg" },
  ]);

  const router = useRouter();
  const [isLargerThanPhone] = useMediaQuery("(min-width: 480px)");
  const [showMenu, setShowMenu] = useState(true);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Box>
      {!isLargerThanPhone && (
        <Button onClick={handleMenuClick} mb="2" w="100%">
          {showMenu ? <Text>---</Text> : "Закрити"}
        </Button>
      )}
      {(!showMenu || isLargerThanPhone) && (
        <Box>
          {menu.map((item) => (
            <Flex className="mt-2" alignItems="center">
              <Image src={item.img} className="w-5 mr-1" />
              <Button
                className="text-xl mt-2"
                onClick={() => router.push(item.link)}
              >
                {item.title}
              </Button>
            </Flex>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
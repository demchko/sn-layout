import { useState } from "react";
import Link from "next/link";
import * as Yup from "yup";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Text,
  Heading
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage, ErrorMessageProps } from 'formik';
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";

const initialValues = {
  username: "",
  password: ""
};

const validationSchema = Yup.object({
  username: Yup.string().min(5).required("Будь ласка, введіть username"),
  password: Yup.string().required("Будь ласка, введіть пароль").matches(/^[^\s]+$/, "В паролі не повинно бути пробілів")
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    alert('Login');
  }

  return (
    <Flex maxW="md" mx="auto" alignItems={'center'} justifyContent={"center"} direction={"column"} m='40'>
      <Box textAlign="center" my={"auto"} maxW="sm"
        mx="auto"
        bg="#222"
        // rounded="15"
        className="rounded-xl"
        p='30'>

        <Box mx={"auto"} borderRadius={"100%"} bg={"#0077ff"} h={'100px'} w={'100px'}></Box>
        <Box >
          <Heading fontSize="xx-large" my={35}>
            Вхід в Snapster
          </Heading>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            {(formik) => (
              <Form>
                <FormControl>
                  <Field
                    as={Input}
                    name="username"
                    w="305px"
                    h="43px"
                    bg="#333"
                    borderRadius="8px"
                    placeholder="Введіть username"
                    border={'0px'}
                    pl={15}
                    my={12}
                    fontSize={'large'}
                  />
                  
                  <ErrorMessage name="username" component={Text} color="red" />
                </FormControl>
                <FormControl mt={4}>
                  <Field
                    as={Input}
                    name="password"
                    w="305px"
                    h="43px"
                    bg="#333333"
                    borderRadius="8px"
                    placeholder="Введіть пароль"
                    border={'0px'}
                    pl={15}
                    my={12}
                    fontSize={'large'}
                    type="password"
                  />
                  <ErrorMessage name="password" component={Text} color="red" />
                </FormControl>
                <Button
                  w="305px"
                  h="43px"
                  bg="white"
                  pl={10}
                  my={12}
                  borderRadius="8px"
                  border={'0px'}
                  fontSize={'large'}
                  fontWeight={'bold'}
                  color={'black'}
                  colorScheme="blue"
                  type="submit"
                  cursor={'pointer'}
                  disabled={formik.isSubmitting}
                >
                  Вхід
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>

      <Box my="auto"
        bg="#222"
        rounded="15"
        m='30' p='30'>
        <Text mb='15' fontSize={'large'} textAlign={'center'}>Вперше в Snapster?</Text>
        <Link href={'/register'} >
          <Box backgroundColor={'#4bb34b'} borderRadius={'8'} p={'15'} w={"305px"} >
            <Text w={'100%'} fontWeight={'bold'} textAlign={'center'} color={'white'} textDecoration={'none'} cursor={'pointer'}
            >
              Зареєструватися
            </Text>
          </Box>
        </Link>
      </Box>
    </Flex>
  )
}

import { useState } from "react";
import { useSignupMutation } from "@/api/auth";
import { SignUpRequest, SignUpResponse } from "@/types/signup";
import { setAuthState } from "@/store/auth/authSlice";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Text,
    Heading
} from "@chakra-ui/react";
import { Formik, Form, Field, ErrorMessage, ErrorMessageProps } from 'formik';
import { HiEye, HiEyeOff } from "react-icons/hi";


const initialValues = {
    username: "",
    password: "",
    email: ''
};

const initial_secons = {
    firstName: "",
    lastName: ""
}

const validationSchema = Yup.object({
    email: Yup.string().email("Будь ласка, введіть коректну електронну пошту").required("Будь ласка, введіть електронну пошту"),
    username: Yup.string().min(5).required("Будь ласка, введіть username"),
    password: Yup.string().required("Будь ласка, введіть пароль")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+=[\]{}|\\;:'",.<>/?]{8,}$/,
            "Пароль має містити принаймні 8 символів, одну маленьку і одну велику літеру та одну цифру"
        )
        .matches(/^[^\s]+$/, "В паролі не повинно бути пробілів")
});

const secondValidationSchema = Yup.object({
    firstName: Yup.string().required("Будь ласка, введіть своє ім'я"),
    lastName: Yup.string().required("Будь ласка, введіть своє прізвище"),
});

export default function RegisterForm() {
    const [showPassword, setShowPassword] = useState(false);
    const [showSecondForm, setShowSecondForm] = useState(false);

    const router = useRouter();
    const dispatch = useDispatch();


    const [register, { isLoading, error }] = useSignupMutation(
        // {
        //         onSuccess: (res: SignUpRequest, req: SignUpResponse) => {
        //             // Here, you can set the access and refresh tokens in the browser's storage or context for later use
        //             setShowSecondForm(true);
        //             console.log(req);
        //             console.log(res);
        //             // router.push("/dashboard");
        //         },
        //         onError: (err: ErrorResponse, variables: SignUpRequest) => {
        //             console.error(err);
        //         }
        //     }
    );

    const handleRegister = async (values: SignUpRequest) => {
        try {
            const response = await register(values);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSecondFormSubmit = () => {
        // Handle the submission of the second form here
        console.log('register successful');
    };

    return (
        <Flex maxW="md" mx="auto" alignItems={'center'} justifyContent={"center"} direction={"column"} m='40'>
            <Box textAlign="center" my={"auto"} maxW="sm"
                mx="auto"
                bg="#222"
                rounded="15"
                p='30'>
                <Heading fontSize="xx-large" my={35}>
                    Ласкаво просимо в Snapster
                </Heading>
                {!showSecondForm ?
                    <Box >
                        <Text fontSize={'large'} my={15}>Для реєстрації введіть ваш username, пошту та пароль</Text>
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleRegister}
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
                                            pl={10}
                                            my={12}
                                            fontSize={'large'}
                                        />
                                        <ErrorMessage name="username" component={Text} color={"red"} />
                                    </FormControl>
                                    <FormControl>
                                        <Field
                                            as={Input}
                                            name="email"
                                            w="305px"
                                            h="43px"
                                            bg="#333"
                                            borderRadius="8px"
                                            placeholder="Введіть email"
                                            border={'0px'}
                                            pl={10}
                                            my={12}
                                            fontSize={'large'}
                                        />
                                        <ErrorMessage name="email" component={Text} color={"red"} />
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
                                            pl={10}
                                            my={12}
                                            fontSize={'large'}
                                            type="password"
                                        />
                                        <ErrorMessage name="password" component={Text} color="red" />
                                    </FormControl>
                                    <Button
                                        w="305px"
                                        h="43px"
                                        bg="#4BB34B"
                                        pl={10}
                                        my={12}
                                        borderRadius="8px"
                                        border={'0px'}
                                        fontSize={'large'}
                                        fontWeight={'bold'}
                                        color={'white'}
                                        cursor={'pointer'}
                                        colorScheme="blue"
                                        type="submit"
                                        disabled={formik.isSubmitting}
                                    >
                                        {isLoading ? "Завантаження..." : "Продовжити"}
                                    </Button>
                                    {error && (
                                        <Box mt={4} color="red.500">
                                            Error: {JSON.stringify(error)}
                                        </Box>
                                    )}
                                </Form>
                            )}
                        </Formik>
                    </Box>
                    : <Box >
                        <Text fontSize={'large'} my={15}>Будь ласка, введіть ім'я та прізвище</Text>
                        <Formik
                            initialValues={initial_secons}
                            validationSchema={secondValidationSchema}
                            onSubmit={handleSecondFormSubmit}
                        >
                            {(formik) => (
                                <Form>
                                    <FormControl>
                                        <Field
                                            as={Input}
                                            name="fistName"
                                            w="305px"
                                            h="43px"
                                            bg="#333"
                                            borderRadius="8px"
                                            placeholder="Введіть ваше ім'я"
                                            border={'0px'}
                                            pl={10}
                                            my={12}
                                            fontSize={'large'}
                                        />
                                        <ErrorMessage name="fistName" component={Text} color={"red"} />
                                    </FormControl>

                                    <FormControl mt={4}>
                                        <Field
                                            as={Input}
                                            name="secondName"
                                            w="305px"
                                            h="43px"
                                            bg="#333"
                                            borderRadius="8px"
                                            placeholder="Введіть ваше прізвище"
                                            border={'0px'}
                                            pl={10}
                                            my={12}
                                            fontSize={'large'}
                                        />
                                        <ErrorMessage name="secondName" component={Text} color="red" />
                                    </FormControl>
                                    <Button
                                        w="305px"
                                        h="43px"
                                        bg="#4BB34B"
                                        pl={10}
                                        my={12}
                                        borderRadius="8px"
                                        border={'0px'}
                                        fontSize={'large'}
                                        fontWeight={'bold'}
                                        color={'white'}
                                        cursor={'pointer'}
                                        colorScheme="blue"
                                        type="submit"
                                        disabled={formik.isSubmitting}
                                    >
                                        {isLoading ? "Завантаження..." : "Зареєструватись!"}
                                    </Button>
                                    {error && (
                                        <Box mt={4} color="red.500">
                                            Error: {JSON.stringify(error)}
                                        </Box>
                                    )}
                                </Form>
                            )}
                        </Formik>
                        <Text maxW="80%" mx={'auto'}>Натискаючи Натискаючи кнопку “Продовжити!” ви приймаєте <Link href='#'>Умови</Link>  </Text>
                    </Box>
                }




            </Box>
            <Box my="auto"
                bg="#222"
                rounded="15"
                m='30' p='30'>
                <Text mb='15' fontSize={'large'} textAlign={'center'}>Вже маєш обліковий запис в Snapster?</Text>
                <Link href={'/login'} >
                    <Box backgroundColor={'#4bb34b'} borderRadius={'8'} p={'15'} w={"305px"} >
                        <Text w={'100%'} fontWeight={'bold'} textAlign={'center'} color={'white'} textDecoration={'none'} cursor={'pointer'}
                        >
                            Ввійти
                        </Text>
                    </Box>
                </Link>
            </Box>
        </Flex>
    )
}

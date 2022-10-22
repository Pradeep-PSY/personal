import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
    SignupApi,
    signupwithoutReferal,
    signupwithReferal,
    verifyReferal,
} from '../actions/action';
// import { SaveData } from '../hoc/localStorage';

const Signup = () => {
    const dispatch = useDispatch();
    const toast = useToast();
    const { msg, codevalid, signupmsg } = useSelector(state => state.auth);

    const navigate = useNavigate();
    const [referal, setReferal] = useState('');
    const [signup, setSignup] = useState({
        password: '',
        mobile: '',
        username: '',
        name: '',
    });

    const handleChange = e => {
        let { name, value } = e.target;
        setSignup({
            ...signup,
            [name]: value,
        });
    };
    const handleSignup = () => {
        // console.log(codevalid, 'codevalid');

        if (codevalid) {
            // console.log('with', signupmsg);
            dispatch(signupwithReferal(referal, signup));
        } else {
            // console.log('without');
            dispatch(signupwithoutReferal(signup));
        }
        // dispatch(SignupApi(signup))
        // if(signuped){
        //     toast({
        //         title: `${signupmsg}`,
        //        position:"top",
        //         status: 'success',
        //         duration: 3000,
        //         isClosable: true,
        //       })
        //      
        //   }
    };

    const handleVerify = () => {
        // console.log(referal);
        dispatch(verifyReferal({ referalcode: referal }));
    };

    useEffect(() => {
        if (signupmsg) {
            toast({
                title: `${signupmsg}`,
                position: 'top',
                status: 'success',
                duration: 3000,
                isClosable: true,
            });
        }
       
    }, [signupmsg]);

    return (
        <>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}
            >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Sign Up</Heading>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}
                    >
                        <Stack spacing={4}>
                            <FormControl id="name">
                                <FormLabel>Name</FormLabel>
                                <Input
                                    type="text"
                                    name="name"
                                    value={signup.name}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl id="mobile">
                                <FormLabel>Mobile</FormLabel>
                                <Input
                                    type="number"
                                    name="mobile"
                                    value={signup.mobile}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl id="username">
                                <FormLabel>Username</FormLabel>
                                <Input
                                    type="text"
                                    name="username"
                                    value={signup.username}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input
                                    type="password"
                                    name="password"
                                    value={signup.password}
                                    onChange={handleChange}
                                />
                            </FormControl>
                            <FormControl id="referalcode">
                                <FormLabel>ReferralCode</FormLabel>
                                <Flex>
                                    <Input
                                        type="text"
                                        name="referalcode"
                                        value={referal}
                                        onChange={e => setReferal(e.target.value)}
                                    />
                                    <Button colorScheme={'green'} ml="2" onClick={handleVerify}>
                                        Verify
                                    </Button>
                                </Flex>
                                {msg ? <Text>{msg}</Text> : ''}
                            </FormControl>

                            <Stack spacing={10}>
                                <Button
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }}
                                    onClick={handleSignup}
                                >
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
};

export default Signup;

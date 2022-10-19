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
import { SignupApi } from '../actions/action';
// import { SaveData } from '../hoc/localStorage';

const Signup = () => {
    const dispatch = useDispatch();
    const toast = useToast();
    const {signuped,signupmsg} = useSelector(state=>state.auth);

    const navigate = useNavigate();
    const [signup, setSignup] = useState({
        password: '',
        email: '',
        name:''
    });

    const handleChange = e => {
        let { name, value } = e.target;
        setSignup({
            ...signup,
            [name]: value,
        });
    };
    const handleSignup = () => {
        // console.log(signup);
        dispatch(SignupApi(signup))
        if(signuped){
            toast({
                title: `${signupmsg}`,
               position:"top",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
              navigate('/login')
          }
        
        
       

    };

    

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
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input
                                    type="text"
                                    name="email"
                                    value={signup.email}
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

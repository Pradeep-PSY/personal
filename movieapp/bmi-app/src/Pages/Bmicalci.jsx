import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBmi } from '../actions/action';

const Bmicalci = () => {
    const [wgt,setWgt] = useState(0);
    const [hgt,setHgt] = useState(0);
    const dispatch = useDispatch();
    const {bmivalue} = useSelector(state=>state.app)

    const handleCalculate = () => {
        console.log(hgt,wgt)
        dispatch(getBmi({height:hgt,weight:wgt}))
    }
    return (
        <Box m="3" textAlign={'center'}>
            <Flex justify="center">
                <Box m='2'>
                    <Text>Weight</Text>
                    <Input type="number" placeholder="Enter the Weight" width="auto" onChange={(e)=>setWgt(e.target.value)} />
                </Box>
                <Box m='2'>
                    <Text>Height</Text>
                    <Input type="number" placeholder="in cm" width="auto"  onChange={(e)=>setHgt(e.target.value)} />
                </Box>
            </Flex>
            <Button colorScheme={'teal'} onClick={handleCalculate}>
                 Calculate
            </Button>

            <Text m='3'>BMI Value: {bmivalue}</Text>
        </Box>
    );
};

export default Bmicalci;

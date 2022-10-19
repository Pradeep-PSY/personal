import { Box, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getHistory } from '../actions/action';

const History = () => {
    const dispatch = useDispatch();
    const {hist} = useSelector(state=>state.app);
    useEffect(() => {
    if(hist.length==0){
        dispatch(getHistory())
    }
    }, [hist.length])
    
  return (
    <Box m='2' textAlign={'center'}>
        <Text>Previous BMI Values</Text>
        {
            hist.length>0 && hist.map((el)=>(
                <Text m='2'>
                    {el.bmivalue}
                </Text>
            ))
        }
    </Box>
  )
}

export default History
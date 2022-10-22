import { Box, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../actions/action'

const Details = () => {

    const dispatch = useDispatch();
    const {data,other} = useSelector(state=>state.auth)

    // console.log(data,other)

    useEffect(()=>{
        dispatch(getDetails())
    },[])
  return (
   <Box textAlign={'center'}>
    <Box m='2'>

    <Text m='2' fontSize='5xl'>ReferalCode : {other.referalcode}</Text>
    <Text m='2' fontSize='5xl'>Points : {other.point}</Text>
    </Box>

    {
        data?.length==0?(
            <Text fontSize='4xl'>No Referal till now</Text>
        ):(
            
                data.map((el)=>{
                    return <Text fontSize='3xl' key={el}>Person_you_refered : {el}</Text>
                })
            
        )
    }
   
   </Box>
  )
}

export default Details
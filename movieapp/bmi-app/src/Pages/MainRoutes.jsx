import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bmicalci from './Bmicalci'
import History from './History'
import Login from './Login'
import Signup from './Signup'

const MainRoutes = () => {
  return (
    <Routes>
        
        <Route path='/' element={<Box textAlign={'center'} m='4'>BMI CAlCULATOR</Box>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/bmicalci' element={<Bmicalci />} />
        <Route path='/history' element={<History />} />
    </Routes>
  )
}

export default MainRoutes
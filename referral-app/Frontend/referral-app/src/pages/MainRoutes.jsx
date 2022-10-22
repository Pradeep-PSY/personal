import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Details from './Details'
import Login from './Login'
import Signup from './Signup'

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<div>Home</div>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/details' element={<Details />} />
        </Routes>
    )
}

export default MainRoutes
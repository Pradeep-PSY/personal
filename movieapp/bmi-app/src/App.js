import React from 'react';
import {
  ChakraProvider,
  
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Navbar from './Components/Navbar';
import MainRoutes from './Pages/MainRoutes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <MainRoutes />
    </ChakraProvider>
  );
}

export default App;

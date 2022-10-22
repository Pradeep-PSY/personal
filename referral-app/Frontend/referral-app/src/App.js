import React from 'react';
import {
  ChakraProvider,

  theme,
} from '@chakra-ui/react';

import MainRoutes from './pages/MainRoutes';
import Navbar from './components/Navbar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <MainRoutes />
    </ChakraProvider>
  );
}

export default App;

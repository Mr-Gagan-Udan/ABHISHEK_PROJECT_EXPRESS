import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import MyApp from './MyApp';

function App() {
  return (
    <ChakraProvider>
      <MyApp />
    </ChakraProvider>
  );
}

export default App;

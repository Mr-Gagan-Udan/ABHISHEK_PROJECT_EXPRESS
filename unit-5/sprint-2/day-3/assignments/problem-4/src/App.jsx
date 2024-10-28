import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import Card from "./components/card"

const App = () => {
  return (
    <ChakraProvider>
      <Box p={5}>
        <Card />
      </Box>
    </ChakraProvider>
  );
};

export default App;

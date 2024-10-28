// src/App.js
import React from 'react';
import { ChakraProvider, Box, Container } from '@chakra-ui/react';
import HomePage from './components/HomePage';

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.md">
        <Box p={4}>
          <HomePage />
        </Box>
      </Container>
    </ChakraProvider>
  );
}

export default App;

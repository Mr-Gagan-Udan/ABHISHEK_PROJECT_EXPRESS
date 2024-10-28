// src/App.js
import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <ChakraProvider>
      <Container maxW="container.sm" p={5}>
        <ProfileCard />
      </Container>
    </ChakraProvider>
  );
}

export default App;

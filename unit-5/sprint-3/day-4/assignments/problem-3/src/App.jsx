// src/App.js
import React from "react";
import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import ResponsiveComponent from "./components/ResponsiveComponent";
import theme from "./theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg" p={5}>
        <Heading as="h1" size="xl" mb={5} textAlign="center">
          Our Clients Speak
        </Heading>
        <ResponsiveComponent />
      </Container>
    </ChakraProvider>
  );
}

export default App;

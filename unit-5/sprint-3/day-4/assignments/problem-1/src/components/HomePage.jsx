// src/components/HomePage.jsx
import React, { useState } from 'react';
import { Heading, Button, Input, VStack, Box, Text } from '@chakra-ui/react';

const HomePage = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <VStack spacing={6} align="stretch">
      <Heading size="lg" textAlign="center" color="teal.500">
        My Chakra UI Application
      </Heading>

      <Input
        placeholder="Enter something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        focusBorderColor="teal.400"
      />

      <Button colorScheme="teal" onClick={handleSubmit}>
        Submit
      </Button>

      {submittedValue && (
        <Box
          border="1px"
          borderRadius="md"
          p={4}
          borderColor="teal.200"
          bg="teal.50"
        >
          <Text fontSize="lg" color="teal.800">
            You submitted: {submittedValue}
          </Text>
        </Box>
      )}
    </VStack>
  );
};

export default HomePage;

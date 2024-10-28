import React, { useState } from 'react';
import { Heading, Button, Input, Box, Text } from '@chakra-ui/react';

const MyApp = () => {
  const [inputValue, setInputValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleSubmit = () => {
    setSubmittedValue(inputValue);
  };

  return (
    <Box p={5} maxWidth="500px" mx="auto">
      <Heading as="h1" mb={6} textAlign="center">
        My Chakra UI App
      </Heading>

      <Box mb={4}>
        <Input
          placeholder="Enter something"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          mb={4}
        />
        <Button colorScheme="teal" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>

      {submittedValue && (
        <Box p={4} border="1px" borderRadius="md" borderColor="gray.200" mt={6}>
          <Text fontSize="lg" fontWeight="bold">
            Submitted:
          </Text>
          <Text mt={2}>{submittedValue}</Text>
        </Box>
      )}
    </Box>
  );
};

export default MyApp;

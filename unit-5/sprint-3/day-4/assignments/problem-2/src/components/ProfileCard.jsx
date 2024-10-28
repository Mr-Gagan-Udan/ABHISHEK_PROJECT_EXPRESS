// src/components/ProfileCard.jsx
import React from 'react';
import { Box, Heading, Text, Image, Button, VStack } from '@chakra-ui/react';

const ProfileCard = () => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      maxW="sm"
      mx="auto"
      p={4}
      bg="white"
      transition="transform 0.2s"
      _hover={{ transform: 'scale(1.05)' }} // Scale effect on hover
    >
      <VStack spacing={4} align="center">
        <Image
          borderRadius="full"
          boxSize="100px"
          src="https://via.placeholder.com/100" // Replace with actual image URL
          alt="Profile Picture"
          border="2px solid teal"
        />
        <Heading as="h2" size="md" color="teal.500">
          Lindsey James
        </Heading>
        <Text fontSize="sm" color="gray.600">
          @lindsey_jam3s
        </Text>
        <Text textAlign="center" color="gray.500">
          Actress, musician, songwriter and artist. PM for work inquiries or
          <br />
          #tag me in your posts
        </Text>
        <Text fontSize="sm" color="gray.500" fontWeight="bold">
          #ART #PHOTOGRAPHY #MUSIC
        </Text>
        <Button colorScheme="teal" variant="solid" width="full">
          Follow
        </Button>
        <Button variant="outline" width="full">
          Message
        </Button>
      </VStack>
    </Box>
  );
};

export default ProfileCard;

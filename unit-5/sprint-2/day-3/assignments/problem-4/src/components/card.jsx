import { Box, Heading, Image, Text } from '@chakra-ui/react';

const Card = () => {
  return (
    <Box
      maxW={{ base: "100%", sm: "320px" }}  // Responsive width
      borderWidth="1px" 
      borderRadius="lg" 
      overflow="hidden" 
      boxShadow="xl"   // 3D shadow effect
      p={5}
      mx="auto"
    >
      <Heading fontSize="xl" mb={4} textAlign="center">
        Card Title
      </Heading>
      
      <Image
        src="https://via.placeholder.com/150" // Placeholder image
        alt="Card image"
        mx="auto"
        borderRadius="full"
        boxSize="150px"
        mb={4}
      />
      
      <Text fontSize="md" textAlign="center">
        This is a description for the card component. It has a rounded image, shadow, and custom styling.
      </Text>
    </Box>
  );
};

export default Card;

import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

function CardComponent({ title }) {
  return (
    <Box
      bg="white"
      shadow="lg"
      borderRadius="lg"
      p={5}
      maxW="300px"
      m={3}
      flex="1"
    >
      <Heading as="h3" size="lg" mb={2}>
        {title}
      </Heading>
      <Text mb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
        imperdiet nibh lectus feugiat nunc sem.
      </Text>
      <Button colorScheme="teal" mt={2}>
        Read More
      </Button>
    </Box>
  );
}

export default CardComponent;

import React from "react";
import { Box, Flex, Heading, Text, Button, useBreakpointValue } from "@chakra-ui/react";
import CardComponent from "./CardComponent";

function ResponsiveComponent() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction={isMobile ? "column" : "row"}
      align="center"
      justify="space-around"
      wrap="wrap"
    >
      <CardComponent title="Efficient Collaborating" />
      <CardComponent title="Intuitive Design" />
      <CardComponent title="Mindblowing Service" />
      <Button colorScheme="blue" mt={isMobile ? 4 : 0}>
        Learn More
      </Button>
    </Flex>
  );
}

export default ResponsiveComponent;

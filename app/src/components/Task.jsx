// src/components/Task.jsx
import { Box, Text, Heading, HStack, Badge, Checkbox } from "@chakra-ui/react";

const Task = ({ title, description, date, bgColor }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      p={4}
      width="100%"
      bg={bgColor}
    >
      <HStack justifyContent="space-between">
        <HStack>
          <Checkbox
            borderColor="gray.400" // Cambia el color del borde del checkbox
            boxShadow="md" // Agrega sombra al checkbox
          />
          <Heading as="h3" size="md">
            {title}
          </Heading>
        </HStack>
        <Badge colorScheme="gray" fontSize="sm">
          {date}
        </Badge>
      </HStack>
      <Text mt={2} textAlign="start">{description}</Text>
    </Box>
  );
};

export default Task;

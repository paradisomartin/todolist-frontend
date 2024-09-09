// src/components/Footer.jsx
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      width="100%"
      bg="#E6FFFA"
      p={4}
      display="flex"
      justifyContent="center"
      alignItems="center"
      boxShadow="md"
      mt={4}
    >
      <Text fontSize="sm" textAlign="center">
        Made with love By Martin Paradiso for Invera ❤️
      </Text>
    </Box>
  );
};

export default Footer;

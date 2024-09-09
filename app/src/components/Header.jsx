// src/components/Header.jsx
import { Box, Heading, Text, Grid, GridItem } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box
      as="header"
      width="100%"
      bg="#FFEBE6"
      p={4}
      boxShadow="md"
    >
      <Grid
        templateColumns="1fr auto 1fr"
        alignItems="center"
        width="100%"
      >
        <GridItem>
          <Text fontSize="md" ml={4}>
            Buenos Aires, Argentina
          </Text>
        </GridItem>
        <GridItem textAlign="center">
          <Heading as="h1" size="lg">
            The Todo List
          </Heading>
        </GridItem>
        <GridItem></GridItem> {/* Espacio vacío a la derecha */}
      </Grid>
    </Box>
  );
};

export default Header;

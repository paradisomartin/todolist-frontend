// src/components/Header.jsx
import { Box, Heading, Text, Grid, GridItem, Button } from "@chakra-ui/react";
import { useAuth } from "../context/authContext";

const Header = () => {
  const { logout } = useAuth();

  return (
    <Box as="header" width="100%" bg="#FFEBE6" p={4} boxShadow="md">
      <Grid templateColumns="1fr auto 1fr" alignItems="center" width="100%">
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
        <GridItem textAlign="right">
          <Button onClick={logout} colorScheme="red" size="sm">
            Logout
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Header;

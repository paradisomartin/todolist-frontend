import { Box } from "@chakra-ui/react";
import { useAuth } from "../context/authContext";
import Header from "./Header";
import Footer from "./Footer";
import TasksList from "./TasksList";
import Login from "./Login";

function Home() {
  const { token } = useAuth();

  if (!token) {
    return <Login />;
  }

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box flex="1">
        <TasksList />
      </Box>
      <Footer />
    </Box>
  );
}

export default Home;

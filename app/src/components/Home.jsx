// src/App.jsx
import { Box } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";
import TasksList from "./TasksList";

function App() {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <TasksList />
      <Footer />
    </Box>
  );
}

export default App;

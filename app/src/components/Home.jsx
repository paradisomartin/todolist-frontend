// src/components/Home.jsx
import { Box } from "@chakra-ui/react";
import TasksList from "./TaskList";

const Home = () => {
  return (
    <Box textAlign="center" py={10} px={6}>
      <TasksList />
    </Box>
  );
};

export default Home;

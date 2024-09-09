// src/components/TasksList.jsx
import { Box, VStack } from "@chakra-ui/react";
import Task from "./Task"; // Importamos el componente Task

// Un array de ejemplo con tareas
const tasks = [
  {
    id: 1,
    title: "Complete frontend feature",
    description: "Implement the user authentication flow.",
    date: "2024-09-08",
  },
  {
    id: 2,
    title: "Backend API integration",
    description: "Connect the frontend with the new API endpoints.",
    date: "2024-09-10",
  },
  {
    id: 3,
    title: "UI Enhancements",
    description: "Refactor components to use Chakra UI.",
    date: "2024-09-12",
  },
];

const TasksList = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" p={4}>
      <VStack spacing={6} align="stretch" width="60%">
        {tasks.map((task) => (
          <Task // Usamos el componente Task
            key={task.id}
            title={task.title}
            description={task.description}
            date={task.date}
          />
        ))}
      </VStack>
    </Box>
  );
};

export default TasksList;

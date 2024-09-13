import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  VStack,
  Text,
  Spinner,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import Task from "./Task";
import TaskForm from "./TaskForm";
import api from "../utils/api";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const toast = useToast();

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const response = await api.get("/tasks/");
      setTasks(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setError(
        "Error al cargar las tareas. Por favor, intenta de nuevo más tarde.",
      );
      setIsLoading(false);
      toast({
        title: "Error",
        description: "No se pudieron cargar las tareas",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTask(taskToEdit);
    setIsModalOpen(true);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}/`);
      fetchTasks();
      toast({
        title: "Tarea eliminada",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error deleting task:", error);
      toast({
        title: "Error",
        description: "No se pudo eliminar la tarea",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingTask(null);
  };

  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Text color="red.500">{error}</Text>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Grid templateColumns="repeat(12, 1fr)" gap={6}>
        <VStack spacing={6} align="stretch" gridColumn="span 6">
          {tasks.length === 0 ? (
            <Text>No hay tareas disponibles.</Text>
          ) : (
            tasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                date={task.date}
                is_completed={task.is_completed}
                tags={task.tags}
                onUpdate={fetchTasks}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
              />
            ))
          )}
        </VStack>
        <Box gridColumn="span 6">
          <TaskForm onTaskAdded={fetchTasks} />
        </Box>
      </Grid>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {editingTask ? "Editar Tarea" : "Crear Tarea"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TaskForm
              task={editingTask}
              onTaskUpdated={fetchTasks}
              onClose={handleCloseModal}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default TasksList;

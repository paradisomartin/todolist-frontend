import React, { useState, useEffect } from 'react';
import { Box, VStack, Text, Spinner, useToast } from '@chakra-ui/react';
import Task from './Task';
import api from '../utils/api';  // Asegúrate de que la ruta sea correcta

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        setIsLoading(true);
        const response = await api.get('/tasks/');  // Asumiendo que este es el endpoint correcto
        setTasks(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
        setError('Error al cargar las tareas. Por favor, intenta de nuevo más tarde.');
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

    fetchTasks();
  }, [toast]);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Text color="red.500">{error}</Text>
      </Box>
    );
  }

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" p={4}>
      <VStack spacing={6} align="stretch" width="60%">
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
              completed={task.completed}
            />
          ))
        )}
      </VStack>
    </Box>
  );
};

export default TasksList;
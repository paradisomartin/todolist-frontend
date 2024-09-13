// src/components/TaskForm.jsx
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Input,
  Textarea,
  VStack,
  FormLabel,
} from "@chakra-ui/react";
import api from "../utils/api";

const TaskForm = ({ task, onTaskAdded, onTaskUpdated, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setTags(task.tags ? task.tags.join(", ") : "");
    }
  }, [task]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const tagsArray = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    try {
      const taskData = { title, description, tags: tagsArray };

      if (task) {
        await api.put(`/tasks/${task.id}/`, taskData);
        if (onTaskUpdated) onTaskUpdated();
      } else {
        await api.post("/tasks/", taskData);
        if (onTaskAdded) onTaskAdded();
      }

      setTitle("");
      setDescription("");
      setTags("");
      if (onClose) onClose();
    } catch (error) {
      console.error("Error saving task:", error);
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <VStack spacing={4}>
        <FormLabel htmlFor="title">Título</FormLabel>
        <Input
          id="title"
          placeholder="Título de la tarea"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <FormLabel htmlFor="description">Descripción</FormLabel>
        <Textarea
          id="description"
          placeholder="Descripción de la tarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <FormLabel htmlFor="tags">Etiquetas (separadas por comas)</FormLabel>
        <Input
          id="tags"
          placeholder="Etiqueta1, Etiqueta2, Etiqueta3"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <Button type="submit" colorScheme="blue" width="100%">
          {task ? "Actualizar Tarea" : "Crear Tarea"}
        </Button>
      </VStack>
    </Box>
  );
};

export default TaskForm;

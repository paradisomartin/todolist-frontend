import { useState } from "react";
import {
  Box,
  Text,
  Heading,
  HStack,
  Badge,
  Checkbox,
  VStack,
  Tag,
  Wrap,
  WrapItem,
  Icon,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import api from "../utils/api";
import TaskActions from "./TaskActions";

const Task = ({
  id,
  title,
  description,
  date,
  is_completed,
  tags,
  onUpdate,
  onEdit,
  onDelete,
}) => {
  const [isCompleted, setIsCompleted] = useState(is_completed);

  const handleToggleCompleted = async () => {
    try {
      await api.post(`/tasks/${id}/toggle_completed/`);
      setIsCompleted(!isCompleted);
      if (onUpdate) onUpdate();
    } catch (error) {
      console.error("Error toggling task completion:", error);
    }
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      boxShadow="md"
      p={4}
      width="100%"
      bg={isCompleted ? "#E6FFE6" : "#FFEBE6"}
    >
      <HStack justifyContent="space-between" alignItems="flex-start">
        <HStack alignItems="flex-start">
          <Checkbox
            isChecked={isCompleted}
            onChange={handleToggleCompleted}
            borderColor={isCompleted ? "green.500" : "gray.400"}
            bg={isCompleted ? "green.100" : "white"}
            icon={<Icon as={CheckIcon} color="green.500" />}
            size="lg"
          >
            {isCompleted && <Icon as={CheckIcon} color="green.500" />}
          </Checkbox>
          <Box>
            <Heading
              as="h3"
              size="md"
              textDecoration={isCompleted ? "line-through" : "none"}
            >
              {title}
            </Heading>
            <Text mt={2} textDecoration={isCompleted ? "line-through" : "none"}>
              {description}
            </Text>
            <Wrap mt={2}>
              {tags &&
                tags.map((tag, index) => (
                  <WrapItem key={index}>
                    <Tag size="sm" variant="subtle" colorScheme="cyan">
                      {tag}
                    </Tag>
                  </WrapItem>
                ))}
            </Wrap>
          </Box>
        </HStack>
        <VStack align="end" spacing={2}>
          <Badge colorScheme="gray" fontSize="sm">
            {date}
          </Badge>
          <TaskActions
            onEdit={() => onEdit(id)}
            onDelete={() => onDelete(id)}
          />
        </VStack>
      </HStack>
    </Box>
  );
};

export default Task;

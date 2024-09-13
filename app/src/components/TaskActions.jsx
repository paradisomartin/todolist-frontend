// src/components/TaskActions.jsx
import { HStack, IconButton } from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";

const TaskActions = ({ onEdit, onDelete }) => {
  return (
    <HStack spacing={2}>
      <IconButton
        icon={<EditIcon />}
        onClick={onEdit}
        aria-label="Edit task"
        size="sm"
      />
      <IconButton
        icon={<DeleteIcon />}
        onClick={onDelete}
        aria-label="Delete task"
        size="sm"
        colorScheme="red"
      />
    </HStack>
  );
};

export default TaskActions;

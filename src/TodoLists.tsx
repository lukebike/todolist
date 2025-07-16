import TodoList from "./TodoList";
import { Box, Typography } from "@mui/material";
import { useListContext } from "./ListContext";

export default function TodoLists() {
  const { lists, selected, removeList } = useListContext();

  return (
    <Box>
      <Box>
        {lists.length === 0 ? (
          <Typography variant="h4" color="error" textAlign="center">
            No lists found, create a new list!
          </Typography>
        ) : (
          lists
            .filter((list) => selected === list.id)
            .map((list) => (
              <TodoList
                key={list.id}
                listId={list.id}
                name={list.name}
                removeList={removeList}
              />
            ))
        )}
      </Box>
    </Box>
  );
}

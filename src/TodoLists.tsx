import TodoList from "./TodoList";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useListContext } from "./ListContext";

export default function TodoLists() {
  const { lists, selected, listName, setListName, addList, removeList } =
    useListContext();

  return (
    <Box>
      <Box>
        {lists.length === 0 ? (
          <Typography variant="h4" color="error" textAlign="center">
            No lists found, create a new list below!
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
      <Box sx={{ display: "flex", mt: 2, justifyContent: "center" }}>
        <TextField
          size="small"
          sx={{ flex: "0 0 40%" }}
          label="List Name"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
        <Button
          onClick={addList}
          variant="contained"
          sx={{
            ml: 2,
            color: "white",
            "&:hover": {
              color: "black",
            },
          }}
        >
          Add New List
        </Button>
      </Box>
    </Box>
  );
}

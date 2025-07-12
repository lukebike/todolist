import { useEffect, useState } from "react";
import TodoList from "./TodoList";
import { Box, Button, TextField, Typography } from "@mui/material";

type ListData = {
  id: number;
  name: string;
};

const LISTS_KEY = "todolists-names";

export default function TodoLists() {
  const [lists, setLists] = useState<ListData[]>(() => {
    const data = localStorage.getItem(LISTS_KEY);
    return data ? JSON.parse(data) : [{ id: 0, name: "My First List" }];
  });

  useEffect(() => {
    localStorage.setItem(LISTS_KEY, JSON.stringify(lists));
  }, [lists]);

  const [listName, setListName] = useState("");

  const addList = () => {
    if (!listName) return alert("List name can not be empty");
    setLists((prev) => [...prev, { id: prev.length, name: listName }]);
    setListName("");
  };

  const removeList = (id: number) => {
    setLists((prev) => {
      return prev.filter((list) => list.id !== id);
    });
  };

  return (
    <Box>
      <Box>
        {!lists.length && (
          <Typography variant="h4" color="error">
            no lists found, create a new list.
          </Typography>
        )}
        {lists.map((list, idx) => (
          <TodoList
            key={list.id}
            listId={list.id}
            name={list.name}
            removeList={removeList}
          />
        ))}
      </Box>
      <Box sx={{ display: "flex", mt: 2, justifyContent: "center" }}>
        <TextField
          size="small"
          sx={{ flex: "0 0 40%" }}
          label="List Name"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
        <Button onClick={addList} variant="contained" sx={{ ml: 2 }}>
          Add New List
        </Button>
      </Box>
    </Box>
  );
}

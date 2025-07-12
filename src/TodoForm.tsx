import { IconButton, InputAdornment, ListItem, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";

export default function TodoForm({ addTodo }) {
  const theme = useTheme();
  const [text, setText] = useState("");
  interface ChangeEvent {
    target: { value: string };
  }

  const handleChange = (evt: ChangeEvent) => {
    setText(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (text) {
      addTodo(text);
      setText("");
    } else {
      alert("Todo cannot be empty");
    }
  };
  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Add Todo"
          variant="outlined"
          color="error"
          onChange={handleChange}
          value={text}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="create todo" type="submit">
                    <CreateIcon />
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />
      </form>
    </ListItem>
  );
}

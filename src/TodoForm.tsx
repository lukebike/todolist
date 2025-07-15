import { IconButton, InputAdornment, ListItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";

type TodoFormProps = {
  addTodo: (todo: string) => void;
};

export default function TodoForm({ addTodo }: TodoFormProps) {
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
                    <AddIcon />
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

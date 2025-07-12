import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useTheme } from "@mui/material";

type TodoTypes = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoItemProps = {
  todo: TodoTypes;
  remove: (id: number) => void;
  toggle: (id: number) => void;
};

export default function TodoItem({ todo, remove, toggle }: TodoItemProps) {
  const theme = useTheme();
  const isCompleted = todo.completed;
  const labelId = `checkbox-list-value-${todo.id}`;
  const removeTodo = () => {
    remove(todo.id);
  };
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
          <DeleteForeverIcon
            sx={{
              color: theme.palette.success.main,
              "&:hover": {
                color: theme.palette.error.main,
              },
            }}
          />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple
            onChange={() => toggle(todo.id)}
            inputProps={{ "aria-labelledby": labelId }}
          />
        </ListItemIcon>
        <ListItemText
          id={labelId}
          sx={{
            color: theme.palette.primary.main,
            textDecoration: isCompleted ? "line-through" : "none",
          }}
          primary={todo.text}
        />
      </ListItemButton>
    </ListItem>
  );
}

export type { TodoTypes };

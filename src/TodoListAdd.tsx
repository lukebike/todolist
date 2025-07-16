import { Box, Button, TextField, Typography } from "@mui/material";
import { useListContext } from "./ListContext";
import { useNavigate } from "react-router-dom";

export default function TodoListAdd() {
  const navigate = useNavigate();

  const { listName, setListName, addList } = useListContext();
  const handleAddList = () => {
    const success = addList(); // Assuming addList returns true/false
    if (success) {
      navigate("/lists");
    }
  };
  return (
    <Box>
      <Typography variant="h4" textAlign="center" color="primary">
        Add new list below!
      </Typography>
      <Box sx={{ display: "flex", mt: 2, justifyContent: "center" }}>
        <TextField
          size="small"
          sx={{ flex: "0 0 40%" }}
          label="List Name"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
        <Button
          onClick={handleAddList}
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

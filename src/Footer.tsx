import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
        mt: 5,
      }}
    >
      {" "}
      © {new Date().getFullYear()} Luke Salem — Full-Stack Developer
    </Box>
  );
}

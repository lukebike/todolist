import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FormControl, InputLabel, Menu, MenuItem, Select } from "@mui/material";
import { useListContext } from "./ListContext";

interface ResponsiveAppBarProps {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
  window?: () => Window;
}

const drawerWidth = 240;

export default function ResponsiveAppBar({
  window,
  mode,
  setMode,
}: ResponsiveAppBarProps) {
  const { lists, selected, setSelected } = useListContext();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();

  const drawer = (
    <Box sx={{ textAlign: "center", width: drawerWidth }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Planify
      </Typography>
      <Divider />
      <List sx={{ px: 2 }}>
        {lists.length > 0 && (
          <ListItem disablePadding sx={{ mb: 1, mt: 2 }}>
            <Box sx={{ width: "100%", px: 2 }}>
              <FormControl fullWidth size="small">
                <InputLabel>Select List</InputLabel>
                <Select
                  value={selected || ""}
                  label="Select List"
                  onChange={(e) => {
                    setSelected(Number(e.target.value));
                    handleDrawerToggle();
                  }}
                >
                  {lists.map((list) => (
                    <MenuItem key={list.id} value={list.id}>
                      {list.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </ListItem>
        )}
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => {
              setMode(mode === "dark" ? "light" : "dark");
              handleDrawerToggle();
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                width: "100%",
              }}
            >
              {mode === "dark" ? (
                <LightModeIcon sx={{ fontSize: 20 }} />
              ) : (
                <DarkModeIcon sx={{ fontSize: 20 }} />
              )}
              <Typography variant="body2" sx={{ textTransform: "capitalize" }}>
                {mode === "dark" ? "Switch to Light" : "Switch to Dark"}
              </Typography>
            </Box>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: theme.palette.warning.main }}
      >
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Planify
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            <IconButton size="large" color="inherit" onClick={handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              open={open}
              onClose={handleMenuClose}
              sx={{
                "& .MuiPaper-root": {
                  animation: "slideIn 0.2s ease-out",
                },
              }}
              slotProps={{
                paper: {
                  sx: {
                    mt: 1.5,
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    borderRadius: 2,
                  },
                },
                transition: {
                  timeout: 300,
                },
              }}
            >
              {lists.length > 0 && (
                <MenuItem
                  disableRipple
                  sx={{ "&:hover": { backgroundColor: "transparent" } }}
                >
                  <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                    <InputLabel sx={{ color: "inherit" }}>
                      Select List
                    </InputLabel>
                    <Select
                      value={selected || ""}
                      label="Select List"
                      onChange={(e) => setSelected(Number(e.target.value))}
                      onClick={(e) => e.stopPropagation()}
                      sx={{
                        color: "inherit",
                        "& .MuiSelect-icon": { color: "inherit" },
                        "& .MuiInput-underline:before": {
                          borderBottomColor: "rgba(0,0,0,0.2)",
                        },
                        "& .MuiInput-underline:hover:before": {
                          borderBottomColor: "rgba(0,0,0,0.4)",
                        },
                      }}
                    >
                      {lists.map((list) => (
                        <MenuItem key={list.id} value={list.id}>
                          {list.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </MenuItem>
              )}
              {lists.length > 0 && <Divider />}

              <MenuItem
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    width: "100%",
                  }}
                >
                  {mode === "dark" ? (
                    <LightModeIcon sx={{ fontSize: 20 }} />
                  ) : (
                    <DarkModeIcon sx={{ fontSize: 20 }} />
                  )}
                  <Typography
                    variant="body2"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {mode === "dark" ? "Switch to Light" : "Switch to Dark"}
                  </Typography>
                </Box>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              backgroundColor: theme.palette.warning.main,
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

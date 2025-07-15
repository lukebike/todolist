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
import Button from "@mui/material/Button";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu, MenuItem } from "@mui/material";

interface ResponsiveAppBarProps {
  mode: "light" | "dark";
  setMode: (mode: "light" | "dark") => void;
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar({
  window,
  mode,
  setMode,
}: ResponsiveAppBarProps) {
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
      <List>
        <ListItem>
          <ListItemButton
            onClick={() => {
              setMode(mode === "dark" ? "light" : "dark");
              handleDrawerToggle();
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 1,
                width: "100%",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" sx={{ textTransform: "lowercase" }}>
                {mode === "dark" ? "light mode" : "dark mode"}
              </Typography>
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
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
            >
              <MenuItem
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{ textTransform: "lowercase" }}
                  >
                    {mode === "dark" ? "light mode" : "dark mode"}
                  </Typography>
                  {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
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
            keepMounted: true, // Better open performance on mobile.
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

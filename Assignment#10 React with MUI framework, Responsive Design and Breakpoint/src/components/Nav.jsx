import React from "react";
import {AppBar,Box,Drawer,IconButton,Toolbar,Typography} from "@mui/material";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = ["Home", "About", "Contact"];

function Nav() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box >
      <AppBar position="static" sx={{ backgroundColor: "#20232a" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ color: "#FFF" }}>
            My Website
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: "block", md: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#fff" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
      >
        <Typography
          variant="h6"
          sx={{ p: 2, borderBottom: "1px solid #e5e5e5" }}
        >
          Menu
        </Typography>
        <Box sx={{ p: 2 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Link 1
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Link 2
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Link 3
          </Typography>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Nav;
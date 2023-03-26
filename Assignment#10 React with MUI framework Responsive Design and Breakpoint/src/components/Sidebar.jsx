import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WebIcon from "@mui/icons-material/Web";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const menuItems = [
  { label: "Homepage", icon: <HomeIcon /> },
  { label: "Pages", icon: <WebIcon /> },
  { label: "Groups", icon: <GroupIcon /> },
  { label: "Marketplace", icon: <StorefrontIcon /> },
  { label: "Friends", icon: <PeopleIcon /> },
  { label: "Settings", icon: <SettingsIcon /> },
  { label: "Profile", icon: <AccountCircleIcon /> },
];

const Sidebar = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" } }}>
      <Box display={"flex"} justifyContent={"flex-end"}>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.label}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;

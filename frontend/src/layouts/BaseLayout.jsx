import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Box,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LoupeOutlinedIcon from "@mui/icons-material/LoupeOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";


export default function BaseLayout({ children }) {
  const [anchorDropCadastros, setAnchorDropCadastros] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorDropCadastros(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorDropCadastros(null);
  };

  return (
    <Box display="flex" flexDirection="column">
      <AppBar
        component="header"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "24px",
          p: 1,
          borderRadius: "0px 0px 20px 20px",
        }}
      >
        <Typography
          sx={{ color: "#ffffff", fontSize: "24px", fontWeight: "600" }}
        >
          Register Users
        </Typography>
        <List
          component="nav"
          sx={{ display: "flex", gap: "20px", backgroundColor: "transparent" }}
        >
          <ListItemButton
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              borderRadius: "10px",
            }}
          >
            <ListItemIcon sx={{ minWidth: 0, color: "white" }}>
              <HomeOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>

          {/* Botão de Cadastros com Dropdown */}
          <ListItemButton
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              borderRadius: "10px",
            }}
            onClick={handleOpenNavMenu}
          >
            <ListItemIcon sx={{ minWidth: 0, color: "white" }}>
              <LoupeOutlinedIcon />
            </ListItemIcon>
            <ListItemText>Cadastros</ListItemText>
            <ListItemIcon sx={{ minWidth: 0, color: "white" }}>
              <KeyboardArrowDownOutlinedIcon />
            </ListItemIcon>
          </ListItemButton>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorDropCadastros}
            open={Boolean(anchorDropCadastros)}
            onClose={handleCloseNavMenu}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
            Cadastrar Cliente
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>Listar Clientes</MenuItem>
          </Menu>
        </List>
      </AppBar>
      <Box component='main' sx={{marginTop:'80px'}}>
        {children}
      </Box>
    </Box>
  );
}

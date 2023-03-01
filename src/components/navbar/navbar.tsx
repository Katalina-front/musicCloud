import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Icon from "../../assets/icon.svg";
import { SDrawer, SIconWrapper, SToolbar } from "./navbar.styles";
import { useRouter } from "next/router";
import { Search } from "./search";

const drawerWidth = 240;

const menuItems = [
  { text: "Главная", href: "/" },
  { text: "Альбомы", href: "/albums" },
  { text: "Исполнители", href: "/artists" },
  { text: "Для тебя", href: "/for-you" },
];

export const Navbar = () => {
  const router = useRouter();
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <SToolbar>
          <SIconWrapper>
            <Icon className="icon" />
          </SIconWrapper>
          <Typography variant="h4" noWrap component="div">
            Music Wave
          </Typography>
          <Search />
        </SToolbar>
      </AppBar>
      <SDrawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItems.map(
              (
                { text, href }: { text: string; href: string },
                index: number
              ) => (
                <ListItem
                  key={href}
                  disablePadding
                  onClick={() => router.push(href)}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      {index === 0 && <HomeIcon />}
                      {index === 1 && <MusicNoteIcon />}
                      {index === 2 && <LibraryMusicIcon />}
                      {index === 3 && <FavoriteIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </SDrawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Navbar;

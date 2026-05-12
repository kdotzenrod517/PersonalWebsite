import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/icons-material/Menu";
import DescriptionOutlined from "@mui/icons-material/DescriptionOutlined";
import { NextLinkComposed } from "./MuiNextLink";
import { useState } from "react";

const SideDrawer = ({ navLinks }) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (next) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(next);
  };

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{
          color: `common.white`,
          display: { xs: `inline-flex`, md: `none` },
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ ".MuiDrawer-paper": { bgcolor: "background.paper", width: 260 } }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{ mt: 4 }}
        >
          <List>
            {navLinks.map(({ title, path, external }, i) => {
              const linkProps = external
                ? { component: "a", href: path, target: "_blank", rel: "noopener noreferrer" }
                : { component: NextLinkComposed, to: path };
              return (
                <ListItem key={`${title}${i}`} disablePadding>
                  <ListItemButton {...linkProps}>
                    {external && (
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        <DescriptionOutlined fontSize="small" />
                      </ListItemIcon>
                    )}
                    <ListItemText
                      primary={title}
                      primaryTypographyProps={{
                        sx: { textTransform: "uppercase", letterSpacing: 1 },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default SideDrawer;

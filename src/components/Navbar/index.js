import React from "react";
import { Link } from "react-router-dom";
import {
  makeStyles,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
  Menu,
  Hidden,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Portfolio
          </Typography>
          <Hidden only={["xs", "sm"]}>
            <Button color="inherit" component={Link} to={"/"}>
              About
            </Button>
            <Button color="inherit" component={Link} to={"/portfolio"}>
              Portfolio
            </Button>
            <Button color="inherit" component={Link} to={"/contact"}>
              Contact
            </Button>
            <Button color="inherit" component={Link} to={"/resume"}>
              Resume
            </Button>
          </Hidden>
          <div>
            <Hidden only={["md", "lg", "xl"]}>
              <IconButton
                aria-controls="menu"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Hidden>

            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem component={Link} to={"/"} onClick={handleClose}>
                About
              </MenuItem>
              <MenuItem
                component={Link}
                to={"/portfolio"}
                onClick={handleClose}
              >
                Portfolio
              </MenuItem>
              <MenuItem component={Link} to={"/contact"} onClick={handleClose}>
                Contact
              </MenuItem>
              <MenuItem component={Link} to={"/resume"} onClick={handleClose}>
                Resume
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

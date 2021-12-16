import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Link,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
} from "@mui/material";
import { GetUserDetails } from "../services/UserService";
import { useEffect } from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Navi = () => {
  const [user, setUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const GetUser = async () => {
    setUser(await GetUserDetails());
  };
  useEffect(() => {
    if (localStorage.getItem("token")) GetUser();
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <div>
      <AppBar position="static">
        <Container sx={{ p: 1 }}>
          <Toolbar disableGutters>
            <Link href="/">
              <img src="/logo.png" width={70} height={50} />
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Get Started</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Posts</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About Me</Typography>
                </MenuItem>

                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Write Story</Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link style={{ textDecoration: "none" }} href="/register">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 1, color: "white", display: "block" }}
                >
                  Get Started
                </Button>
              </Link>

              <Link style={{ textDecoration: "none" }} href="/">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 1, color: "white", display: "block" }}
                >
                  Posts
                </Button>
              </Link>

              <Link style={{ textDecoration: "none" }} href="/about-us">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 1, color: "white", display: "block" }}
                >
                  About Us
                </Button>
              </Link>

              <Link style={{ textDecoration: "none" }} href="/new-post">
                <Button
                  startIcon={<BorderColorIcon />}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, mx: 1, color: "white" }}
                >
                  Write Post
                </Button>
              </Link>
            </Box>
            {localStorage.getItem("token") == null ? (
              <Box>
                <Link href="/login">
                  <Button
                    sx={{ marginRight: 2 }}
                    variant="contained"
                    color="success"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/register">
                  <Button
                    sx={{ marginRight: 2 }}
                    variant="contained"
                    color="success"
                  >
                    Register
                  </Button>
                </Link>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={user ? user.profilImage : null}
                    />
                  </IconButton>
                </Tooltip>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Typography textAlign="center">
                      <Link
                        href={user ? `/${user.username}/posts` : "/signin"}
                        style={{
                          textDecoration: "none",
                          color: "rgba(0, 0, 0, 0.87)",
                        }}
                      >
                        <MenuBookIcon fontSize="small" sx={{ mr: 0.4 }} />
                        My Posts
                      </Link>
                    </Typography>
                  </MenuItem>

                  <MenuItem>
                    <Link
                      href="/account/settings"
                      style={{
                        textDecoration: "none",
                        color: "rgba(0, 0, 0, 0.87)",
                      }}
                    >
                      <Typography textAlign="center">
                        {" "}
                        <SettingsIcon fontSize="small" sx={{ mr: 0.4 }} />
                        Settings
                      </Typography>
                    </Link>
                  </MenuItem>

                  <MenuItem>
                    <Typography onClick={() => logout()} textAlign="center">
                      <LogoutIcon fontSize="small" sx={{ mr: 0.4 }} /> Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};
export default Navi;

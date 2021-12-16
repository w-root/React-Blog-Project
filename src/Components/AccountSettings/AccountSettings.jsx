import {
  Box,
  Divider,
  Paper,
  Grid,
  Container,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { CircularProgress, Button } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EditInformation from "./EditInformation";
import EditPassword from "./EditPassword";
import FileBase64 from "react-file-base64";
import {
  DeleteUser,
  GetUserDetails,
  GetUserId,
  UpdateUser,
} from "../../services/UserService";
import { CssBaseline } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import ArticleIcon from "@mui/icons-material/Article";
import EditAboutUser from "./EditAboutUser";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
const Img = styled("img")({
  height: 208,
  width: 208,
  borderRadius: "100%",
});

const AccountSettings = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [page, setPage] = useState();
  const [user, setUser] = useState();

  const GetUser = async () => {
    setUser(await GetUserDetails());
  };

  useEffect(() => {
    GetUser();
    if (file) UpdateUser({ profilImage: file, id: user._id });
  }, [file, page]);

  const clickEditAbout = () => {
    setPage("editAbout");
  };

  const clickEditAccount = () => {
    setPage("editAccount");
  };

  const deleteUser = () => {
    DeleteUser(GetUserId());
    localStorage.removeItem("token");
    navigate("/register", { replace: true });
  };

  return (
    <Paper>
      <CssBaseline />
      <Container className="mt-5" fluid>
        <Grid container item md={12} xs={12}>
          <Grid item xs={12} md={4}>
            <Box>
              <Grid item xs={12}>
                <Grid
                  item
                  xs={12}
                  style={{
                    marginTop: 25,
                    marginBottom: 25,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Box>
                    <Img
                      style={{ position: "absolute" }}
                      src={user ? user.profilImage : null}
                    />
                    <Button
                      style={{
                        width: 208,
                        opacity: 0,
                        height: 208,
                        borderRadius: "100%",
                      }}
                    >
                      <FileBase64
                        multiple={false}
                        onDone={({ base64 }) => setFile(base64)}
                        multiline
                      />
                    </Button>
                  </Box>
                </Grid>
              </Grid>

              <Box></Box>
              {user == null ? (
                <Box style={{ textAlign: "center" }}>
                  {" "}
                  <CircularProgress />
                </Box>
              ) : (
                <Box sx={{ pr: 1 }}>
                  <Box>
                    <Box sx={{ textAlign: "center" }}>
                      <Typography sx={{ fontWeight: 600 }}>
                        {user.username}
                      </Typography>

                      <Box className="h5 mt-4">
                        <Typography className="ni business_briefcase-24 mr-2" />
                        Solution Manager - Creative Tim Officer
                      </Box>

                      <Box>
                        <Typography className="ni education_hat mr-2" />
                        University of Computer Science
                      </Box>

                      <Divider className="my-4" />
                      <strong>About</strong>
                      <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Odit, eius? Sint similique quibusdam velit
                        delectus consequuntur, exercitationem repudiandae,
                        itaque voluptatibus at, aut tempora non quas nulla! Sint
                        eaque quibusdam.
                      </p>
                    </Box>
                  </Box>
                </Box>
              )}
            </Box>
          </Grid>

          <Grid item md={8} xs={12}>
            <List
              xs={12}
              sx={{
                mx: 3,
                display: "flex",
                flexWrap: "wrap",
              }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton onClick={clickEditAccount}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Edit Account" />
              </ListItemButton>

              <ListItemButton onClick={clickEditAbout}>
                <ListItemIcon>
                  <ArticleIcon />
                </ListItemIcon>
                <ListItemText primary="Edit About" />
              </ListItemButton>

              <Button
                onClick={() => deleteUser()}
                color="error"
                startIcon={<DeleteIcon />}
              >
                Delete Account
              </Button>
            </List>

            <Box sx={{ mx: 3 }}>
              <Grid>
                <Grid xs="12">
                  <h3 sx="mb-0">My account</h3>
                  <Divider sx={{ mt: 2, mb: 2 }} />
                </Grid>
              </Grid>
            </Box>
            {page == "editAbout" ? (
              <Box sx={{ mx: 3 }}>
                <EditAboutUser></EditAboutUser>
              </Box>
            ) : (
              <Box sx={{ mx: 3 }}>
                <EditInformation user={user}></EditInformation>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <EditPassword user={user}></EditPassword>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </Paper>
  );
};
export default AccountSettings;

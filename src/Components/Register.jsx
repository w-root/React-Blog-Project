import * as React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Link,
  Grid,
  Checkbox,
  FormControlLabel,
  TextField,
  CssBaseline,
  Avatar,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { UserSignup } from "../services/AuthService";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { makeStyles } from "@material-ui/core";

const theme = createTheme();

const useStyles = makeStyles(() => ({
  grid: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));
const Register = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      UserSignup(values);
      navigate("/login", { replace: true });
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box noValidate sx={{ mt: 3 }}>
            <Formik initialValues={formik.initialValues}>
              <Form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                  <Grid className={classes.grid} item xs={12} sm={12}>
                    <PersonOutlineIcon
                      sx={{ mr: 2 }}
                      fontSize="medium"
                      color="secondary"
                    ></PersonOutlineIcon>

                    <TextField
                      autoComplete="user-name"
                      name="username"
                      required
                      fullWidth
                      id="userName"
                      label="User Name"
                      autoFocus
                      onChange={formik.handleChange}
                    />
                  </Grid>

                  <Grid className={classes.grid} item xs={12}>
                    <AlternateEmailIcon
                      sx={{ mr: 2 }}
                      fontSize="medium"
                      color="secondary"
                    ></AlternateEmailIcon>

                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid className={classes.grid} item xs={12}>
                    <LockIcon
                      sx={{ mr: 2 }}
                      fontSize="medium"
                      color="secondary"
                    ></LockIcon>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="new-password"
                      onChange={formik.handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      sx={{ mx: 3 }}
                      control={<Checkbox color="primary" />}
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </Form>
            </Formik>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Register;

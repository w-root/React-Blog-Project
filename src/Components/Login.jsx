import * as React from "react";
import { Button, Container } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Form, Formik, useFormik } from "formik";
import { UserSignin } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
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

const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      UserSignin(values)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          navigate("/register", { replace: true });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            marginBottom: 15,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="span" variant="h5">
            Login
          </Typography>

          <Box noValidate sx={{ mt: 1 }}>
            <Formik initialValues={formik.initialValues}>
              <Form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
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
                  <FormControlLabel
                    sx={{ mx: 5 }}
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </Grid>
              </Form>
            </Formik>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>

              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Login;

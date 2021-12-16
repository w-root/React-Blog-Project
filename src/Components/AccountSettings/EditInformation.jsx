import React from "react";
import {
  Box,
  Button,
  TextField,
  Grid,
  FormControl,
  Typography,
} from "@mui/material";
import { Formik, useFormik, Form } from "formik";
import { UpdateUser } from "../../services/UserService";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EditInformation = ({ user }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
    },
    onSubmit: (values) => {
      UpdateUser({ ...values, id: user._id });
      navigate("/account/settings", { replace: true });
    },
  });

  return (
    <div>
      {user == null ? (
        <Box style={{ textAlign: "center" }}>
          {" "}
          <CircularProgress />
        </Box>
      ) : (
        <div>
          <Typography sx={{ my: 2, opacity: 0.5 }} variant="h6">
            User information
          </Typography>

          <Formik initialValues={formik.initialValues}>
            <Form onSubmit={formik.handleSubmit}>
              <Grid container item md={12}>
                <Grid item xs={12} md={5}>
                  <FormControl fullWidth>
                    <TextField
                      size="small"
                      label="Username"
                      required
                      type="text"
                      name="username"
                      onChange={formik.handleChange}
                      defaultValue={user.username}
                    />
                  </FormControl>
                </Grid>

                <Grid sx={{ height: 25 }} item xs={12} md={2}></Grid>

                <Grid item xs={12} md={5}>
                  <FormControl fullWidth>
                    <TextField
                      size="small"
                      label="Email"
                      required
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      defaultValue={user.email}
                    />
                  </FormControl>
                </Grid>

                <Grid
                  sx={{ display: "flex", justifyContent: "flex-end", pt: 2 }}
                  item
                  xs={12}
                  md={12}
                >
                  <Button variant="contained">Değişiklikleri Kaydet</Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default EditInformation;

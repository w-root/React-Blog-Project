import React from "react";
import {
  TextField,
  Button,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
import { Formik, useFormik, Form } from "formik";
import { UpdateUser } from "../../services/UserService";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const EditPassword = ({ user }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: "",
      passwordConfirmation: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required("Password is required"),
      passwordConfirmation: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: (values) => {
      UpdateUser({ password: values.password, id: user._id });
      navigate("/account/settings", { replace: true });
    },
  });

  return (
    <div>
      <Typography sx={{ my: 2, opacity: 0.5 }} variant="h6">
        Password Settings
      </Typography>

      <div>
        <Formik initialValues={formik.initialValues}>
          <Form onSubmit={formik.handleSubmit}>
            <Grid container item md={12}>
              <Grid item xs={12} md={5}>
                <FormControl fullWidth>
                  <TextField
                    color={
                      formik.values.password.length > 6 ? "success" : "error"
                    }
                    size="small"
                    required
                    id="password"
                    label="Yeni Şifre"
                    type="password"
                    name="password"
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </Grid>

              <Grid sx={{ height: 25 }} item xs={12} md={2}></Grid>

              <Grid item xs={12} md={5}>
                <FormControl fullWidth>
                  <TextField
                    color={
                      formik.values.passwordConfirmation.length > 6
                        ? "success"
                        : "error"
                    }
                    size="small"
                    required
                    id="password2"
                    label="Yeni Şifre Tekrar"
                    type="password"
                    name="passwordConfirmation"
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </Grid>

              <Grid
                sx={{ display: "flex", justifyContent: "flex-end", py: 2 }}
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
    </div>
  );
};

export default EditPassword;

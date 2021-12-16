import React from "react";
import {
  Button,
  TextField,
  Grid,
  FormControl,
  Typography,
} from "@mui/material";
import { Formik, useFormik, Form } from "formik";

const EditAboutUser = () => {
  const formik = useFormik({
    initialValues: {
      about: "",
    },
    onSubmit: (values) => {},
  });
  return (
    <div>
      <Typography sx={{ my: 2, opacity: 0.5 }} variant="h6">
        About Information
      </Typography>

      <Formik initialValues={formik.initialValues}>
        <Form onSubmit={formik.handleSubmit}>
          <Grid container item md={12}>
            <Grid item xs={12} md={12}>
              <FormControl fullWidth>
                <TextField
                  onChange={formik.handleChange}
                  name="about"
                  id="filled-multiline-static"
                  label="About"
                  multiline
                  rows={10}
                />
              </FormControl>
            </Grid>

            <Grid sx={{ height: 25 }} item xs={12} md={2}></Grid>

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
  );
};

export default EditAboutUser;

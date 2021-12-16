import React, { useEffect, useState } from "react";
import {
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Button,
} from "@mui/material";
import { Form, Formik, useFormik } from "formik";
import { Container, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddPost } from "../redux/actions/postActions";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import { fetchTags } from "../redux/actions/tagActions";
import FileBase64 from "react-file-base64";

const AddNewPost = () => {
  const theme = useTheme();

  const [tag, setTag] = useState([]);
  const [file, setFile] = useState(null);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTag(typeof value === "string" ? value.split(",") : value);
  };

  const tags = useSelector((state) => state.tagReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      title: "",
      subtitle: "",
      content: "",
    },
    onSubmit: (values) => {
      dispatch(fetchAddPost({ ...values, tags: tag, image: file }));
      navigate("/",{ replace: true });
    },
  });

  useEffect(() => {
    dispatch(fetchTags);
  }, []);

  return (
    <div>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Formik initialValues={formik.initialValues}>
          <Form onSubmit={formik.handleSubmit} style={{ width: 500 }}>
            <FormControl name="title" style={{ marginTop: 20 }} fullWidth>
              <InputLabel htmlFor="title">Başlık</InputLabel>
              <Input
                margin="dense"
                onChange={formik.handleChange}
                name="title"
                id="title"
                aria-describedby="my-helper-text"
              />
              <FormHelperText id="my-helper-text">
                Makaleni en iyi anlatan başlığı seç !
              </FormHelperText>
            </FormControl>

            <FormControl style={{ marginTop: 20 }} fullWidth>
              <InputLabel htmlFor="subtitle">Alt Başlık</InputLabel>
              <Input
                margin="dense"
                color="secondary"
                onChange={formik.handleChange}
                name="subtitle"
                type="text"
                id="my-input"
                aria-describedby="my-helper-text"
              />
              <FormHelperText id="my-helper-text">
                Başlığı destekleyen kelimeleri seç
              </FormHelperText>
            </FormControl>

            <FormControl style={{ marginTop: 20 }} fullWidth>
              <TextField
                onChange={formik.handleChange}
                name="content"
                id="filled-multiline-static"
                label="Content"
                multiline
                rows={14}
              />
            </FormControl>

            <FormControl style={{ marginTop: 20 }} fullWidth>
              <FileBase64
                multiple={false}
                onDone={({ base64 }) => setFile(base64)}
                onChange={formik.handleChange}
                multiline
                rows={14}
              />
            </FormControl>

            <FormControl style={{ marginTop: 20, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">Etiketler</InputLabel>
              <Select
                name="tags"
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={tag}
                onChange={handleChange}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value.name} label={value.name} />
                    ))}
                  </Box>
                )}
              >
                {tags.map((tag) => (
                  <MenuItem key={tag._id} value={tag}>
                    {tag.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl
              style={{
                marginTop: 20,
                justifyContent: "flex-end",
                display: "flex",
              }}
            >
              <Button type="submit" variant="outlined" color="success">
                Add a Post
              </Button>
            </FormControl>
          </Form>
        </Formik>
      </Container>
    </div>
  );
};

export default AddNewPost;

import React, { useEffect } from "react";
import { Box, Chip, Divider, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../redux/actions/tagActions";
import { getPostByTag } from "../redux/actions/postActions";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";

const Categories = () => {
  const dispatch = useDispatch();

  const tags = useSelector((state) => state.tagReducer);

  useEffect(() => {
    dispatch(fetchTags);
  }, []);

  const filterPosts = (tag) => {
    dispatch(getPostByTag(tag));
  };

  return (
    <div>
      <Box sx={{ mt: 20, mb: 2 }} direction="row">
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" gutterBottom>
            Tags
          </Typography>
          <Typography sx={{ fontSize: 12 }} gutterBottom>
            Save <BookmarkAddIcon />
          </Typography>
        </Box>
        <Divider />
        {tags.map((tag) => (
          <Chip
            onClick={() => filterPosts(tag)}
            key={tag._id}
            style={{ margin: 5 }}
            label={tag.name}
            component="a"
            clickable
            color="success"
          />
        ))}
      </Box>
    </div>
  );
};

export default Categories;

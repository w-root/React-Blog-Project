import { Divider, Grid, Typography } from "@material-ui/core";
import { Alert, AlertTitle, Link } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions/postActions";
import Categories from "./Categories";
import Post from "./Post";

const PostList = () => {
  const posts = useSelector((state) => state.postReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts);
  }, []);

  return (
    <div>
      <Grid container style={{ marginTop: 2 }} md={12} xs={12} item spacing={3}>
        <Grid item xs={12} md={9}>
          {posts.length > 0 ? (
            posts.map((post) => <Post key={post._id} post={post}></Post>)
          ) : (
            <div>
              <Alert severity="warning">
                <AlertTitle>Bu konu ile ilgili blog bulunamadı !</AlertTitle>
                Hadi ilk bloğu sen yaz{" "}
                <strong>
                  <Link style={{ textDecoration: "none" }} href="/new-post">
                    Blog Oluştur
                  </Link>
                </strong>
              </Alert>
            </div>
          )}
        </Grid>

        <Grid item xs={12} md={3}>
          <Categories />

          <Divider />
          <Box>
            <Link
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                textDecoration: "none",
                color: "black",
                opacity: 0.5,
              }}
            >
              <Typography>Help</Typography>

              <Typography>About</Typography>

              <Typography>Status</Typography>

              <Typography>Writers</Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default PostList;

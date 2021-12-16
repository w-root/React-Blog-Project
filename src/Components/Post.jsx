import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Chip, Link, Rating } from "@mui/material";
import { styled } from "@mui/material/styles";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import moment from "moment";

const Img = styled("img")({
  width: "100%",
  height: "auto",
});

const convertToDate = (date) => {
  return moment(date).fromNow();

};

const Post = ({ post }) => {
  return (
    <div>
      <Paper sx={{ p: 2, m: "auto", maxWidth: 1000, flexGrow: 1, mt: 4 }}>
        <Grid container spacing={2}>
          <Grid item md={3} xs={12}>
            <Link href={`${post.slug}`}>
              <Img alt="complex" src={`${post.image}`} />
            </Link>
          </Grid>

          <Grid item md={9} xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography>{post.user.username}</Typography>

                <Typography
                  style={{ fontSize: 12, opacity: 0.75 }}
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                >
                  {convertToDate(post.date)}
                </Typography>
                <Link
                  style={{ textDecoration: "none", color: "black" }}
                  href={`${post.slug}`}
                >
                  <Typography
                    style={{ fontWeight: 900, fontSize: 16 }}
                    variant="body2"
                    gutterBottom
                  >
                    {post.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {post.subtitle.length > 40
                      ? post.subtitle.substring(0, 65) + "..."
                      : post.subtitle}
                  </Typography>
                </Link>
              </Grid>

              <Grid item>
                {post.tags.map((tag) => (
                  <Chip sx={{ m: 0.1 }} key={tag._id} label={tag.name} />
                ))}
              </Grid>
            </Grid>
            <Grid item>
              <Typography gutterBottom>
                <Rating name="size-small" defaultValue={2} size="small" />{" "}
                <BookmarkBorderIcon />
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Post;

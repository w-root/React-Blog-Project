import { Paper, Divider, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import * as services from "../services/PostService";
import { useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import moment from "moment";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Img = styled("img")({
  width: "75%",
});

const PostDetail = () => {
  let params = useParams();
  const [post, setPost] = useState();

  const getPostDetail = async () => {
    const post = await services.getPost(params.slug);
    setTimeout(() => {
      setPost(post.data);
    }, 1000);
  };

  useEffect(() => {
    getPostDetail();
  }, []);

  const convertToDate = (date) => {
    return moment(date).fromNow();
  };

  return (
    <div>
      {post == null ? (
        <div>
          <Grid item xs={12}>
            <Skeleton
              sx={{ my: 5 }}
              variant="rectangular"
              width="50%"
              height={350}
            />
            <Skeleton sx={{ my: 5 }} variant="circular">
              <Avatar />
            </Skeleton>
            <Skeleton width="100%">
              <Typography>.</Typography>
              <Typography>.</Typography>
              <Typography>.</Typography>
            </Skeleton>
          </Grid>
        </div>
      ) : (
        <Box>
          <Grid item container md={12}>
            <Box sx={{ my: 4 }}>
              <Img src={post.image}></Img>
            </Box>
          </Grid>

          <Grid container item xs={12}>
            <Grid container item md={9} xs={12}>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
                item
                xs={12}
              >
                <Box sx={{ px: 1, display: "flex" }}>
                  <Link href={`/${post.user.username}/posts`}>
                    <Avatar alt="amre Bakers" src={post.user.profilImage} />
                  </Link>
                  <Box sx={{ px: 1 }}>
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      href={`/${post.user.username}/posts`}
                    >
                      {" "}
                      <Typography>{post.user.username}</Typography>
                    </Link>

                    <Typography style={{ fontSize: 13, opacity: "75%" }}>
                      {convertToDate(post.date)}
                    </Typography>
                  </Box>
                </Box>

                <Box
                  sx={{
                    px: 2,
                  }}
                >
                  <SpeedDial
                    direction="left"
                    ariaLabel="SpeedDial basic example"
                    icon={<SpeedDialIcon />}
                  >
                    Share
                    <SpeedDialAction
                      icon={<FacebookIcon />}
                      tooltipTitle="facebook"
                    />
                    <SpeedDialAction
                      icon={<TwitterIcon />}
                      tooltipTitle="twitter"
                    />
                  </SpeedDial>
                </Box>
              </Grid>
            </Grid>

            <Grid item md={9} xs={12} sx={{ mt: 3 }}>
              <Typography variant="h4" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="h6" gutterBottom>
                {post.subtitle}
              </Typography>

              <Divider style={{ width: "98%" }} />
              <Typography sx={{ textAlign: "justify", pr: 3 }}>
                {" "}
                {post.content}
              </Typography>
            </Grid>

            <Grid item xs={12} md={3}>
              <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
                <Typography variant="h6" gutterBottom>
                  Bu Yazı Ne Hakkında ?
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta omnis cupiditate praesentium voluptatum suscipit
                  repellat provident perferendis ipsum itaque perspiciatis?
                  Beatae accusantium alias nobis, amet quaerat quae consectetur
                  esse eveniet.
                </Typography>
              </Paper>

              <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                Social
              </Typography>

              <Link display="block" variant="body1" href="#" sx={{ mb: 0.5 }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <span>Twitter</span>
                </Stack>
              </Link>
            </Grid>
          </Grid>
        </Box>
      )}
    </div>
  );
};

export default PostDetail;

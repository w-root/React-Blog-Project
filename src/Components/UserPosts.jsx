import * as React from "react";
import { useEffect, useState } from "react";
import {
  Link,
  Grid,
  Typography,
  CircularProgress,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { getUserPostsByUsername } from "../services/PostService";

import { useParams } from "react-router-dom";

const Img = styled("img")({
  margin: "auto",
  maxWidth: "100%",
  width: "75%",
  height: "auto",
});
const UserPosts = () => {
  const parameters = useParams();
  const [posts, setPosts] = useState();

  const GetUserPostss = async () => {
    setPosts((await getUserPostsByUsername(parameters.username)).data);
  };
  useEffect(() => {
    GetUserPostss();
  }, []);

  return (
    <div>
      {posts ? (
        <Grid container item xs={12} style={{ marginTop: 2 }} spacing={3}>
          <Grid item xs={3}>
            USER DETAIL
          </Grid>

          <Grid item xs={9}>
            {posts.map((p) => (
              <Grid
                container
                style={{ marginTop: 5, marginBottom: 55 }}
                spacing={2}
              >
                <Grid item style={{ textAlign: "center" }} xs={12}>
                  <Link sx={{ width: 200, height: 134 }}>
                    <Img alt="complex" src={`${p.image}`} />
                  </Link>
                </Grid>

                <Grid
                  item
                  xs={12}
                  style={{ paddingLeft: 120, paddingRight: 120 }}
                >
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography
                        style={{ fontSize: 11 }}
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        {p.date}
                      </Typography>

                      <Link style={{ textDecoration: "none", color: "black" }}>
                        <Typography
                          style={{ fontWeight: 900, fontSize: 20 }}
                          variant="body2"
                          gutterBottom
                        >
                          {p.title}
                        </Typography>

                        <Typography color="text.secondary">
                          {p.content.length > 500
                            ? p.content.substring(0, 500) + "..."
                            : p.content}
                        </Typography>
                      </Link>
                    </Grid>

                    <Divider style={{ marginTop: 20 }} />
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default UserPosts;

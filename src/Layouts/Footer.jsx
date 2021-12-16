import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { makeStyles } from "@material-ui/core";
import { Divider, Grid, List } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";


const useStyles = makeStyles(() => ({
  box: {
    backgroundColor: "#1976d2",
    color: "#fff",
    marginTop: "5em",
  },
  grid: {
    marginTop: "2em",
    textAlign: "center",
  },
  divider: {
    margin: "auto",
    width: "50%",
  },
  link: {
    textDecoration: "none",
    color: "#fff",
    display: "block",
    marginBottom: 10,
  },
}));

function Copyright() {
  return (
    <div>
      <Typography
        style={{ textAlign: "center" }}
        variant="body2"
        color="text.secondary"
      >
        {"Copyright © "}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getUTCFullYear()}
        {"."}
      </Typography>
    </div>
  );
}
const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <Box sx={{marginTop:20}}>
        <CssBaseline />
        <Box className={classes.box} component="footer">
          <Container>
            <Grid container item xs={12}>
              <Grid className={classes.grid} item xs={12} md={3}>
                <Typography>Lorem</Typography>
                <Divider className={classes.divider} />
                <Box style={{ paddingTop: 15, paddingLeft: 10 }}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
                  </Typography>
                </Box>
              </Grid>

              <Grid className={classes.grid} item xs={12} md={3}>
                <Typography>About</Typography>
                <Divider className={classes.divider} />
                <List>
                  <Link href="/" className={classes.link}>
                    PROJECTS
                  </Link>

                  <Link className={classes.link} href={"/about-me"}>
                    ABOUT ME
                  </Link>
                  <Link className={classes.link} href={"/"}>
                    BLOG
                  </Link>
                  <Link className={classes.link} href={"/"}>
                    AWARDS
                  </Link>
                </List>
              </Grid>

              <Grid className={classes.grid} item xs={12} md={3}>
                <Typography>Address</Typography>
                <Divider className={classes.divider} />
                <Box style={{ paddingTop: 15, paddingLeft: 10 }}>
                  <Typography>
                    <TwitterIcon fontSize="small"></TwitterIcon> New York, NY
                    10012, US
                  </Typography>
                  <Typography>
                    <TwitterIcon fontSize="small"></TwitterIcon> emre@emre.com
                  </Typography>
                  <Typography>
                    <TwitterIcon fontSize="small"></TwitterIcon> +90 999 999 99
                    99
                  </Typography>
                  <Typography>
                    <TwitterIcon fontSize="small"></TwitterIcon> +90 999 999 99
                    99
                  </Typography>
                </Box>
              </Grid>

              <Grid className={classes.grid} xs={12} item md={3}>
                <Typography>Contact</Typography>
                <Divider className={classes.divider} />

                <Box style={{ marginTop: "1em" }}>
                  <Link className={classes.link} href={"/https://www.instagram.com/emree.seyhann/"}>
                    <InstagramIcon fontSize="large"></InstagramIcon>
                  </Link>

                  <Link className={classes.link} href={"/"}>
                    <FacebookIcon fontSize="large"></FacebookIcon>
                  </Link>

                  <Link className={classes.link} href={"https://github.com/w-root"}>
                    <GitHubIcon fontSize="large"></GitHubIcon>
                  </Link>

                  <Link className={classes.link} href={"/"}>
                    <TwitterIcon fontSize="large"></TwitterIcon>
                  </Link>
                </Box>
              </Grid>
            </Grid>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </div>
  );
}

export default Footer

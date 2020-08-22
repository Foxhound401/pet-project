import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import shitImage from "./images/login-background.png";
import sunset from "./images/sunset-2-logo.png";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        phucphung
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
function CopyrightMobile() {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={{ color: "white" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        phucphung
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${shitImage})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  notPaper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    alignItems: "center",
    flex: 1
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1
  },
  avatar: {
    margin: theme.spacing(1)
    // backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 15,
    backgroundColor: "#1877F2",
    textTransform: "none"
  },
  notMobile: {
    display: "flex",
    flex: 1
  },
  mobile: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    backgroundSize: "cover",
    backgroundColor: "#fafafa",
    backgroundImage: `url(${shitImage})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  logo: {
    display: "flex",
    flex: 1
  },
  textMobile: {
    color: "#F2F2F2"
  },
  textNotMobile: {
    paddingTop: "10px"
  }
}));

export default function Login() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={5} md={7} lg={8} className={classes.image}>
        {matches ? (
          <Grid className={classes.logo}>
            <Grid
              container
              alignItems="center"
              style={{
                height: "fit-content",
                marginTop: "75px",
                marginLeft: "60px"
              }}
            >
              <Avatar className={classes.avatar} src={sunset} alt="Sunset">
                <LockOutlinedIcon />
              </Avatar>
              <Grid>
                <Typography
                  component="h1"
                  variant="h5"
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.3rem",
                    lineHeight: 1
                  }}
                >
                  PET AUCTION
                </Typography>
                <Typography
                  component="h1"
                  variant="overline"
                  style={{
                    color: "white",
                    fontSize: "0.85rem",
                    letterSpacing: "0.4em",
                    lineHeight: 1
                  }}
                >
                  loremipsum
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          ""
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
        className={matches ? classes.notMobile : classes.mobile}
      >
        <div className={matches ? classes.notPaper : classes.paper}>
          {!matches ? (
            <Grid className={classes.logo}>
              <Grid
                container
                alignItems="center"
                style={{ height: "fit-content" }}
              >
                <Avatar className={classes.avatar} src={sunset} alt="Sunset">
                  <LockOutlinedIcon />
                </Avatar>
                <Grid>
                  <Typography
                    component="h1"
                    variant="h5"
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "1.3rem",
                      lineHeight: 1
                    }}
                  >
                    PET AUCTION
                  </Typography>
                  <Typography
                    component="h1"
                    variant="overline"
                    style={{
                      color: "white",
                      fontSize: "0.85rem",
                      letterSpacing: "0.4em",
                      lineHeight: 1
                    }}
                  >
                    loremipsum
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ) : (
            ""
          )}
          <form className={classes.form} noValidate>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              size="large"
            >
              Đăng nhập bằng Facebook
            </Button>
            <Grid container>
              <Grid item xs style={{ bottom: 0 }}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center"
                  className={
                    matches ? classes.textNotMobile : classes.textMobile
                  }
                >
                  Bằng cách đăng nhập, tôi xác nhận tôi đồng ý với Điều kiện và
                  Điều khoản của blablabla
                </Typography>
              </Grid>
            </Grid>
            {!matches ? (
              <Box mt={2}>{matches ? <Copyright /> : <CopyrightMobile />}</Box>
            ) : (
              ""
            )}
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

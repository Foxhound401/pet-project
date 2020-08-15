import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import shitImage from "./images/login-background.png";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


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
    // flexDirection: "column",
    // alignItems: "center",
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
    flex: 1,
    flexDirection: "column"
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
  textNotMobile: {}
}));

export default function Otp() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        item
        component={Paper}
        elevation={6}
        square
        className={classes.notMobile}
      >
        <div className={classes.paper}>
          <Grid container>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              className={matches ? classes.textNotMobile : classes.textMobile}
            >
              Bằng cách đăng nhập, tôi xác nhận tôi đồng ý với Điều kiện và Điều
              khoản của blablabla
            </Typography>
          </Grid>
          <form className={classes.form} noValidate>
            <Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  size="large"
                >
                  Đăng nhập bằng Facebook
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}

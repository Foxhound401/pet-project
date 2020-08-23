import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import shitImage from "./images/login-background.png";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { NormalTextField } from "./component/CustomizedTextField";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    justifyContent: "center"
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
  textNotMobile: {},
  textBold: {
    color: "#333333",
    fontStyle: "normal",
    lineHeight: "158.69%",
    fontWeight: "bold",
    letterSpacing: "0.002em",
    fontSize: "1rem",
    textAlign: "center",
    marginBottom: "1.5rem"
  },
  textNormal: {
    fontSize: "0.8rem",
    fontWeight: "400",
    lineHeight: "158.69%",
    textAlign: "center",
    letterSpacing: "0.02em",
    color: "#898AA0"
  },
  textTileSpacing: {
    textTransform: "uppercase",
    fontWeight: "normal",
    fontSize: "0.875rem",
    lineHeight: "158.69%",
    letterSpacing: "0.05em",
    color: "#828282"
  },
  flex: {
    display: "flex",
    flex: 1
  }
}));

export default function Otp() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles();

  return (
    <Container>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid style={{ marginTop: "10rem", padding: "2rem" }}>
          <Typography className={classes.textBold}>
            Vui lòng nhập số điện thoại
          </Typography>
          <Grid style={{ marginBottom: "1.4rem" }}>
            <NormalTextField
              variant="outlined"
              placeholder="0909xxxxxx"
              fullWidth={true}
            />
          </Grid>
          <Grid style={{ marginBottom: "4rem" }}>
            <Typography className={classes.textNormal}>
              Nhấn tiếp theo để nhận được tin nhắn xác nhậm từ dịch vụ xác thực.
              Xác thực số điện thoại.
            </Typography>
          </Grid>
          <Grid className={classes.flex}>
            <Button
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "#1877F2",
                fontSize: "1rem",
                color: "#FBFBFB",
                marginTop: 19,
                borderRadius: 15,
                textTransform: "none",
                height: "3.25rem",
                marginLeft: 30,
                marginRight: 30
              }}
            >
              Tiếp theo
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

import React from "react";
import { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { VyBellIcon, VyMenuIcon, VyCalendarIcon } from "./component/VyIcons";
import {
  NormalTextField,
  AreaTextField,
  SelectTextField
} from "./component/CustomizedTextField";
import MenuItem from "@material-ui/core/MenuItem";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"; // choose your lib
import { vi } from "date-fns/locale"; // choose your lib
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const steps = [
  {
    value: "20",
    label: "20.000"
  },
  {
    value: "50",
    label: "50.000"
  },
  {
    value: "100",
    label: "100.000"
  },
  {
    value: "200",
    label: "200.000"
  },
  {
    value: "500",
    label: "500.000"
  }
];

const pics = [
  {
    label: "something1"
  },
  {
    label: "something2"
  },
  {
    label: "something3"
  }
];

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
    fontSize: 20
  },
  cardGrid: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  cardImage: {
    padding: theme.spacing(0),
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(4)
  },
  card: {
    width: "100%",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
    minHeight: "11.5rem",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: 10
  },
  bar: {
    color: "#000000",
    backgroundColor: "#ffffff",
    boxShadow: "none"
  },
  header: {
    display: "flex",
    justifyContent: "space-between"
  },
  dateRight: {
    fontSize: "0.9rem",
    alignSelf: "center",
    backgroundColor: "#EA605B",
    padding: "0.7rem",
    paddingTop: "0.4rem",
    paddingBottom: "0.4rem",
    textAlign: "center",
    borderRadius: 7,
    color: "#F2F2F2",
    fontWeight: "600"
  },
  avatarLeft: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end"
  },
  username: {
    fontSize: "0.9rem",
    paddingLeft: "0.05rem",
    alignSelf: "center",
    fontWeight: "bold",
    letterSpacing: "0.02em"
  },
  avatar: {
    borderWidth: 5,
    borderStyle: "solid",
    // borderColor: "rgba(255, 255, 255, 0.36)",
    borderColor: "#FFFFFF",
    width: "8rem",
    height: "8rem",
    // margin: "0.8rem",
    marginLeft: "0",
    transform: "translate(calc(50vw - 4rem), -75%)"
  },
  userContainer: {
    display: "flex",
    flex: 1
  },
  cardUserDateInfo: {
    display: "flex",
    flex: 1,
    padding: 0,
    paddingTop: 11
  },
  carousel: {
    height: "17rem"
  },
  petImage: {
    height: "100%"
  },
  priceSection: {
    paddingTop: 28
  },
  textBold: {
    color: "#333333",
    fontStyle: "normal",
    lineHeight: "158.69%",
    fontWeight: "bold",
    letterSpacing: "0.002em",
    fontSize: "1rem"
  },
  textNormal: {
    fontSize: "1.125rem",
    lineHeight: "158.69%",
    textAlign: "center",
    letterSpacing: "0.02em",
    color: "#333333"
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
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 20,
    paddingBottom: 10
  },
  flexRow: {
    display: "flex",
    flex: 1,
    height: "7rem",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  addButton: {
    width: "1.5rem",
    height: "1.5rem",
    backgroundColor: "#FFFFFF",
    color: "#1877F2"
  }
}));

const materialTheme = createMuiTheme({
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: "#F3F3F9",
        borderRadius: 10
      },

      input: {
        fontWeight: "bold",
        fontSize: "0.9rem",
        letterSpacing: "0.02em",
        lineHeight: "158.69%",
        color: "#333333"
      }
    },
    MuiOutlinedInput: {
      notchedOutline: {
        border: 0
      }
    }
  }
});

export default function NewProduct() {
  const classes = useStyles();
  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const spacing = notMobile ? 3 : 1;
  const xsItem = notMobile ? 4 : 4;
  const smItem = notMobile ? 3 : 6;
  const mdItem = notMobile ? 3 : 6;
  const itemMaxWidth = notMobile ? "none" : classes.itemPet;
  const cardLayout = notMobile ? classes.cardweb : classes.card;

  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFFF";
  }, []);

  const handleChange = event => {
    setStep(event.target.value);
  };

  const [step, setStep] = useState("20");
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.bar}>
        <Toolbar className={classes.header}>
          <Grid>
            <VyMenuIcon className={classes.icon} width={15} />
          </Grid>
          <Grid>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={`${classes.textBold}`}
            >
              Đăng sản phẩm
            </Typography>
          </Grid>
          <Grid>
            <VyBellIcon className={classes.icon} width={19} />
          </Grid>
        </Toolbar>
      </AppBar>
      <Divider variant="middle" />
      <main>
        <Container style={{ marginTop: 10 }} maxWidth="md">
          <form>
            <Grid className={classes.flex}>
              <Typography className={classes.textTileSpacing}>
                Tên sản phẩm
              </Typography>
              <Typography className={classes.textTileSpacing}>15/30</Typography>
            </Grid>
            <Grid>
              <NormalTextField
                variant="outlined"
                placeholder="something"
                fullWidth={true}
              />
            </Grid>
            <Grid className={`${classes.flex} `} style={{ marginTop: 10 }}>
              <Typography className={classes.textTileSpacing}>
                Thông tin sản phẩm
              </Typography>
              <Typography className={classes.textTileSpacing}>15/70</Typography>
            </Grid>
            <Grid>
              <AreaTextField
                variant="outlined"
                placeholder="something"
                multiline
                fullWidth={true}
                rows={5}
              />
            </Grid>
            <Grid className={`${classes.flex} `} style={{ marginTop: 10 }}>
              <Typography className={classes.textTileSpacing}>
                Bước giá
              </Typography>
            </Grid>
            <Grid>
              <SelectTextField
                variant="outlined"
                value={step}
                fullWidth={true}
                placeholder="something"
                onChange={handleChange}
                select
              >
                {steps.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </SelectTextField>
            </Grid>
            <Grid className={`${classes.flex} `} style={{ marginTop: 10 }}>
              <Typography className={classes.textTileSpacing}>
                Thời gian kết thúc
              </Typography>
            </Grid>
            <Grid>
              <MuiPickersUtilsProvider utils={DateFnsUtils} locale={vi}>
                <ThemeProvider theme={materialTheme}>
                  <DateTimePicker
                    value={selectedDate}
                    fullWidth={true}
                    onChange={handleDateChange}
                    inputVariant="outlined"
                    minutesStep={5}
                    disablePast
                    InputProps={{
                      endAdornment: <VyCalendarIcon />
                    }}
                  />
                </ThemeProvider>
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid className={`${classes.flex} `} style={{ marginTop: 10 }}>
              <Typography className={classes.textTileSpacing}>
                Hình ảnh
              </Typography>
              <Typography className={classes.textTileSpacing}>0/8</Typography>
            </Grid>
            <Grid style={{}} className={`${classes.flexRow}`}>
              {pics.map(pic => (
                <Grid
                  style={{
                    width: "6.5rem",
                    height: "6.5rem",
                    borderRadius: 10,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#F3F3F9"
                  }}
                >
                  <Avatar
                    alt="+"
                    src="/broken-image.jpg"
                    className={classes.addButton}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid>
              <Button
                style={{
                  display: "flex",
                  flex: 1,
                  backgroundColor: "#1877F2",
                  fontSize: "1rem",
                  color: "#FBFBFB",
                  width: "100%",
                  marginTop: 19,
                  borderRadius: 15,
                  textTransform: "none",
                  height: "3.25rem"
                }}
              >
                Đăng sản phẩm ngay
              </Button>
            </Grid>
          </form>
        </Container>
      </main>
    </React.Fragment>
  );
}

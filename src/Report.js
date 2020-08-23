import React from "react";
import { useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import { VyBellIcon, VyMenuIcon } from "./component/VyIcons";
import { AreaTextField } from "./component/CustomizedTextField";
import { SimpleDialog } from "./component/CustomizeDialog";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
    fontSize: 20
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
  },
  buttonActive: {
    display: "flex",
    flex: 1,
    backgroundColor: "#D7E9FF!important",
    fontSize: "0.9rem",
    color: "#333333",
    borderRadius: 15,
    textTransform: "none",
    height: "3.125rem",
    fontWeight: "300",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem"
  },
  buttonNotActive: {
    display: "flex",
    flex: 1,
    backgroundColor: "#F3F3F9",
    fontSize: "0.9rem",
    color: "#333333",
    borderRadius: 15,
    textTransform: "none",
    height: "3.125rem",
    fontWeight: "300",
    paddingLeft: "1.25rem",
    paddingRight: "1.25rem"
  },
  submitButton: {
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
  }
}));

const reasons = [
  "Người dùng vi phạm luật sàn",
  "Nhắn tin spam, quẩy rồi người khâc",
  "Bán hàng cấm",
  "Sản phẩm không đúng như hình",
  "Lý do khác"
];

export default function ReportUser() {
  const classes = useStyles();
  // const theme = useTheme();
  // const notMobile = useMediaQuery(theme.breakpoints.up("sm"));
  // const spacing = notMobile ? 3 : 1;
  // const xsItem = notMobile ? 4 : 4;
  // const smItem = notMobile ? 3 : 6;
  // const mdItem = notMobile ? 3 : 6;
  // const itemMaxWidth = notMobile ? "none" : classes.itemPet;
  // const cardLayout = notMobile ? classes.cardweb : classes.card;
  //
  const [clickedReason, setClickedReason] = React.useState(-1);
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("true");

  const selectReason = index => {
    console.log("SHIT ", index);
    setClickedReason(index);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    setSelectedValue(value);
  };

  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFFF";
  }, []);

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
              Báo cáo Khá Bảnh
            </Typography>
          </Grid>
          <Grid style={{ transform: "translateY(5px)" }}>
            <VyBellIcon className={classes.icon} width={19} />
          </Grid>
        </Toolbar>
      </AppBar>
      <Divider variant="middle" />
      <main>
        <Container style={{ marginTop: 10 }} maxWidth="md">
          <form>
            <Grid className={classes.flex}>
              <Typography className={classes.textBold}>
                Lý do báo cáo
              </Typography>
            </Grid>
            <Grid style={{ display: "flex", flexFlow: "row wrap", flex: 1 }}>
              {reasons.map((reason, index) => (
                <Grid
                  key={index}
                  style={{ marginTop: 6, marginBottom: 6, paddingRight: 12 }}
                >
                  <Button
                    className={
                      index === clickedReason
                        ? classes.buttonActive
                        : classes.buttonNotActive
                    }
                    onClick={() => selectReason(index)}
                  >
                    {reason}
                  </Button>
                </Grid>
              ))}
            </Grid>

            <Divider variant="middle" style={{ marginTop: "1.5rem" }} />

            <Grid className={`${classes.flex} `} style={{ marginTop: 10 }}>
              <Typography className={classes.textTileSpacing}>
                Chi tiết lý do
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
            <Grid style={{ marginBottom: "2rem" }}>
              <Button
                className={classes.submitButton}
                onClick={() => handleClickOpen()}
              >
                Gửi báo cáo tới quản trị viên
              </Button>
              <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
              />
            </Grid>
          </form>
        </Container>
      </main>
    </React.Fragment>
  );
}

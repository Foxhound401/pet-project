import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  },
  buttAccept: {
    display: "flex",
    flex: 1,
    backgroundColor: "#1877F2!important",
    borderRadius: 15,
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: "0.9em",
    lineHeight: "158.69%",
    textTransform: "none",
    height: "3.125rem",
    marginLeft: 20,
    marginRight: 5
  },
  buttCancel: {
    display: "flex",
    flex: 1,
    backgroundColor: "#D7E9FF",
    borderRadius: 15,
    color: "#4F4F4F",
    fontWeight: "600",
    fontSize: "0.9em",
    lineHeight: "158.69%",
    textTransform: "none",
    height: "3.125rem",
    marginRight: 20,
    marginLeft: 5
  }
});

export function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth="sm"
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <Grid
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          height: "13.5625rem",
          alignItems: "center",
          width: "100%"
        }}
        container
      >
        <Grid style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <Typography
            style={{
              marginTop: 25,
              marginBottom: 10,
              fontSize: "0.9rem",
              fontWeight: "bold",
              color: "#333333",
              lineHeight: "158.69%",
              alignSelf: "center"
            }}
          >
            Gửi báo cáo
          </Typography>
          <Typography
            style={{
              fontSize: "0.875rem",
              fontWeight: "normal",
              lineHeight: "158.69%",
              textAlign: "center",
              letterSpacing: "0.02em",
              color: "#333333",
              padding: 10,
              marginLeft: 20,
              marginRight: 20
            }}
          >
            Gửi báo cáo đến quản trị viên , balblablablab, ban co chac muon
            report nguoi nay khong{" "}
          </Typography>
        </Grid>
        <Grid
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            alignItems: "center"
          }}
          container
        >
          <Button className={classes.buttAccept}>Gửi ngay</Button>
          <Button className={classes.buttCancel} onClick={handleClose}>
            Hủy
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

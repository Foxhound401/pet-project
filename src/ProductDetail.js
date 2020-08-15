import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CardActionArea from "@material-ui/core/CardActionArea";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationIcon from "@material-ui/icons/Notifications";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import { CardMedia } from "@material-ui/core";
import rick from "./images/rick.png";
import morty from "./images/morty.png";
import beth from "./images/beth.jpeg";
import bug from "./images/bug.png";
import addImage from "./images/Rectangle24.png";
import kangaroo from "./images/kangaroo.jpg";
import tiger from "./images/tiger.jpg";
import crocodile from "./images/crocodile.jpg";
import turtle from "./images/turtle.jpg";
import ohhwee from "./images/ohhwee.jpg";
import bear from "./images/bear.jpg";


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
    fontSize: 20
  },
  addButton: {
    color: "#1877F2",
    fontSize: 20,
    backgroundColor: "#FFFFFF"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
    // paddingTop: theme.spacing(4)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  cardStatic: {
    height: "100%",
    minHeight: "270px",
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${addImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "5%"
  },
  cardWebStatic: {
    height: "100%",
    display: "flex",
    minHeight: "192px",
    display: "flex",
    flexDirection: "column",
    backgroundImage: `url(${addImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "5%"
  },

  card: {
    height: "100%",
    minHeight: "270px",
    // maxHeight: "230px",
    display: "flex",
    flexDirection: "column",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "5%"
  },
  cardweb: {
    height: "100%",
    display: "flex",
    minHeight: "192px",
    display: "flex",
    flexDirection: "column",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "5%"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%"
  },
  cardContentStatic: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%"
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
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
  itemPet: {
    maxWidth: "20%"
  },
  petTimeLeft: {
    color: "#FFFFFF",
    backgroundColor: "rgba(60, 60, 60, 0.5)",
    padding: 5,
    marginBottom: 5,
    borderRadius: 5,
    fontSize: "0.95rem",
  },
  petItemName: {
    color: "#FFFFFF",
    textAlign: "center",
    backgroundColor: "rgba(60, 60, 60, 0.5)",
    padding: 3,
    borderRadius: 5,
    fontSize: "0.8rem",
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis"

  }
}));


export default function ProductDetail() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.bar}>
        <Toolbar className={classes.header}>
          <Grid>
            <MenuIcon className={classes.icon} />
          </Grid>
          <Grid>
            <Typography variant="h6" color="inherit" noWrap>
              Sàn đấu giá
            </Typography>
          </Grid>
          <Grid>
            <NotificationIcon className={classes.icon} />
          </Grid>
        </Toolbar>
      </AppBar>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
        </Container>
      </main>
    </React.Fragment>
  );
}

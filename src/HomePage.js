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
import Divider from "@material-ui/core/Divider";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const test1 = {
  name: "Rùa Tai đỏ",
  timeleft: "23:02:43",
  avatar: rick,
  heroImage: turtle
};

const test2 = {
  name: "Hổ rừng xanh",
  timeleft: "23:02:43",
  avatar: bug,
  heroImage: tiger
};

const test3 = {
  name: "Chuột túi bắc cực",
  timeleft: "23:02:43",
  avatar: beth,
  heroImage: kangaroo
};

const test4 = {
  name: "Cá sấu lên bờ",
  timeleft: "23:02:43",
  avatar: morty,
  heroImage: crocodile
};

const test5 = {
  name: "Putin oooooasdfasdfasdfasdfasdfadfad",
  timeleft: "23:02:43",
  avatar: ohhwee,
  heroImage: bear
};

const cards = [
  test1,
  test2,
  test3,
  test4,
  test5,
  test2,
  test3,
  test4,
  test1,
  test2,
  test3,
  test5
];

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
    borderRadius: "8%"
  },
  cardweb: {
    height: "100%",
    display: "flex",
    minHeight: "192px",
    flexDirection: "column",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "8%"
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
    height: "100%",
    padding: 0
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
    marginBottom: 5,
    fontSize: "0.8rem"
  },
  petItemName: {
    color: "#FFFFFF",
    // textAlign: "center",
    // minHeight: "2.375rem",
    fontSize: "0.9rem",
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  topAvatar: {
    display: "flex",
    flex: 1,
    borderRadius: "10%",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 27%, rgba(0,0,0,0) 80%)"
  },
  infoItem: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    // alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: "10%",
    background:
      "linear-gradient(0deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 27%, rgba(0,0,0,0) 80%)",
    padding: "1rem",
    paddingBottom: 10
  },
  userAvatar: {
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.36)",
    margin: "1rem"
  }
}));

export default function HomePage() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const spacing = isMobile ? 3 : 1;
  const xsItem = isMobile ? 4 : 4;
  const smItem = isMobile ? 3 : 6;
  const mdItem = isMobile ? 3 : 6;
  const itemMaxWidth = isMobile ? classes.itemPet : "none";
  const cardLayout = isMobile ? classes.card : classes.cardweb;
  const cardLayoutStatic = isMobile
    ? classes.cardStatic
    : classes.cardWebStatic;

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
      <Divider variant="middle" />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={spacing}>
            <Grid
              item
              xs={xsItem}
              sm={smItem}
              md={mdItem}
              className={itemMaxWidth}
            >
              <Card className={cardLayoutStatic}>
                <CardActionArea
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1
                  }}
                >
                  <CardContent className={classes.cardContentStatic}>
                    <Grid style={{ display: "flex", flex: 1 }}>
                      <Avatar
                        alt="+"
                        src="/broken-image.jpg"
                        className={classes.addButton}
                      />
                    </Grid>
                    <Grid
                      style={{
                        display: "flex",
                        flex: 1,
                        alignItems: "flex-end",
                        justifyContent: "center"
                      }}
                    >
                      <Typography
                        style={{ color: "#FFFFFF", fontSize: "0.9rem" }}
                      >
                        Đăng sản phẩm
                      </Typography>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {cards.map((card, index) => (
              <Grid
                item
                key={index}
                xs={xsItem}
                sm={smItem}
                md={mdItem}
                className={itemMaxWidth}
              >
                <CardMedia
                  className={cardLayout}
                  image={card.heroImage}
                  title="Contemplative Reptile"
                >
                  <CardActionArea
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flex: 1
                    }}
                  >
                    <CardContent className={classes.cardContent}>
                      <Grid className={classes.topAvatar}>
                        <Avatar
                          alt="Remy Sharp"
                          src={card.avatar}
                          className={classes.userAvatar}
                        />
                      </Grid>
                      <Grid className={classes.infoItem}>
                        <Typography className={classes.petTimeLeft}>
                          {card.timeleft}
                        </Typography>
                        <Typography className={classes.petItemName}>
                          {card.name}
                        </Typography>
                      </Grid>
                    </CardContent>
                  </CardActionArea>
                </CardMedia>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

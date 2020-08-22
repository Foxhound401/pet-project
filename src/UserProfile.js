import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CardActionArea from "@material-ui/core/CardActionArea";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationIcon from "@material-ui/icons/Notifications";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import { CardMedia } from "@material-ui/core";
import rick from "./images/rick.png";
import morty from "./images/morty.png";
import beth from "./images/beth.jpeg";
import bug from "./images/bug.png";
import kangaroo from "./images/kangaroo.jpg";
import tiger from "./images/tiger.jpg";
import crocodile from "./images/crocodile.jpg";
import turtle from "./images/turtle.jpg";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import heroUser from "./images/heroUser.png";
import TelegramIcon from "@material-ui/icons/Telegram";
import Divider from "@material-ui/core/Divider";

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
  backgroundImage: {
    height: "12.5265rem",
    backgroundImage: `url(${heroUser})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  textNormal: {
    fontSize: "1.125rem",
    lineHeight: "158.69%",
    textAlign: "center",
    letterSpacing: "0.02em",
    color: "#333333"
  },
  buttonSection: {
    marginTop: "2rem",
    display: "flex",
    flex: 1,
    height: "3rem"
  },
  sendButton: {
    display: "flex",
    flex: 4,
    backgroundColor: "#1877F2",
    borderRadius: 15,
    textTransform: "none",
    fontWeight: "600",
    fontSize: "1rem",
    lineHeight: "158.69%",
    color: "#FBFBFB",
    marginRight: 5
  },
  iconSubmit: {
    marginRight: 10
  },
  dotButton: {
    display: "flex",
    flex: 1,
    height: "100%",
    backgroundColor: "#D7E9FF",
    borderRadius: 15,
    marginLeft: 5
  },
  dotText: {
    display: "flex",
    flex: 1,
    fontSize: "2rem",
    justifyContent: "center",
    alignItems: "center",
    transform: "translateY(-18%)",
    color: "#4F4F4F"
  },
  ratingPoint: {
    fontWeight: "bold",
    paddingLeft: 8
  },
  userSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between"
  },
  bigName: {
    fontSize: "1.375rem"
  },
  wrapAvatar: {
    height: "12rem"
  },
  shadowItem: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    borderRadius: 10
  },
  petItemName: {
    color: "#FFFFFF",
    fontWeight: "500",
    fontSize: "0.75rem",
    lineHeight: "158.69%"
  },
  itemPet: {}
}));

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

const products = [test1, test2, test3, test4];

export default function UserProfile() {
  const classes = useStyles();
  const theme = useTheme();
  const notMobile = useMediaQuery(theme.breakpoints.up("sm"));
  // const spacing = notMobile ? 3 : 1;
  const xsItem = notMobile ? 4 : 4;
  const smItem = notMobile ? 3 : 6;
  const mdItem = notMobile ? 3 : 6;
  const itemMaxWidth = notMobile ? "none" : classes.itemPet;
  const cardLayout = notMobile ? classes.cardweb : classes.card;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative" className={classes.bar}>
        <Toolbar className={classes.header}>
          <Grid>
            <MenuIcon className={classes.icon} />
          </Grid>
          <Grid>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              className={`${classes.textBold}`}
            >
              Morty Smith
            </Typography>
          </Grid>
          <Grid>
            <NotificationIcon className={classes.icon} />
          </Grid>
        </Toolbar>
      </AppBar>
      <Divider variant="middle" />
      <main>
        <Container className={classes.cardImage} maxWidth="md">
          <Grid className={classes.wrapAvatar}>
            <Grid
              container
              className={`${classes.heroSection} ${classes.backgroundImage}`}
            ></Grid>
            <Avatar alt="Remy Sharp" src={morty} className={classes.avatar} />
          </Grid>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid className={classes.userSection}>
            <Typography className={`${classes.textBold} ${classes.bigName}`}>
              Morty Smith
            </Typography>
            <Typography>
              Điểm uy tín
              <Box component="span" className={classes.ratingPoint}>
                4.9
              </Box>
            </Typography>
          </Grid>
          <Grid className={classes.buttonSection}>
            <Button
              startIcon={<TelegramIcon className={classes.iconSubmit} />}
              className={classes.sendButton}
            >
              Nhắn tin
            </Button>
            <CardActionArea className={classes.dotButton}>
              <Typography className={classes.dotText}>...</Typography>
            </CardActionArea>
          </Grid>
        </Container>
        <Container className={classes.cardGrid}>
          <Typography
            style={{
              borderRadius: 15,
              textTransform: "uppercase",
              fontWeight: "normal",
              fontSize: "0.875rem",
              lineHeight: "158.69%",
              letterSpacing: "0.05em",
              color: "#828282"
            }}
          >
            Sản phẩm đã đấu giá
          </Typography>

          <Grid container spacing={1} style={{ marginTop: 15 }}>
            {products.map((card, index) => (
              <Grid
                item
                key={index}
                xs={xsItem}
                sm={smItem}
                md={mdItem}
                className={itemMaxWidth}
              >
                <CardActionArea className={classes.shadowItem}>
                  <CardMedia
                    className={cardLayout}
                    image={card.heroImage}
                    title="Contemplative Reptile"
                  >
                    <Grid
                      style={{
                        display: "flex",
                        flex: 1,
                        borderRadius: "10%",
                        width: "100%"
                      }}
                    ></Grid>
                    <Grid
                      style={{
                        display: "flex",
                        flex: 1,
                        borderRadius: "10%",
                        width: "100%",
                        background:
                          "linear-gradient(0deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 27%, rgba(0,0,0,0) 80%)"
                      }}
                    >
                      <CardContent
                        className={classes.cardContent}
                        style={{
                          display: "flex",
                          flex: 1,
                          padding: "0.625rem",
                          justifyContent: "center",
                          alignItems: "flex-end"
                        }}
                      >
                        <Typography className={classes.petItemName}>
                          {card.name}
                        </Typography>
                      </CardContent>
                    </Grid>
                  </CardMedia>
                </CardActionArea>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

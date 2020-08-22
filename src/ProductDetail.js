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
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import Avatar from "@material-ui/core/Avatar";
import morty from "./images/morty.png";
import kangaroo from "./images/kangaroo.jpg";
import tiger from "./images/tiger.jpg";
import crocodile from "./images/crocodile.jpg";
import bear from "./images/bear.jpg";
import Carousel from "react-material-ui-carousel";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import GradeTwoToneIcon from "@material-ui/icons/GradeTwoTone";
import Divider from "@material-ui/core/Divider";

function PetImage(props) {
  return (
    <Grid style={{ display: "flex", flex: 1, minHeight: "15rem" }}>
      <CardActionArea
        style={{
          backgroundImage: `url(${props.item.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: 15
        }}
      ></CardActionArea>
    </Grid>
  );
}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
    fontSize: 20
  },
  cardGrid: {
    padding: theme.spacing(3),
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(4)
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
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "rgba(255, 255, 255, 0.36)",
    width: "3rem",
    height: "3rem",
    margin: "0.8rem",
    marginLeft: "0"
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
  currentSection: {},
  currentPrice: {},
  currentCurrency: {},
  currentBoss: {},
  titleSection: {},
  infoSection: {},
  priceStep: {},
  titleName: {},
  infoTitle: {},
  description: {}
}));

export default function ProductDetail() {
  const classes = useStyles();
  // const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  const items = [
    {
      name: "Lear Music Reader",
      image: kangaroo,
      price: "350.000",
      currency: "đ"
    },
    {
      name: "Hash Code 2019",
      image: tiger,
      price: "300.000",
      currency: "đ"
    },
    {
      name: "Terrio",
      image: bear,
      price: "200.000",
      currency: "đ"
    },
    {
      name: "React Carousel",
      image: crocodile,
      price: "150.000",
      currency: "đ"
    }
  ];

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
              Chi tiết sản phẩm
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
          <Grid>
            <CardContent className={classes.cardUserDateInfo}>
              <Grid className={classes.userContainer}>
                <Avatar
                  alt="Remy Sharp"
                  src={morty}
                  className={classes.avatar}
                />

                <Typography className={classes.username}>
                  Morty Mother fucker
                </Typography>
              </Grid>
              <Grid className={classes.avatarLeft}>
                <Typography className={classes.dateRight}>
                  1 ngày, 23h 14p 22g
                </Typography>
              </Grid>
            </CardContent>
          </Grid>
          <Grid>
            <Carousel
              className={classes.carousel}
              autoPlay={false}
              timer={500}
              animation={"fade"}
              indicators={true}
              timeout={500}
              navButtonsAlwaysVisible={false}
            >
              {items.map((item, index) => {
                return <PetImage item={item} key={index} />;
              })}
            </Carousel>
          </Grid>
          <Grid
            style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
            className={classes.titleSection}
          >
            <Typography
              className={classes.titleName}
              style={{
                color: "#333333",
                fontSize: "1.5rem",
                fontWeight: "bold",
                paddingBottom: 5
              }}
            >
              Green tree frog
            </Typography>

            <Typography
              className={classes.priceStep}
              style={{
                color: "#1877F2",
                textTransform: "uppercase",
                letterSpacing: "0.05em"
              }}
            >
              Bước giá 50.000
              <Box
                component="span"
                style={{
                  textTransform: "none"
                }}
              >
                đ
              </Box>
            </Typography>
          </Grid>
          <Grid
            style={{ display: "flex", flexDirection: "row" }}
            className={classes.priceSection}
          >
            <Typography
              style={{
                display: "flex",
                flex: 1,
                alignItems: "flex-end",
                fontSize: "2rem",
                fontWeight: "bold",
                color: "#333333"
              }}
              className={classes.currentPrice}
            >
              1.250.000
              <Box
                component="span"
                style={{
                  paddingLeft: 5,
                  textTransform: "none",
                  fontSize: "1.5rem",
                  letterSpacing: "0.02em",
                  fontStyle: "italic",
                  fontWeight: "normal",
                  color: "#333333"
                }}
                className={classes.currentCurrency}
              >
                đ
              </Box>
            </Typography>
            <Typography
              style={{
                display: "flex",
                flex: 1,
                justifyContent: "flex-end",
                alignItems: "center",
                fontSize: "1.3em",
                letterSpacing: "0.02em",
                fontStyle: "italic",
                fontWeight: "normal"
              }}
              className={classes.currentBoss}
            >
              Boss: Vy Vũ
            </Typography>
          </Grid>
          <Grid
            style={{ paddingTop: "1.625rem", paddingBottom: 23 }}
            className={classes.infoSection}
          >
            <Typography
              style={{
                paddingBottom: 5,
                color: "#333333",
                fontWeight: "bold"
              }}
              className={classes.infoTitle}
            >
              Thông tin sản phẩm
            </Typography>
            <CardActionArea>
              <Typography
                style={{
                  height: "4.5rem",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  color: "#898AA0",
                  fontStyle: "normal",
                  lineHeight: "158.69%",
                  fontWeight: "normal"
                }}
                className={classes.description}
              >
                The Internet Protocol (IP) is the address system of the Internet
                and has the core function of delivering packets of information
                from a source device to a target device. IP is the primary way
                in which network connections are made, and it establishes the
                basis of the Internet. IP does not handle packet ordering or
                error checking. Such functionality requires another protocol,
                typically TCP.
              </Typography>
            </CardActionArea>
          </Grid>
          <Grid style={{ marginBottom: 28 }}>
            <Grid
              style={{
                display: "flex",
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#F3F3F9",
                borderRadius: 15,
                height: "3.25rem"
              }}
            >
              <Button
                style={{ fontSize: "2rem", color: "#1877F2", lineHeight: "0" }}
              >
                -
              </Button>
              <Typography
                style={{
                  alignSelf: "center",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  color: "#333333",
                  letterSpacing: "0.02em",
                  lineHeight: "158.69%"
                }}
              >
                1.300.000
              </Typography>
              <Button
                style={{
                  fontSize: "1.8rem",
                  color: "#1877F2",
                  lineHeight: "0"
                }}
              >
                +
              </Button>
            </Grid>
            <Button
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "#1877F2",
                fontSize: "1.25rem",
                color: "#FBFBFB",
                width: "100%",
                marginTop: 19,
                borderRadius: 15,
                textTransform: "none",
                height: "3.25rem"
              }}
            >
              Đấu giá ngay
            </Button>
          </Grid>
          <Grid style={{ marginTop: 20 }}>
            <Typography
              style={{
                textTransform: "uppercase",
                color: "#828282",
                fontSize: "0.875rem",
                lineHeight: "158.69%",
                marginBottom: 18
              }}
            >
              Người tham gia
            </Typography>
            {items.map((item, index) => (
              <Grid
                key={index}
                style={{
                  paddingTop: 15,
                  paddingBottom: 15
                }}
              >
                {index === 0 ? (
                  <Box
                    style={{
                      display: "flex",
                      flex: 1,
                      justifyContent: "space-between"
                    }}
                  >
                    <Box
                      style={{
                        display: "flex",
                        flex: 1
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: "bold",
                          color: "#333333",
                          fontSize: "1.2rem",
                          letterSpacing: "0.02em"
                        }}
                      >
                        {item.name}
                      </Typography>
                      <GradeTwoToneIcon
                        style={{ paddingLeft: 5 }}
                      ></GradeTwoToneIcon>
                    </Box>
                    <Typography
                      style={{
                        fontWeight: "bold",
                        color: "#333333",
                        fontSize: "1.2rem",
                        letterSpacing: "0.02em"
                      }}
                    >
                      {item.price}
                      <Box
                        component="span"
                        style={{ fontWeight: "normal", paddingLeft: 5 }}
                      >
                        {item.currency}
                      </Box>
                    </Typography>
                  </Box>
                ) : (
                  <Box
                    style={{
                      display: "flex",
                      flex: 1,
                      justifyContent: "space-between"
                    }}
                  >
                    <Typography
                      style={{
                        color: "#333333",
                        fontSize: "1.125rem",
                        letterSpacing: "0.02em"
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      style={{
                        color: "#333333",
                        fontSize: "1.125rem",
                        letterSpacing: "0.02em"
                      }}
                    >
                      {item.price}
                      <Box
                        component="span"
                        style={{ fontWeight: "normal", paddingLeft: 5 }}
                      >
                        {item.currency}
                      </Box>
                    </Typography>
                  </Box>
                )}
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

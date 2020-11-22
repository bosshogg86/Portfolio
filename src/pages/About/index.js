import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import headshot from "../../assets/me.jpg";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(8),
  },
  textStyle: {
    textAlign: "center",
  },
  image: {
    width: "40%",
    height: "auto",
    display: "flex",
    margin: "auto",
    marginBottom: "2rem",
    borderRadius: "50%",
    border: "1px solid #000",
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <h1 className={classes.textStyle}>Hi, I'm Jeff Hogg.</h1>
      <img className={classes.image} src={headshot} alt="Head shot" />
      <h3 className={classes.textStyle}>
        I'm a full-stack developer. Check out some of my projects!
      </h3>
    </Container>
  );
};

export default Home;

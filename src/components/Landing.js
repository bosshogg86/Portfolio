import React from "react";
import { Button, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import headshot from "../assets/me.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
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
  btn: {
    marginTop: theme.spacing(1),
    transition: "transform 200ms",
    "&:hover": {
      transform: "scale(1.08)",
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <h1 className={classes.textStyle}>Hi, I'm Jeff Hogg.</h1>
      <img className={classes.image} src={headshot} alt="Head shot" />
      <h3>I'm a full-stack developer. Check out some of my projects!</h3>
      <Button
        className={classes.btn}
        variant="outlined"
        component={Link}
        to={"/projects"}
      >
        Portfolio
      </Button>
    </Container>
  );
};

export default Home;

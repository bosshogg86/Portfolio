import React from "react";
import { Container, Grow } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import headshot from "../../images/me.jpg";

const useStyles = makeStyles(theme => ({
  textStyle: {
    // position: "absolute",
    textAlign: "center",
    // top: "50%",
    // left: 0,
    // right: 0,
    // bottom: 0,
    // color: "white",
  },
  image: {
    width: "50%",
    height: "auto",
    display: "flex",
    margin: "auto",
    marginBottom: "2rem",
    borderRadius: "50%",
  },
}));
const Home = () => {
  const { textStyle, image } = useStyles();
  return (
    // <>
    <Grow in={true} timeout={1000}>
      <Container>
        <h1 className={textStyle}>Hi, I'm Jeff Hogg.</h1>
        <img className={image} src={headshot} alt="Head shot" />
        <h3 className={textStyle}>
          I'm a full-stack web-developer. Check out some of my projects!
        </h3>
      </Container>
    </Grow>
    // </>
  );
};

export default Home;

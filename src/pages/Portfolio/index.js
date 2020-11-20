import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import ironDojo from "../../images/ironDojo-ss.png";
import tkrSearch from "../../images/tkrSearch-ss.png";
import discord from "../../images/discord-ss.png";
import netflix from "../../images/netflix-ss.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: "center",
    marginTop: theme.spacing(10),
  },
  mt: {
    marginTop: theme.spacing(4),
  },
  img: {
    objectFit: "contain",
    maxHeight: "25rem",
    width: "100%",
    border: "1px solid #000",
    borderRadius: "8px",
    transition: "transform 200ms",
    "&:hover": {
      transform: "scale(1.08)",
    },
    cursor: "pointer",
  },
  text: {
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(8),
  },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      {/* <h1>Portfolio</h1> */}
      <Grid container spacing={3}>
        <Grid item md={6} className={classes.mt}>
          <a href="https://the-iron-dojo.herokuapp.com/" target="_blank">
            <img
              className={classes.img}
              src={ironDojo}
              alt={"Iron Dojo Screenshot"}
            />
          </a>
        </Grid>
        <Grid item md={6}>
          <Container className={classes.text}>
            <h2>Iron Dojo</h2>
            <p>
              A react based web application built to track your strength and
              conditioning sessions over time. Create and log your workouts,
              then view your progress displayed in a chart. Come to the Iron
              Dojo for maximum gains!
            </p>
          </Container>
        </Grid>
        <Grid item md={6}>
          <Container className={classes.text}>
            <h2>Netflix-clone</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              officiis assumenda nostrum magnam veritatis, quis impedit sunt id
              quaerat pariatur similique harum enim nobis quisquam odio aut
              accusamus animi repellat.
            </p>
          </Container>
        </Grid>
        <Grid item md={6} className={classes.mt}>
          <a href="" target="_blank">
            <img
              className={classes.img}
              src={netflix}
              alt={"Discord-clone Screenshot"}
            />
          </a>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={6} className={classes.mt}>
          <a href="https://discord-47ed9.web.app/" target="_blank">
            <img
              className={classes.img}
              src={discord}
              alt={"Discord-clone Screenshot"}
            />
          </a>
        </Grid>
        <Grid item md={6}>
          <Container className={classes.text}>
            <h2>Discord-clone</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              officiis assumenda nostrum magnam veritatis, quis impedit sunt id
              quaerat pariatur similique harum enim nobis quisquam odio aut
              accusamus animi repellat.
            </p>
          </Container>
        </Grid>
        <Grid item md={6}>
          <Container className={classes.text}>
            <h2>tkrSearch</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              officiis assumenda nostrum magnam veritatis, quis impedit sunt id
              quaerat pariatur similique harum enim nobis quisquam odio aut
              accusamus animi repellat.
            </p>
          </Container>
        </Grid>
        <Grid item md={6} className={classes.mt}>
          <a
            href="https://bhagatabhijeet.github.io/tkrsearch/index.html"
            target="_blank"
          >
            <img
              className={classes.img}
              src={tkrSearch}
              alt={"tkrSearch Screenshot"}
            />
          </a>
        </Grid>
      </Grid>
    </Container>
  );
}

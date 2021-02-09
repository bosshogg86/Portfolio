import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button, Container } from '@material-ui/core';
import ironDojo from '../assets/ironDojo-ss.png';
import tkrSearch from '../assets/tkrSearch-ss.png';
import discord from '../assets/discord-ss.png';
import netflix from '../assets/netflix-ss.png';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    marginTop: theme.spacing(10),
  },
  mt: {
    marginTop: theme.spacing(4),
  },
  img: {
    objectFit: 'contain',
    maxHeight: '25rem',
    width: '100%',
    border: '1px solid #000',
    borderRadius: '8px',
    transition: 'transform 200ms',
    '&:hover': {
      transform: 'scale(1.08)',
    },
    cursor: 'pointer',
  },
  text: {
    marginTop: theme.spacing(4),
    paddingTop: theme.spacing(8),
  },
  btn: {
    marginTop: theme.spacing(4),
    transition: 'transform 200ms',
    '&:hover': {
      transform: 'scale(1.08)',
    },
  },
  link: { color: '#4269f5' },
}));

export default function Portfolio() {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      {/* <h1>Portfolio</h1> */}
      <Grid container spacing={3}>
        <Grid item md={6} className={classes.mt}>
          <a
            href="https://the-iron-dojo.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={classes.img}
              src={ironDojo}
              alt={'Iron Dojo Screenshot'}
            />
          </a>
        </Grid>
        <Grid item md={6}>
          <Container className={classes.text}>
            <h2>Iron Dojo</h2>
            <p>
              A react based web application built to track your strength and
              conditioning sessions over time. Create and log your workouts,
              then view your progress displayed in a chart.
            </p>
            <a
              className={classes.link}
              href="https://github.com/jeffhogg86/ironDojo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo - https://github.com/jeffhogg86/Iron-Dojo
            </a>
            <br></br>
            <a
              className={classes.link}
              href="https://iron-dojo.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Deployment - https://iron-dojo.herokuapp.com/
            </a>
          </Container>
        </Grid>
        <Grid item md={6}>
          <Container className={classes.text}>
            <h2>Netflix-clone</h2>
            <p>
              A Netflix clone built with react. Makes an API call to render
              movies and shows by category. Also, plays that movie/show's
              corresponding trailer on a click. Deployed with firebase.
            </p>
            <a
              className={classes.link}
              href="https://github.com/jeffhogg86/netflix-clone"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo - https://github.com/jeffhogg86/netflix-clone
            </a>
            <br></br>
            <a
              className={classes.link}
              href="https://netflix-clone-23b92.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Deployment - https://netflix-clone-23b92.web.app/
            </a>
          </Container>
        </Grid>
        <Grid item md={6} className={classes.mt}>
          <a
            href="https://netflix-clone-23b92.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={classes.img}
              src={netflix}
              alt={'Discord-clone Screenshot'}
            />
          </a>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item md={6} className={classes.mt}>
          <a
            href="https://discord-47ed9.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={classes.img}
              src={discord}
              alt={'Discord-clone Screenshot'}
            />
          </a>
        </Grid>
        <Grid item md={6}>
          <Container className={classes.text}>
            <h2>Discord-clone</h2>
            <p>
              A Discord clone built with react. Demonstrates basic Discord
              functionality, including google login, creating a channel and
              sending messages.
            </p>
            <a
              className={classes.link}
              href="https://github.com/jeffhogg86/discord-clone"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo - https://github.com/jeffhogg86/discord-clone
            </a>
            <br></br>
            <a
              className={classes.link}
              href="https://discord-47ed9.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              Deployment - https://discord-47ed9.web.app/
            </a>
          </Container>
        </Grid>
        <Grid item md={6}>
          <Container className={classes.text}>
            <h2>tkrSearch</h2>
            <p>
              tkrSearch is a simple stock and cryptocurrency search application.
              The user can search by ticker symbols and is presented with useful
              information such as current price, previous close, 52 week high
              and 52 week low.
            </p>
            <a
              className={classes.link}
              href="https://github.com/jeffhogg86/tkrsearch"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repo - https://github.com/jeffhogg86/tkrsearch
            </a>
            <br></br>
            <a
              className={classes.link}
              href="https://bhagatabhijeet.github.io/tkrsearch/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Deployment - https://bhagatabhijeet.github.io/tkrsearch/index.html
            </a>
          </Container>
        </Grid>
        <Grid item md={6} className={classes.mt}>
          <a
            href="https://bhagatabhijeet.github.io/tkrsearch/index.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className={classes.img}
              src={tkrSearch}
              alt={'tkrSearch Screenshot'}
            />
          </a>
        </Grid>
      </Grid>
      <Button
        className={classes.btn}
        variant="outlined"
        component={Link}
        to={'/contact'}
      >
        Contact Me
      </Button>
    </Container>
  );
}

import React from 'react';
import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Profile from './Profile';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(8),
    textAlign: 'center',
  },
  image: {
    width: '40%',
    height: 'auto',
    display: 'flex',
    margin: 'auto',
    marginBottom: '2rem',
    borderRadius: '50%',
    border: '1px solid #000',
  },
  btn: {
    marginTop: theme.spacing(1),
    transition: 'transform 200ms',
    '&:hover': {
      transform: 'scale(1.08)',
    },
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Profile />
    </Container>
  );
};

export default Home;

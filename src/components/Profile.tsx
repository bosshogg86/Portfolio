import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Container,
  Typography,
  makeStyles,
} from '@material-ui/core';
import avatar from '../assets/me.jpg';
import { Link } from 'react-router-dom';

const user = {
  city: 'Napa',
  state: 'CA',
  name: 'Jeff Hogg',
};

const useStyles = makeStyles(() => ({
  avatar: {
    height: 250,
    width: 250,
    marginBottom: 25,
  },
  profile: {
    alignItems: 'center',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Profile = () => {
  const classes = useStyles();

  return (
    <Box className={classes.profile}>
      <Avatar className={classes.avatar} src={avatar} />
      <Typography color="textPrimary" gutterBottom variant="h3">
        {user.name}
      </Typography>
      <Typography color="textSecondary" variant="body1">
        {`${user.city}, ${user.state}`}
      </Typography>

      <Typography>
        <Container>
          <p>
            Full-stack web developer currently working with:
            <br />
            Javascript | Python | React | Redux | TypeScript | Node.js | Express
            | MongoDB | MySQL | Git | Heroku | AWS
            <br />
            Check out my portfolio!
          </p>
        </Container>
      </Typography>
      <Button variant="outlined" component={Link} to={'/portfolio'}>
        Portfolio
      </Button>
    </Box>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;

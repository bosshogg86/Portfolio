import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
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
  root: {},
  avatar: {
    height: 250,
    width: 250,
    marginBottom: 25,
  },
}));

const Profile = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box alignItems="center" display="flex" flexDirection="column">
          <Avatar className={classes.avatar} src={avatar} />
          <Typography color="textPrimary" gutterBottom variant="h3">
            {user.name}
          </Typography>
          <Typography color="textSecondary" variant="body1">
            {`${user.city}, ${user.state}`}
          </Typography>

          <Typography>
            <Container>
              <ul>
                <li>
                  Full stack developer with a background in broadcast
                  communications.
                </li>
                <li>Currently woking with the MERN stack.</li>
                <li>
                  Javascript, react, redux, node.js, express, mongoDB and MySQL.
                </li>
                <li>Check out my portfolio!</li>
              </ul>
            </Container>
          </Typography>
          <Button
            className={classes.btn}
            variant="outlined"
            component={Link}
            to={'/projects'}
          >
            Portfolio
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;

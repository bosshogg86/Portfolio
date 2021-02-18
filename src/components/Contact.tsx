import React, { useState } from 'react';
import {
  Button,
  Container,
  makeStyles,
  Paper,
  TextField,
  Snackbar,
  Typography,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import emailjs from 'emailjs-com';
import { EmailRounded, GitHub, LinkedIn } from '@material-ui/icons';

function Alert(props: any) {
  return <MuiAlert elevation={6} variant="outlined" {...props} />;
}

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: 'center',
    marginTop: theme.spacing(10),
  },
  messages: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(2),
  },
  btn: {
    margin: theme.spacing(1),
    transition: 'transform 200ms',
    '&:hover': {
      transform: 'scale(1.1)',
      color: '#212121',
    },
  },
  icon: {
    marginLeft: 10,
  },
  title: {
    paddingTop: theme.spacing(2),
  },
}));

const Contact = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  function sendEmail(e: any) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_gz2q92n',
        'contact_form',
        e.target,
        'user_152jYVHOy4K9Du2ETYH3T'
      )
      .then(
        result => {
          console.log(result.text);

          setOpen(true);
        },
        error => {
          console.log(error.text);
        }
      );
  }
  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>
        <h2>Contact Me</h2>
      </Typography>
      <Button
        href="mailto: jeffhogg86@gmail.com"
        target="_blank"
        rel="noreferrer"
        variant="outlined"
        className={classes.btn}
      >
        JeffHogg86@gmail.com
        <EmailRounded className={classes.icon} />
      </Button>
      <Typography className={classes.title}>
        <h2>Send a message</h2>
      </Typography>
      <form className="contact-form" onSubmit={sendEmail}>
        <Container className={classes.messages}>
          <div>
            <TextField
              className={classes.input}
              id="user_name"
              name="user_name"
              label="Name"
              variant="outlined"
            />

            <TextField
              className={classes.input}
              id="user_email"
              name="user_email"
              label="Email Address"
              variant="outlined"
            />
          </div>

          <TextField
            className={classes.input}
            id="message"
            name="message"
            label="Message"
            multiline
            rows={8}
            variant="outlined"
          />
          <div>
            <Button
              type="submit"
              value="Send"
              className={classes.btn}
              variant="contained"
            >
              Submit
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Email Sent!
              </Alert>
            </Snackbar>
          </div>
        </Container>
      </form>
    </Container>
  );
};

export default Contact;

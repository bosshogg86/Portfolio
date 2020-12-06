import React, { useState } from "react";
import {
  Button,
  Container,
  makeStyles,
  Paper,
  TextField,
  Snackbar,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import emailjs from "emailjs-com";

function Alert(props) {
  return <MuiAlert elevation={6} variant="outlined" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  container: {
    textAlign: "center",
    marginTop: theme.spacing(10),
  },
  messages: {
    display: "flex",
    flexDirection: "column",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(4),
  },
  input: {
    margin: theme.spacing(2),
  },
  btn: {
    marginTop: theme.spacing(2),
  },
}));

const Contact = () => {
  const classes = useStyles();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gz2q92n",
        "contact_form",
        e.target,
        "user_152jYVHOy4K9Du2ETYH3T"
      )
      .then(
        (result) => {
          console.log(result.text);
          document.getElementById("user_name").value = "";
          document.getElementById("user_email").value = "";
          document.getElementById("message").value = "";
          setOpen(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <Container className={classes.container}>
      <Paper>
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
              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert onClose={handleClose} severity="success">
                  Email Sent!
                </Alert>
              </Snackbar>
            </div>
          </Container>
        </form>
      </Paper>
    </Container>
  );
};

export default Contact;

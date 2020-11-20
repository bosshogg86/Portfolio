import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button, Container, makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
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
  return (
    <Container className={classes.container}>
      <Paper>
        <form>
          <Container className={classes.messages}>
            <div>
              <TextField
                className={classes.input}
                id="name"
                label="Name"
                variant="outlined"
              />

              <TextField
                className={classes.input}
                id="email"
                label="Email Address"
                variant="outlined"
              />
            </div>

            <TextField
              className={classes.input}
              id="message"
              label="Message"
              multiline
              rows={8}
              variant="outlined"
            />
            <div>
              <Button className={classes.btn} variant="contained">
                Submit
              </Button>
            </div>
          </Container>
        </form>
      </Paper>
    </Container>
  );
};

export default Contact;

import { Container, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
  container: {
    textAlign: "center",
    marginTop: theme.spacing(10),
  },
  pad: { padding: theme.spacing(4) },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container}>
        <Paper>
          <Container className={classes.pad}>
            <h1>Resume</h1>
            <h2>Coming Soon!</h2>
          </Container>
        </Paper>
      </Container>
    </div>
  );
};

export default Resume;

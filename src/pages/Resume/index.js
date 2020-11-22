import { Container, makeStyles, Paper } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(10),
  },
  resume: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.container}>
        <Paper className={classes.resume}>
          <iframe
            src={
              "https://docs.google.com/document/d/e/2PACX-1vR2iN-F-cg_cmUXfCrlslL9j5xuxj8908RDXvUuMYauz-65RyrZt9PNcMz_n3DktKV2XHZsadgZ71Nc/pub?embedded=true"
            }
            title="resume"
            width="100%"
            height="825"
          ></iframe>
        </Paper>
      </Container>
    </div>
  );
};

export default Resume;

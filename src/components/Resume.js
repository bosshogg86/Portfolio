import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resume from '../assets/Resume2020.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(5),
    display: 'flex',
    justifyContent: 'center',
  },
  resume: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
}));

const Resume = () => {
  const classes = useStyles();
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className={classes.container}>
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default Resume;

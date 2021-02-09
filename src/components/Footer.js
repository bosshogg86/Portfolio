import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GitHub, LinkedIn, Email } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'flex',
    justifyContent: 'center',

    marginTop: theme.spacing(1),
  },
  icon: {
    margin: '1rem',
    color: 'white',
    fontSize: '2.5rem',
    transition: 'transform 200ms',
    '&:hover': {
      transform: 'scale(1.4)',
      color: '#212121',
    },
  },
}));

export default function LabelBottomNavigation() {
  const { footer, icon } = useStyles();

  return (
    <div className={footer}>
      <a
        href="http://www.linkedin.com/in/jeffhogg/"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedIn className={icon} />
      </a>
      <a href="http://github.com/jeffhogg86" target="_blank" rel="noreferrer">
        <GitHub className={icon} />
      </a>
      <a href="mailto: jeffhogg86@gmail.com" target="_blank" rel="noreferrer">
        <Email className={icon} />
      </a>
    </div>
  );
}

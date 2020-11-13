import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { GitHub, Reddit, Facebook, LinkedIn } from "@material-ui/icons";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    display: "flex",
    justifyContent: "center",
  },
  button: {
    size: "large",
  },
});

export default function LabelBottomNavigation() {
  const { footer, button } = useStyles();
  // const [value, setValue] = React.useState("recent");

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  return (
    <div className={footer}>
      <Button
        className={button}
        target="_blank"
        href="//www.linkedin.com/in/jeffhogg/"
      >
        <LinkedIn />
      </Button>
      <Button target="_blank" href="//github.com/bosshogg86">
        <GitHub />
      </Button>
      <Button target="_blank" href="//www.reddit.com/user/BossHogg86">
        <Reddit />
      </Button>
      <Button target="_blank" href="//www.facebook.com/jeffhogg86/">
        <Facebook />
      </Button>
      {/* <BottomNavigation className={root}>
        <BottomNavigationAction
          label="LinkedIn"
          icon={<LinkedIn />}
          component={Link}
          target="_blank"
          to="//www.linkedin.com/in/jeffhogg/"
        />
        <BottomNavigationAction
          label="GitHub"
          icon={<GitHub />}
          component={Link}
          target="_blank"
          to="//github.com/bosshogg86"
        />
        <BottomNavigationAction
          label="Reddit"
          icon={<Reddit />}
          component={Link}
          target="_blank"
          to="//www.reddit.com/user/BossHogg86"
        />
        <BottomNavigationAction
          label="Facebook"
          icon={<Facebook />}
          component={Link}
          target="_blank"
          to="//www.facebook.com/jeffhogg86/"
        />
      </BottomNavigation> */}
    </div>
  );
}

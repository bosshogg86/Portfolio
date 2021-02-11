import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#212121",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Switch>
          <Route path={"/projects"} component={Portfolio} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/resume"} component={Resume} />
          <Route exact path={"/"} component={About} />
        </Switch>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

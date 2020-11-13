import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { teal, deepOrange } from "@material-ui/core/colors";
import { CssBaseline } from "@material-ui/core";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: deepOrange,
    secondary: teal,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Router basename={process.env.PUBLIC_URL}> */}
      <Router>
        <Navbar />
        <Switch>
          <Route path={"/portfolio"} component={Portfolio} />
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

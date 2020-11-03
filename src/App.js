import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Switch,
  // Redirect,
} from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch>
          {/* <Route path={"/about"} component={About} />
          <Route path={"/projects"} component={Projects} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/resume"} component={Resume} />
          <Route path={"/"} component={Home} /> */}
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;

import React from "react";
// Stylesheets
import "./App.css";
// App components used
import { MainApp } from "./components/schedule";
import { HomePage } from "./components/homePage";
import ErrorPage from "./components/errorPageComponent";
// Router connections
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/schedule" component={MainApp} />
        <Route exact path="/" component={HomePage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  );
}

export default App;

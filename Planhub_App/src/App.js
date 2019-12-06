import React from "react";
// Stylesheets
import "./App.css";
// App components used
import { MainApp } from "./components/schedule";
import { HomePage } from "./components/homePage";
import { HelpPage } from "./components/landingPageComponent";
import ErrorPage from "./components/errorPageComponent";
// Router Connections API
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

function App() {
  // Go through each route, depending on what webpage is specified
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/schedule" component={MainApp} />
        <Route exact path="/help" component={HelpPage} />
        <Route exact path="/404" component={ErrorPage} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;

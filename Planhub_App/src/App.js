import React from "react";
import "./App.css";
import { MainApp } from './components/schedule'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from './components/homePage'

function App() {
  return (
    <Router>
      <Route exact path="/schedule" component={MainApp} />
      <Route path="/" component={HomePage} />
    </Router>
  );
}

export default App;
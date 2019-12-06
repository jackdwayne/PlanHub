import React from "react";
import "./App.css";
import { MainApp } from './components/appComponent'
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from './components/homePage'

function App() {
  return (
    <Router>
      <Route path="/appComponent" component={MainApp} />
      <Route path="/" component={HomePage} />
    </Router>
  );
}

export default App;
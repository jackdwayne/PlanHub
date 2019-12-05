import React from "react";
import "./App.css";
import { MainApp } from './components/appComponent'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return(
    <Router>
      <br/>
      <Route path="/" component={MainApp} />
     
    </Router>
  );
}

  export default App;
import React, { Component } from "react";
import { Menu, Container, Image, Button, Table, Form, Label } from "semantic-ui-react";
import "../App.css";


export class HelpPage extends Component {
  render() {
    return (
      // Semantic UI stuff
      // Menu Section: Making the top menu
      // Container Section: The table menu
      <div className="app">
        <Menu color="blue" borderless attached inverted>
          <Menu.Item header>PlanHub</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item href="/" name="Home" />
            <Menu.Item href="/schedule" name="Schedule" />
            <Menu.Item href="/help" name="Help" />
          </Menu.Menu>
        </Menu>
      </div>
    );
  }
}

export default HelpPage;

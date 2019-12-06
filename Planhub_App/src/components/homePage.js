import React, { Component } from "react";
import "../App.css";
import { Menu, Container, Button } from "semantic-ui-react";

export class HomePage extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.myRef = React.createRef();
  }

  // Render the page
  render() {
    return (
      // Semantic UI stuff
      // Menu Section: Making the top menu
      // Container Section: The table menu
      <div className="homepage">
        <Menu color="blue" borderless attached inverted>
          <Menu.Item header>PlanHub</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item href="/" name="Home" />
            <Menu.Item href="/schedule" name="Schedule" />
            <Menu.Item href="/help" name="Help" />
          </Menu.Menu>
        </Menu>
        <Container className="buttonContainer" textAlign="center">
          <Button className="button1" type="submit" color="blue" href="/help">
            New User
          </Button>
          <Button
            className="button1"
            type="submit"
            color="blue"
            href="/schedule"
          >
            Returning User
          </Button>
        </Container>
      </div>
    );
  }
}

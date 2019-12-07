import React, { Component } from "react";
import "../App.css";
import { Menu, Container, Button } from "semantic-ui-react";

export default class HomePage extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.myRef = React.createRef();
    this.goToHelp = this.goToHelp.bind(this);
    this.goToSchedule = this.goToSchedule.bind(this);
  }

  goToSchedule() {
    this.props.history.push("/schedule");
  }

  goToHelp() {
    this.props.history.push("/help");
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
          <Button
            className="button1"
            type="submit"
            color="blue"
            onClick={this.goToHelp}
          >
            New User
          </Button>
          <Button
            className="button1"
            type="submit"
            color="blue"
            onClick={this.goToSchedule}
          >
            Returning User
          </Button>
        </Container>
      </div>
    );
  }
}

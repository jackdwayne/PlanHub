import React, { Component } from "react";
import "./App.css";
import { Menu, Container, Input, Button, Table } from "semantic-ui-react";

class App extends Component {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
      tasks:[

      ]
  
    }
 }

  handleAddClick = () => {
    alert('Clicked!')
  }

  render() {
    return (
      <div className="app">
        <Menu color="blue" borderless inverted>
          <Menu.Item header>PlanHub</Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item name="Home" />
            <Menu.Item name="How To" />
            <Menu.Item name="Login" />
          </Menu.Menu>
        </Menu>
        <Container textAlign="center">
          <Input focus placeholder="Enter task"></Input>
          <Button color="blue" onClick={this.handleAddClick}>Add</Button>
          <Table>
            <Table.Row>Hello</Table.Row>
          </Table>
          <Button color='blue'>Save</Button>
        </Container>
      </div>
    );
  }
}

export default App;

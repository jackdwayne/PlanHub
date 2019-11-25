import React, { Component } from "react";
import "./App.css";
import { Menu, Container, Input, Button, Table, Form } from "semantic-ui-react";

const options = [
  { text: "1" },
  { text: "2" },
  { text: "3" },
  { text: "4" },
  { text: "5" }
];
class App extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      tasks: [
        {
          date: "Date",
          data: "Task",
          priority: "Priority"
        },
        {
          date: "10/20/2019",
          data: "Add functionality to react app",
          priority: 5
        }
      ]
    };
  }

  handleAddClick = () => {
    alert("Clicked!");
  };
  renderTableData() {
    return this.state.tasks.map((task, index) => {
      const { date, data, priority } = task; //destructuring
      return (
        <Table.Row key={date}>
          <Table.Cell>{date}</Table.Cell>
          <Table.Cell>{data}</Table.Cell>
          <Table.Cell>{priority}</Table.Cell>
        </Table.Row>
      );
    });
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
          <Form>
            {" "}
            <Form.Group widths="equal">
              <Form.Input fluid label="Date" placeholder="Enter Date" />
              <Form.Input fluid label="Task" placeholder="Enter Task" />
              <Form.Select
                fluid
                label="Priority"
                options={options}
                placeholder="Priority"
              />
            </Form.Group>
          </Form>

          <Container>
            <Table>{this.renderTableData()}</Table>
            <Button color="blue">Save</Button>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;

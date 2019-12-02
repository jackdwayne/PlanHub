import React, { Component } from "react";
import "./App.css";
import { Menu, Container, Input, Button, Table, Form } from "semantic-ui-react";

const options = [
  { text: "1", value: "1" },
  { text: "2", value: "2" },
  { text: "3", value: "3" },
  { text: "4", value: "4" },
  { text: "5", value: "5" }
];
class App extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      // A map that contains the new entry, will be used to check if a new 
      // input was given
      date:"",
      data: "",
      priority: '',
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

  handleAddClick() {
    alert("Clicked!");
  }

  renderTableData() {
    // Update table to render the new changes (pending)
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

  // Handle moment when priority drop down is chosen
  handlePrioritySelect = (e, {value}) => {
    this.setState({priority : value}); 
    alert(value);
  }

  // Render the page
  render() {
    return (
      // Semantic UI stuff
      // Menu Section: Making the top menu
      // Container Section: The table menu
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
                selection
                label="Priority"
                options={options}
                placeholder="Priority"
                onChange={this.handlePrioritySelect}
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

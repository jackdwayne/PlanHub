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
      date: "",
      data: "",
      priority: "",

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
    // Bind handlePrioritySelect to this class
    this.handlePrioritySelect = this.handlePrioritySelect.bind(this);
    this.handleChangeData = this.handleChangeData.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeDate(e, { value }) {
    this.setState({ date: value });
  }

  handleChangeData(e, { value }) {
    this.setState({ data: value });
  }

  // Handle moment when priority drop down is chosen
  handlePrioritySelect(e, { value }) {
    this.setState({ priority: value });
  }

  // Handle moment when user submites data, data, and priority
  handleSubmit(e) {
    e.preventDefault();
    const { date, data } = this.state;
    let newTask = {
      date: this.state.date,
      data: this.state.data,
      priority: this.state.priority
    };

    if(this.state.priority.length === 0){
      alert("need to fill out priority");
    }

    if(this.state.data.length === 0){
      alert("need to fill out task");
    }

    if(this.state.date.length === 0){
      alert("need to fill out date");
    }
    //adding new task to begging of tasks array
    const tasks = [...this.state.tasks, newTask];
    if(this.state.priority !== 0){
      if(this.state.data.length !== 0){
        if(this.state.date.length !== 0){
          this.setState({
            tasks: tasks,
            date: this.state.data,
            data: this.state.date,
            date: "",
            data: ""
          })
        }
      }
    }
  }
 

  renderTableData() {
    // Update table to render the new changes (pending)
    return this.state.tasks.map((task, index) => {
      const { date, data, priority } = task; //destructuring
      return (
        <Table.Row key={index}>
          <Table.Cell>{date} </Table.Cell>
          <Table.Cell>{data}</Table.Cell>
          <Table.Cell>{priority}</Table.Cell>
        </Table.Row>
      );
    });
  }

  // Handle moment when priority drop down is chosen
  // e is a synthetic event, {value} should be the value given by the
  // form.select
  handlePrioritySelect(e, { value }) {
    this.setState({ priority: value });
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
          <Form onSubmit={this.handleSubmit}>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Date"
                placeholder="Enter Date"
                type="text"
                value={this.state.date}
                onChange={this.handleChangeDate}
              />
              <Form.Input
                fluid
                label="Task"
                placeholder="Enter Task"
                type="text"
                value={this.state.data}
                onChange={this.handleChangeData}
              />
              <Form.Select
                fluid
                selection
                label="Priority"
                options={options}
                placeholder="Priority"
                onChange={this.handlePrioritySelect}
              />
            </Form.Group>
            <Button type="submit" color="blue" onClick={this.handleSubmit}>
              Add to Schedule
            </Button>
          </Form>

          <Container>
            <Table>{this.renderTableData()}</Table>
          </Container>
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "../App.css";
import { Menu, Container, Button, Table, Form } from "semantic-ui-react";
import { DateInput } from "semantic-ui-calendar-react";
import axios from "axios";
var _ = require("lodash");
// Contains the different options available to choose from for priorities
const options = [
  { text: "1", value: "1" },
  { text: "2", value: "2" },
  { text: "3", value: "3" },
  { text: "4", value: "4" },
  { text: "5", value: "5" }
];

class MainApp extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.myRef = React.createRef();
    this.state = {
      date: "",
      data: "", //will represent a task
      priority: "",

      // tasks array that will contain a date, data(task), and priority at each index
      tasks: []
    };
    // Bind methods to this class
    this.handlePrioritySelect = this.handlePrioritySelect.bind(this);
    this.handleChangeData = this.handleChangeData.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sortTasks = this.sortTasks.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // checking data base if it has data in it
  componentDidMount() {
    axios.get("http://localhost:3000/tasks").then(response => {
      if (response.data.length > 0) {
        this.setState({
          tasks: response.data.map(tasks => tasks)
        });
      }
    });
  }

  // Handle moment when date input box state is changing
  handleChangeDate(e, { value }) {
    this.setState({ date: value });
  }

  // Handle moment when data input box state is changing
  handleChangeData(e, { value }) {
    this.setState({ data: value });
  }

  // Handle moment when priority drop down is chosen.
  handlePrioritySelect(e, { value }) {
    this.setState({ priority: value });
  }

  // Handle moment when user submites data, data, and priority
  handleSubmit(e) {
    // Prevent syntethic event defaults
    e.preventDefault();

    // Check if every field (date, task, priority) has been filled. Update
    // table if every entry has been filled.
    if (
      this.state.date.length !== 0 &&
      this.state.data.length !== 0 &&
      this.state.priority.length !== 0
    ) {
      /* All three fields have been filled. Make new task */

      //set the current states date, and data(task) into a new task
      let newTask = {
        date: this.state.date,
        data: this.state.data,
        priority: this.state.priority
      };

      // Appending the new task into a copy of the task array
      const updatedTasks = [...this.state.tasks, newTask];

      // making http request to server using axios library to add task
      axios
        .post("http://localhost:3000/tasks/add", newTask)
        .then(res => console.log(res.data));

      // Update the state of the app with the new task, and clean class variable
      // date and data for new input.
      this.setState({
        tasks: updatedTasks,
        date: "",
        data: ""
      });
    } else {
      /* Something has not been filled (data, task, or priority). */
      /* Make flags and alert an error message on what is missing. */

      // Set up flags that check if every entry (date, task, priority) is set
      let flag = [0, 0, 0];
      if (this.state.priority.length === 0) {
        // Priority has not been filled
        flag[2] = 1;
      }
      if (this.state.data.length === 0) {
        // The task has not been filled
        flag[1] = 1;
      }
      if (this.state.date.length === 0) {
        // The date has not been filled
        flag[0] = 1;
      }

      // Set up alert error messege, then alert.
      let error = "";
      if (flag[0] !== 0) error += "Missing a Date entry\n";
      if (flag[1] !== 0) error += "Missing a Task entry\n";
      if (flag[2] !== 0) error += "Missing a Priority status\n";
      alert(error);
    }
  }

  // Handle event where user clicks button to delete a task
  handleDelete(e) {
    // Prevent syntethic event defaults
    e.preventDefault();
    let taskToDelete = this.state.tasks[this.state.tasks.length - 1];

    if (this.state.tasks.length < 1) {
      return;
    }
    // making http request to server using axios library to add task
    axios
      .delete("http://localhost:3000/tasks/" + taskToDelete._id, taskToDelete)
      .then(res => console.log(res.data));

    this.state.tasks.pop();
    this.setState({
      tasks: this.state.tasks
    });
  }

  renderTableData() {
    return this.state.tasks.map((task, index) => {
      const { date, data, priority } = task; //destructuring
      return (
        <tbody key={index}>
          <Table.Row key={index}>
            <Table.Cell>{date} </Table.Cell>
            <Table.Cell>{data}</Table.Cell>
            <Table.Cell>{priority}</Table.Cell>
          </Table.Row>
        </tbody>
      );
    });
  }

  sortByDate() {
    const { tasks } = this.state;
    let sortedTasks = _.orderBy(tasks, ["date", "priority"], ["asc", "desc"]);
    console.log(sortedTasks);
    this.setState({
      tasks: sortedTasks
    });
  }

  sortTasks() {
    this.sortByDate();
  }

  // Render the page
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
            <Menu.Item href="/help" name="help" />
          </Menu.Menu>
        </Menu>
        <Container className="scheduletable" textAlign="center">
          <Form>
            <Form.Group widths="equal">
              <DateInput
                fluid
                role = "date-inp"
                label="Date"
                dateFormat={"L"}
                placeholder="Enter Date"
                type="text"
                value={this.state.date}
                onChange={this.handleChangeDate}
              />
              <Form.Input
                fluid
                label="Task"
                role = "task-inp"
                placeholder="Enter Task"
                type="text"
                value={this.state.data}
                onChange={this.handleChangeData}
              />
              <Form.Select
                fluid
                
                role = "prior-inp"
                label="Priority"
                options={options}
                placeholder="Priority"
                onChange={this.handlePrioritySelect}
              />
            </Form.Group>

            <Button
              className="addbutton"
              type="submit"
              color="blue"
              onClick={this.handleSubmit}
            >
              Add to Schedule
            </Button>
          </Form>
          <hr></hr>
          <Container>
            <Button color="blue" onClick={this.sortTasks}>
              Sort
            </Button>
            <Button
              className="addButton"
              type="submit"
              color="blue"
              onClick={this.handleDelete}
            >
              Delete Task
            </Button>
          </Container>

          <Container>
            <Table>{this.renderTableData()}</Table>
          </Container>
        </Container>
      </div>
    );
  }
}

export default MainApp;

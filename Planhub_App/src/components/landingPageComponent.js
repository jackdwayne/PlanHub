import React, { Component } from "react";
import {
  Menu,
  Container,
  Image,
  Header,
  Card,
  Button,
  Divider,
  Segment
} from "semantic-ui-react";
import "../App.css";

class HelpPage extends Component {
  constructor(props) {
    super(props);
    this.routeSchedule = this.routeSchedule.bind(this);
  }

  routeSchedule() {
    this.props.history.push("/schedule");
  }

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
        <Container text>
          <Header as="h2" textAlign="center">
            HOW TO USE THIS APP
          </Header>
          <Divider/>
          <Segment>
          Planhub is a collaborative task management application that groups can use to sort tasks by date and priority.
          To use this app, go to the schedule page and start by enter a date, task, and priority. Then click the 'Add to Schedule' button.
          This will add a task to your list and send it to the database to be saved. You can delete the last item input into the list by clicking the 'Delete Task' button.
          If you are coming back to the list after a while the tasks will be pulled from the database. 
          You can then use the 'Sort' button to sort the tasks by date and priority to see what you need to work on next!
          </Segment> 
          <Divider/>
        </Container>
        
        <Container textAlign="center">
          <Card.Group itemsPerRow={3}>
            <Card>
              <Card.Content>
                <Image src="/images/noah.png" size="large" />
                <Card.Header>Noah Jackson</Card.Header>
                <Card.Meta>noah.jackson@wsu.edu</Card.Meta>
                <Card.Description>
                  Noah is a Computer Science junior at Washington State
                  University Vancouver. Feel free to contact him via email with
                  any question regarding PlanHub.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image src="/images/jack.png" size="large" />
                <Card.Header>Jack Jones</Card.Header>
                <Card.Meta>jack.jones@wsu.edu</Card.Meta>
                <Card.Description>
                  Jack is a Computer Science junior at Washington State
                  University Vancouver. Feel free to contact him via email with
                  any question regarding PlanHub.
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image size="large" src="/images/minhquan.jpeg" />
                <Card.Header>Minhquan Tran</Card.Header>
                <Card.Meta>minhquan.tran@wsu.edu</Card.Meta>
                <Card.Description>
                  Minhquan is a Computer Science junior at Washington State
                  University Vancouver. Feel free to contact him via email with
                  any question regarding PlanHub.
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
        <br />
        <Container textAlign="center">
          <Button
            className="button1"
            type="submit"
            color="blue"
            onClick={this.routeSchedule}
          >
            Start Planning
          </Button>
        </Container>
      </div>
    );
  }
}

export default HelpPage;

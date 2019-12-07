import React, { Component } from "react";
import { Menu, Container, Image, Header, Card } from "semantic-ui-react";
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
        <Container text>
          <Header as="h2" textAlign='center'>HOW TO USE THIS APP</Header>
        </Container>
        <Container textAlign="center" >
          <Card.Group itemsPerRow={3}>
            <Card>
              <Card.Content>
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
      </div>
    );
  }
}

export default HelpPage;

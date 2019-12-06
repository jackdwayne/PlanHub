import React, { Component } from "react";
import "../App.css";
import { Menu, Container, Button, Table, Form } from "semantic-ui-react";
import axios from 'axios';

export class HomePage extends Component {
    

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
                        <Menu.Item href="/" name="Login" />
                    </Menu.Menu>
                </Menu>
                <Container className="buttonContainer" textAlign="center">
                    <Button className="button1" type="submit" color="blue" href="/schedule">
                        New User
                        </Button>
                    <Button className="button1" type="submit" color="blue" href="/schedule">
                        Returning User
                        </Button>
                </Container>
            </div>
        );
    }
}
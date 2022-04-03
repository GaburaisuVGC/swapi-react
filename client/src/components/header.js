import React from "react";
import "../App";
import "../App.css";
import { Navbar, Container, Nav } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <section>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Swapi-react</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/people">People</Nav.Link>
                <Nav.Link href="/films">Films</Nav.Link>
                <Nav.Link href="/planets">Planets</Nav.Link>
                <Nav.Link href="/species">Species</Nav.Link>
                <Nav.Link href="/starships">Starships</Nav.Link>
                <Nav.Link href="/vehicles">Vehicles</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
    );
  }
}

export default Header;

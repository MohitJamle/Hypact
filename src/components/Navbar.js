import React from "react";
import "./Navbar.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <div className="NAV">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              className="brandName"
              src="https://www.hypact.io/wp-content/uploads/2018/01/Hypact-1-300x146.png"
              alt=""
            />
          </Navbar.Brand>
          <div
            style={{ display: "flex", width: "100%", justifyContent: "end" }}
          >
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              style={{ border: "none" }}
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav" style={{ textAlign: "end" }}>
            <Nav className="me-auto">
              <Nav.Link href="/">
                <strong>Home</strong>
              </Nav.Link>
              <strong>
                <NavDropdown
                  href="/about-us"
                  title="About Us"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/about-us/career/">
                    <strong>Career</strong>
                  </NavDropdown.Item>
                </NavDropdown>
              </strong>
              <strong>
                <NavDropdown title="Services" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/web-application-development/">
                    <strong>Web Application Development</strong>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/mobile-app-development/">
                    <strong>Mobile App Development</strong>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/custom-software-development/">
                    <strong>Custom Software Development</strong>
                  </NavDropdown.Item>
                </NavDropdown>
              </strong>
              <Nav.Link href="/portfolio/">
                <strong>Portfolio</strong>
              </Nav.Link>

              <Nav.Link href="/process/">
                <strong>Process</strong>
              </Nav.Link>

              <Nav.Link href="/blog/">
                <strong>Blog</strong>
              </Nav.Link>

              <Nav.Link href="/contact-us/">
                <strong>Contact.Us</strong>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

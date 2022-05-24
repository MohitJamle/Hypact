import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Footer.css";

const FooterLinks = (
  <div className="footer_links">
    <h3 class="footer_heading">
      <span class="fl-heading-text">Quick Links</span>
      <hr
        style={{
          width: "60px",
          marginTop: "10px",
          borderTop: "0.5px solid #fff",
          background: "",
        }}
      />
    </h3>

    <Navbar
      bg="transparent"
      variant="dark"
      style={{ background: "#2a3338", paddingLeft: "0", paddingTop: "0" }}
      expand="g"
    >
      <Navbar.Collapse
        className="show"
        id="basic-navbar-nav"
        style={{ textAlign: "start", paddingLeft: "0" }}
      >
        <Nav className="me-auto">
          <Nav.Link href="/">
            <strong>Home</strong>
          </Nav.Link>
          <strong className="autoreniv">
            <NavDropdown
              href="/about-us"
              title="About Us  ➤"
              id="basic-nav-dropdown"
              style={{
                transition: "all 250ms ease-in-out",
                paddingLeft: "-2px",
                backgroundColor: "transparent",
              }}
            >
              <NavDropdown.Item
                href="/about-us/career/"
                style={{
                  background: "#2a3338",
                  color: "white",
                  paddingLeft: "-20px",
                  margin: "0",
                }}
              >
                <strong>Career</strong>
              </NavDropdown.Item>
            </NavDropdown>
          </strong>
          <strong className="autoreniv">
            <NavDropdown title="Services ➤" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="/web-application-development/"
                style={{ background: "#2a3338", color: "white" }}
              >
                <strong>Web Application Development</strong>
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/mobile-app-development/"
                style={{ background: "#2a3338", color: "white" }}
              >
                <strong>Mobile App Development</strong>
              </NavDropdown.Item>
              <NavDropdown.Item
                href="/custom-software-development/"
                style={{ background: "#2a3338", color: "white" }}
              >
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

          <Nav.Link href="/blog/">
            <strong>Sitemap</strong>
          </Nav.Link>

          <Nav.Link href="/contact-us/">
            <strong>Contact.Us</strong>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

const ContactForm = (
  <div className="footer_form">
    <h3 class="footer_heading">
      <span class="fl-heading-text">Quick Contact</span>
      <hr
        style={{
          width: "60px",
          margin: "10px 0",
          marginBottom: "13px",
          borderTop: "0.5px solid #fff",
        }}
      />
    </h3>
    <form className="form">
      <input type="text" placeholder="Your Name" />
      <input type="text" placeholder="Your Phone" />
      <input type="text" placeholder="Your Email" />
      <textarea cols="40" rows="3" type="text" placeholder="Your Message" />
      <button type="submit">SEND MESSAGE</button>
    </form>
  </div>
);

const Testimonials = (
  <div className="testimonials">
    <h3 class="footer_heading">
      <span class="fl-heading-text">Testimonials</span>
      <hr
        style={{
          width: "60px",
          margin: "10px 0",
          marginBottom: "13px",
          borderTop: "0.5px solid #fff",
        }}
      />
    </h3>
    <p>
      <span style={{ fontWeight: "400" }}>
        I am happy that we hired Hypact experienced team and they've worked
        closely with us throughout the process of the website, staying on task,
        on target, and on budget. I also appreciate their quick responses and
        best customer support. Well done! - Kiara
      </span>
    </p>
  </div>
);

const LetsTalk = (
  <div className="letsTalk">
    <h3 class="footer_heading">
      <span class="fl-heading-text">Lets Talk</span>
      <hr
        style={{
          width: "60px",
          margin: "10px 0",
          marginBottom: "18px",
          borderTop: "0.5px solid #fff",
        }}
      />
    </h3>
    <div style={{ display: "flex" }}>
      <i
        class="fa fa-phone"
        style={{
          fontSize: "20px",
          marginTop: "4px",
        }}
      ></i>
      <p>
        <a href="tel:+9111161170">+91-9111161170</a>
      </p>
    </div>
    <div style={{ display: "flex" }}>
      <i
        class="fa fa-envelope"
        style={{
          fontSize: "20px",
          marginTop: "4px",
        }}
      ></i>
      <p>
        <a href="mailto:anurag@hypact.io">anurag@hypact.io</a>
        <br /> <a href="mailto:jay@hypact.io">jay@hypact.io</a>
      </p>
    </div>
    <div style={{ display: "flex" }}>
      <i
        class="fa fa-home"
        style={{
          fontSize: "20px",
          marginTop: "0px",
        }}
      ></i>
      <p style={{ marginLeft: "15px" }}>
        601, Fortune Ambience, Sriram Nagar, South Tukoganj, Indore, Madhya
        Pradesh 452001
      </p>
    </div>
  </div>
);

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        {FooterLinks} {ContactForm} {Testimonials} {LetsTalk}
      </div>
      <div style={{ backgroundColor: "#363c40", height: "100%" }}>
        <hr style={{ marginBottom: "18px" }} />
        <p
          style={{
            fontFamily: "montserrat,sans-serif",
            maxWidth: "894px",
            marginBottom: "13px",
            marginRight: "10px",
            color: "#fff",
            fontWeight: "400",
            fontSize: "14px",
            textAlign: "right",
          }}
        >
          Copyright © 2020 | All rights reserved
          <a href="https://www.linkedin.com/company/hypact-io/">
            <i
              class="fa fa-linkedin-square"
              style={{ fontSize: "20px", color: "white", marginLeft: "16px" }}
            ></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

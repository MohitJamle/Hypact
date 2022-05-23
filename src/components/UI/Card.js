import React from "react";
import { Card } from "react-bootstrap";

const CardComp = (props) => {
  return (
    <div className="cardComp">
      <Card style={{ width: "100%", maxWidth: "360px", margin: "0" }}>
        <a href={props.link}>
          <Card.Img variant="top" src={props.img} />
        </a>
        <Card.Body
          style={{
            padding: "20px",
          }}
        >
          <a
            href={props.link}
            style={{ textDecoration: "none", color: "#47c9ff" }}
          >
            <Card.Title style={{ marginTop: "4px" }}>
              <b
                style={{
                  fontSize: "20px",
                  lineHeight: "26px",
                }}
              >
                {props.title}
              </b>
            </Card.Title>
          </a>
          <Card.Text
            style={{
              fontSize: "14px",
              lineHeight: "22px",
              fontFamily: "montserrat, sans-serif",
              color: "gray",
              marginTop: "13px",
              marginBottom: "0",
            }}
          >
            {props.description}
          </Card.Text>
          <a
            href={props.link}
            style={{
              textDecoration: "none",
              marginTop: "10px",
              display: "inline-block",
              color: "#47c9ff",
              fontSize: "14px",
              lineHeight: "22px",
            }}
          >
            Read More
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardComp;

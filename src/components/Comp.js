import React from "react";
import "./Comp.css";
import ControlledAccordions from "./UI/Accordion";

const Comp1 = () => {
  return (
    <div className="comp1">
      <div className="comp1_content">
        <h4 className="fl-heading">
          <span className="fl-heading-text">
            #1 Software Development Agency
          </span>
        </h4>
        <h2 className="fl-heading">
          <span className="fl-heading-text">
            Disrupt Your Industry With End-to-End Solutions
          </span>
          <hr style={{ marginTop: "30px", marginBottom: "30px" }} />
        </h2>
        <h4 className="h1-heading">
          <span className="comp1_text" style={{ lineHeight: "1.8" }}>
            From in-depth research to vision to implementation, Hypact
            translates bold ideas into an industry-leading mobile app, custom
            software and web developments that advance your business. Our
            services set a high water mark for engagement, efficiency, and
            elegance.
          </span>
        </h4>
      </div>
    </div>
  );
};

export default Comp1;

export function Comp2() {
  return (
    <div className="Comp2">
      <div className="Comp2_">
        <div className="Comp2_title">
          <h2 className="Comp2_titleHeading">
            We are unbeatable because we deliver client-centric services
          </h2>
          <a href="/about-us">
            <button>GET FREE QUOTE</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export function Comp3() {
  return (
    <div className="comp3">
      <div className="comp3_content">
        <div className="comp3_img">
          <img
            src="	https://www.hypact.io/wp-content/uploads/2020/02/Hypact-banner-home.png"
            alt=""
          />
        </div>
        <div className="comp3_acordion">
          <h2 class="comp3_heading">
            <span class="comp3_heading_text">
              A Range of Our Specialization
            </span>
            <hr style={{ width: "14.8vw", backgroundColor: "gray" }} />
          </h2>

          <p className="comp3_title">
            <b>
              We have a decade of experience in successfully launching products
              as per clients requirement.
            </b>
          </p>
          <div className="comp3Acordion">
            <ControlledAccordions />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Comp5() {
  return (
    <div className="comp5">
      <div className="comp5_Heading">
        <h2 class="comp3_fl_heading">
          <span class="fl_heading_text">
            Our Recent <strong>Products</strong>
          </span>
        </h2>
      </div>
    </div>
  );
}

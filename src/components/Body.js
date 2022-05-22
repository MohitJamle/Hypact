import React from "react";
import "./Body.css";

const Comp1 = () => {
  return (
    <div className="comp1">
      <div className="comp1_content">
        <h4 class="fl-heading">
          <span class="fl-heading-text">#1 Software Development Agency</span>
        </h4>
        <h2 class="fl-heading">
          <span class="fl-heading-text">
            Disrupt Your Industry With End-to-End Solutions
          </span>
          <hr style={{ marginTop: "30px" }} />
        </h2>
        <h4 class="h1-heading">
          <span class="comp1_text" style={{ lineHeight: "1.8" }}>
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

const Body = () => {
  return (
    <div className="body">
      <Comp1 />
    </div>
  );
};

export default Body;

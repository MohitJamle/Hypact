import React from "react";
import "./Body.css";
import Comp1, { Comp2, Comp3, Comp5 } from "./Comp";

const Body = () => {
  return (
    <div className="body">
      <Comp1 />
      <Comp2 />
      <Comp3 />
      <div
        className="Comp4"
        style={{
          backgroundColor: "#fafafa",
          padding: "35px 0",
          margin: "0px -2px",
          marginTop: "-30px",
        }}
      ></div>

      <Comp5 />
    </div>
  );
};

export default Body;

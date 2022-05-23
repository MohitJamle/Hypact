import React from "react";
import "./Comp.css";
import ControlledAccordions from "./UI/Accordion";
import CardComp from "./UI/Card";
import SlidingImage from "./UI/ImageList";

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
          <h2 className="comp3_heading">
            <span className="comp3_heading_text">
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
        <h2 className="comp5_fl_heading">
          <span className="fl_heading_text">
            Our Recent <strong>Products</strong>
          </span>
        </h2>
      </div>
      <hr
        style={{
          maxWidth: "300px",
          margin: "auto",
          backgroundColor: "gray",
          marginBottom: "20px",
        }}
      />
      <div className="comp5_grid">
        <SlidingImage />
      </div>
    </div>
  );
}

export const Comp6 = () => {
  let gridContent1 = [
    {
      img: "https://www.hypact.io/wp-content/uploads/2019/11/BOUNCY-BUNCH.png",
      id: 1,
    },
    {
      img: "https://www.hypact.io/wp-content/uploads/2019/11/M_H.png",
      id: 2,
    },
    {
      img: "https://www.hypact.io/wp-content/uploads/2019/11/JOLLYGO.png",
      id: 3,
    },
    {
      img: "https://www.hypact.io/wp-content/uploads/2020/01/FutureChoice.png",
      id: 4,
    },
  ];
  let gridContent2 = [
    {
      img: "https://www.hypact.io/wp-content/uploads/2020/01/proline-logo.png",
      id: 5,
    },
    {
      img: "https://www.hypact.io/wp-content/uploads/2019/11/MOCHA.png",
      id: 6,
    },
    {
      img: "https://www.hypact.io/wp-content/uploads/2019/11/ONTERS.png",
      id: 7,
    },
    {
      img: "https://www.hypact.io/wp-content/uploads/2019/11/SIMPLY-ANGULAR.png",
      id: 8,
    },
  ];
  let gridContent3 = [
    {
      img: "https://www.hypact.io/wp-content/uploads/2020/01/fbp.png",
      id: 9,
    },
    {
      img: "https://www.hypact.io/wp-content/uploads/2019/11/SYNSOFT.png",
      id: 10,
    },
    {
      img: "https://www.hypact.io/wp-content/uploads/2020/01/Medicare-Hospital-Research-logo.jpg",
      id: 11,
    },
    {
      img: "https://www.hypact.io/wp-content/uploads/2019/11/FLORIDA-DEF.png",
      id: 12,
    },
  ];

  return (
    <div className="comp6">
      <div className="comp6_content">
        <h2 className="comp6_heading">
          <span className="fl-heading-text">Client</span>
        </h2>
        <div className="comp6_grid">
          {gridContent1.map((item) => {
            return (
              <div key={item.id} className="comp6_grid_content">
                <img src={item.img} alt="" />
              </div>
            );
          })}
        </div>
        <div className="comp6_grid">
          {gridContent2.map((item) => {
            return (
              <div key={item.id} className="comp6_grid_content">
                <img src={item.img} alt="" />
              </div>
            );
          })}
        </div>
        <div className="comp6_grid">
          {gridContent3.map((item) => {
            return (
              <div key={item.id} className="comp6_grid_content">
                <img src={item.img} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Comp7 = () => {
  let info = [
    {
      link: "https://www.hypact.io/choosing-the-precise-technology-for-your-mobile-app/",
      img: "https://www.hypact.io/wp-content/uploads/2019/05/App-types-300x146.jpg",
      title: "Choosing the Precise Technology for Your Mobile App",
      description:
        "The need for an Android and iOS app for business comes particularly when business owners are going to put their business on the online mobile platform. Once you’ve identified the purpose of developing a mobile app for your brand, you need to focus on your mobile application strategy and make the best choices in technology. […]",
      id: "1",
    },
    {
      link: "https://www.hypact.io/choosing-the-precise-technology-for-your-mobile-app/",
      img: "https://www.hypact.io/wp-content/uploads/2019/05/1_jdvQUAtW-sxFzI7QGDS6QA-300x144.png",
      title:
        "2019 Custom Software Development Trends that are taking the Market by Storm",
      description:
        "Custom software development was in high demand by businesses. The industry has evolved immensely over the past few years. The need for software developers has also speed up these days because of the emergence of new technologies like Blockchain, Artificial Intelligence and digital transformation across every industry. This year, reap your success in the digital […]",
      id: "2",
    },
    {
      link: "https://www.hypact.io/choosing-the-precise-technology-for-your-mobile-app/",
      img: "https://www.hypact.io/wp-content/uploads/2019/05/benifit-of-custom-software-development_orig-300x147.jpg",
      title: "Custom Software Solutions- A Way to Grow Your Business",
      description:
        "There are plenty of applications and software readily available out there to meet business requirements across virtually every industry niche. However, software that can be accessed by the majority only considers some of the basics of what a specific industry needs. As a result, it may not fit your business unique & innovative needs. Custom […]",
      id: "3",
    },
  ];

  return (
    <div className="comp7">
      <h2 className="comp7_heading">
        <span className="comp7_heading_text">
          Blog <b>news</b>
        </span>
      </h2>
      <div className="comp7_grid">
        <div className="comp7_grid_content">
          {info.map((item) => {
            return (
              <CardComp
                key={item.id}
                link={item.link}
                img={item.img}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

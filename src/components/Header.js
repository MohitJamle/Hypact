import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header_container">
        <div className="header_box">
          <span>
            Achieving Success In The Digital World Is Hard. We make it
            simpler!..
          </span>
          <p style={{ fontWeight: "400", color: "#ffffff" }}>
            We combine our solid industry experience, technical expertise,
            intense knowledge of trends and quality-driven delivery model to
            provide reliable, end-to-end cloud solutions.
          </p>
          <div className="button">
            <button>
              <a href="/about-us">
                LEARN MORE <samp>&#9642;&#9642;&#9642; </samp>
              </a>
            </button>
          </div>
        </div>
        <form className="form">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Subject" />
          <input type="text" placeholder="Your Phone" />
          <input type="text" placeholder="Your Email" />
          <textarea cols="40" rows="3" type="text" placeholder="Your Message" />
          <button type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  );
};

export default Header;

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        style={{
          margin: "5px 0px",
          border: "1px solid lightgray",
          boxShadow: "none",
          marginTop: "30px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography
            sx={{ color: "text.secondary" }}
            style={{
              fontFamily: "montserrat, sans-serif",
              fontSize: "13.6px",
              padding: "0",
            }}
          >
            Progressive Web Apps
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Deliver an app-like experience to users on browsers with Progressive
            Web App of leading software development firm. We are offering PWAs
            that looks like web apps but give the experience of native apps.
            Progressive web apps response faster, is available offline, fits
            perfectly on the device theme, provide shareable URLs and works well
            on other platforms like desktop, tablets, etc.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        style={{
          margin: "5px 0px",
          border: "1px solid lightgray",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ color: "text.secondary" }}>
            Express Website
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We value your precious time that’s why we have 1 week delivery for
            startups.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        style={{
          margin: "5px 0px",
          border: "1px solid lightgray",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ color: "text.secondary" }}>
            Cross-Platform Development
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Let your website or mobile app work across multiple platforms like
            Windows, Android. Originally, the complexity of developing apps was
            compounded by the difficulty of building out a backend that worked
            with multiple operating systems. We use top cross-platform
            development tools including Xamarin, React Native & Apache Cordova.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        style={{
          margin: "5px 0px",
          border: "1px solid lightgray",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ color: "text.secondary" }}>
            Front-end Development
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Make the first impression on your customer with compelling and
            engaging user experiences. Front-end development is the practice of
            producing HTML, CSS, and JavaScript for a website or mobile app so
            that a user can see & interact them directly. We keep objective in
            mind and format designs that are easy to read and relevant.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

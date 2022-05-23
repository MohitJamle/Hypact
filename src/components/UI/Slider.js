import React from "react";
import { Backdrop } from "@mui/material";
import { Carousel } from "react-bootstrap";

const SlidingImage = (props) => {
  function Close() {
    props.onclose();
  }

  return (
    <div className="Imageslider">
      <Carousel fade style={{ width: "90%", margin: "auto" }}>
        {itemData.map((item) => {
          return (
            <Carousel.Item>
              <img
                key={item.title}
                style={{
                  maxHeight: "500px",
                  margin: "auto",
                  padding: "0 15px",
                  objectFit: "contain",
                }}
                className="d-block w-100"
                src={item.img}
                alt="First slide"
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Backdrop open={props.open} onClick={Close} />
    </div>
  );
};

export default SlidingImage;

const itemData = [
  {
    img: "https://www.hypact.io/wp-content/uploads/2019/08/bouncy.jpg",
    title: "1",
  },
  {
    img: "https://www.hypact.io/wp-content/uploads/2019/08/florida.jpg",
    title: "2",
  },
  {
    img: "https://www.hypact.io/wp-content/uploads/2019/08/jolly.jpg",
    title: "3",
  },
  {
    img: "https://www.hypact.io/wp-content/uploads/2019/08/madicare.jpg",
    title: "4",
  },
  {
    img: "https://www.hypact.io/wp-content/uploads/2019/08/onters.jpg",
    title: "5",
  },
  {
    img: "https://www.hypact.io/wp-content/uploads/2019/08/proline.jpg",
    title: "6",
  },
  {
    img: "https://www.hypact.io/wp-content/uploads/2019/08/synsoft.jpg",
    title: "7",
  },
  {
    img: "https://www.hypact.io/wp-content/uploads/2020/01/Osho.jpg",
    title: "8",
  },
  {
    img: "https://www.hypact.io/wp-content/uploads/2020/01/simplyAngular.jpg",
    title: "9",
  },
  {
    img: "https://www.hypact.io/wp-content/uploads/2020/01/coathGeet.jpg",
    title: "10",
  },
  {
    img: "https://www.hypact.io/wp-content/uploads/2019/12/Bagzpack.png",
    title: "11",
  },
  {
    img: "https://www.hypact.io/wp-content/uploads/2020/02/thelegalproperty.png",
    title: "12",
  },
];

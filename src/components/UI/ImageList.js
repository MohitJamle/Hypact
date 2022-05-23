import React, { useState } from "react";
import Slider from "./Slider";

export default function ImageList() {
  const [openSlider, setOpenSlider] = useState(false);
  const [open, setOpen] = useState(false);

  function onClose() {
    setOpenSlider(false);
  }

  return (
    <div
      className="ImageList"
      style={{
        width: "90vw",
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <div className="ImageListgrid">
        {itemData.map((item) => {
          return (
            <img
              onClick={() => {
                setOpenSlider(true);
                setOpen(true);
              }}
              key={item.title}
              src={item.img}
              alt=""
              style={{
                width: "100%",
                height: "245px",
                margin: "8px",
                cursor: "pointer",
                objectFit: "contain",
              }}
            />
          );
        })}
      </div>
      {openSlider && <Slider open={open} onclose={onClose} />}
    </div>
  );
}

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

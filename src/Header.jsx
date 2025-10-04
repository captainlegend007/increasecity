import { useState } from "react";
import "./header.css";
import Image1 from "../assets/Papa-h.webp";
import Image2 from "../assets/Papa-e.webp";
import Image3 from "../assets/Papa-k.webp";
import Carousel from "./Carousel";
import SubHeader from "./SubHeader";

const Header = () => {
  const [imageCount, setImageCount] = useState(1);
  const imageSlide = (count) => {
    setImageCount(count);
  };

  const Images = ["", Image2, Image1, Image3];
  const text = [
    "",
    { 1: "WELCOME TO", 2: "INCREASE CITY CHURCH" },
    { 1: "RECONCILING ALL ", 2: "NATION TO GOD" },
    { 1: "CHRIST CANNOT REIGN", 2: "AND THINGS REMAIN THE SAME" },
  ];

  return (
    <div>
      {" "}
      <div className="image-background">
        <div className="image-text">
          <h3>{text[imageCount][1]}</h3>
          <h2 loading="eager">{text[imageCount][2]}</h2>
        </div>
        <Carousel imageSlide={imageSlide} />
        <img
          loading="lazy"
          src={Images[imageCount]}
          className="image-content"
          alt="homepage-image"
        />
      </div>
      <SubHeader />
    </div>
  );
};

export default Header;

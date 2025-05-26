import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/Papa-h.webp";
import Image2 from "../assets/Papa-e.webp";
import Image3 from "../assets/Papa-k.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line react/prop-types
const Carousel = ({ imageSlide }) => {
  const [count, setCount] = useState(1);
  const [clickCount, setClickCount] = useState(count);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    // if (isLeftSwipe || isRightSwipe)
    //   console.log("swipe", isLeftSwipe ? "left" : "right");
    // // add your conditional logic here

    if (isLeftSwipe || isRightSwipe)
      isLeftSwipe ? leftImageChange() : rightImageChange();
  };

  const rightImageChange = () => {
    if (count >= 3) {
      setCount(1);
      console.log(count);
    } else {
      setCount(count + 1);
      console.log(count);
    }
    imageSlide(count);
  };

  const leftImageChange = () => {
    if (count <= 3 && count > 1) {
      setCount(count - 1);
      console.log(count);
    } else {
      setCount(3);
      console.log(count);
    }
  };

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "15%",
    adaptiveHeight: true,
    adaptiveWidth: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };

  // const imageChange = () => {
  //   if (count < 4) {
  //     alert(count);
  //     setCount(count + 1);
  //   } else setCount(0);
  // };

  useEffect(() => {
    imageSlide(count);
    return () => {};
  });

  return (
    <div
      className="slider-container"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* <div></div> */}
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div className="image-a-div">
          <img
            src={Image3}
            className="Image-a"
            alt="carousel-image-a"
            onClick={() => setCount(3)}
          />
        </div>
        <div className="image-a-div">
          <img
            src={Image2}
            className="Image-a"
            alt="carousel-image-b"
            onClick={() => setCount(1)}
          />
        </div>
        <div className="image-a-div">
          <img
            src={Image1}
            className="Image-a"
            alt="carousel-image-c"
            onClick={() => setCount(2)}
          />
        </div>
      </Slider>

      <div className="slideCount">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="arrowLeft"
          alt="left-arrow"
          onClick={function () {
            leftImageChange();
            previous();
          }}
        />
        {count} of 3
        <FontAwesomeIcon
          icon={faArrowRight}
          className="arrowRight"
          alt="right-arrow"
          onClick={function () {
            next();
            rightImageChange();
          }}
        />
      </div>
    </div>
  );
};

export default Carousel;

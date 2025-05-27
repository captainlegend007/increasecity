import Slider from "react-slick";
import Image1 from "../assets/Papa-c.webp";
import Image2 from "../assets/Papa-b.webp";
import Image3 from "../assets/Papa-j.webp";
import "./program.css";

const Programs = () => {
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "15%",
    adaptiveHeight: true,
    adaptiveWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
  };

  return (
    <div className="program-parent">
      <div className="salvation-prayer">
        <h3 className="born-again">Are you born again? Say these prayers.</h3>
        <h3 className="born-again-prayer">
          {" "}
          Today I confess with my mouth that Jesus is my Lord and Saviour. I
          confess my sins and ask for forgiveness. Please come into my heart as
          my Lord and saviour. Take complete control of my life and help me walk
          in your footsteps daily by the power of the Holy Spirit. Thank you
          Lord for saving me, Hallelujah.
        </h3>
      </div>
      <h3 className="upcoming"> Upcoming Programs</h3>
      <div className="upcoming-programs">
        <Slider {...settings}>
          <div className="program-div">
            <img src={Image1} className="program-image" alt="program-image-a" />
          </div>
          <div className="program-div">
            <img src={Image2} className="program-image" alt="program-image-b" />
          </div>
          <div className="program-div">
            <img src={Image} className="program-image" alt="program-image-c" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Programs;

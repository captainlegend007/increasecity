/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Link } from "react-router-dom";
import "./subHeader.css";
import Image from "../assets/Papa-e.webp";
import Image2 from "../assets/Mama-a.webp";
import Image3 from "../assets/Papa-g.webp";
import Programs from "./Programs";
import Slider from "react-slick";
import { InView } from "react-intersection-observer";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SubHeader = () => {
  //State to handle element is in view
  const [isInView, handleisInView] = useState(false);
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "15%",
    adaptiveHeight: true,
    adaptiveWidth: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
  };

  const handleView = (value) => {
    handleisInView(value);
  };
  return (
    <div>
      {" "}
      <div className="sub-grid">
        <div className="image-grid">
          <div>
            <img loading="lazy" src={Image} className="image-1" alt="sub-image-a" />
          </div>
          <div>
            <img loading="lazy" src={Image2} className="image-1" alt="sub-image-b" />
          </div>
          <div>
            <img loading="lazy" src={Image3} className="image-1" alt="sub-image-c" />
          </div>
        </div>
        <InView as="div" onChange={(inView) => handleView(inView)}>
          <div className={isInView ? "text-grid-b" : "text-grid"}>
            <h3 className="church-name">Increase City Church</h3>
            <h3 className="church-text">
              Christ Reign Forever Church of All Nation (Increase City) is a
              non-denominational/ Inter-denominational ministry designed around a
              straightforward and strategic process that moves people through the stages
              of spiritual growth.
            </h3>
            <h3 className="church-text">
              Our core values are LOVE, GRACE, INTELLIGENCE & EXCELLENCE. Our Vision is
              "Reconciling all Nations to GOD by discovering man's purpose".
            </h3>
          </div>
        </InView>
      </div>
      <div className="social-media-parent">
        <div className="social-handles">We are closer than you think</div>
        <Slider {...settings}>
          <div className="social-div">
            <Link to="https://web.facebook.com/crfcoan?_rdc=1&_rdr#">
              <div className="social-item">
                <FontAwesomeIcon
                  icon={faFacebook}
                  alt="facebook-icon"
                  className="social-b"
                />
                <div className="social-name"> Facebook</div>
                <div className="about-social">
                  {" "}
                  Join our Facebook community. Get updates and Watch facebook stream with
                  any device.
                </div>
              </div>
            </Link>
          </div>
          <div className="social-div">
            <Link to="https://www.instagram.com/christreignministries/#">
              <div className="social-item">
                <FontAwesomeIcon
                  icon={faInstagram}
                  alt="facebook-icon"
                  className="social-b"
                />
                <div className="social-name"> Instagram</div>
                <div className="about-social">
                  {" "}
                  Join our instagram community to get updates and sermon recap at the
                  comfort of your device.
                </div>
              </div>
            </Link>
          </div>
          <div className="social-div">
            <Link to="https://www.tiktok.com/@prophetehiebolopalmer">
              <div className="social-item">
                <FontAwesomeIcon
                  icon={faTiktok}
                  alt="facebook-icon"
                  className="social-b"
                />
                <div className="social-name"> TikTok</div>
                <div className="about-social">
                  {" "}
                  Enjoy service highlights, edifiying contents and lots more on our TikTok
                  community.
                </div>
              </div>
            </Link>
          </div>
          <div className="social-div">
            <div className="social-item">
              <FontAwesomeIcon
                icon={faWhatsapp}
                alt="facebook-icon"
                className="social-b"
              />
              <div className="social-name"> Whatsapp</div>
              <div className="about-social">
                {" "}
                Join our whatsapp community. Get livestream links, service highlihts and
                daily devotionals.
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <Programs />
    </div>
  );
};

export default SubHeader;

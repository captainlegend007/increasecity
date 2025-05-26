import "./footer.css";
import Icon from "../assets/church logo copy.c056ca46.png";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="footer-background">
        <div className="footer-grid">
          <div className="part-one">
            <div className="container-a">
              <img src={Icon} className="address-logo" alt="address-icon" />
              <h3 className="church-address">
                Charlisco phase 2 off Ekpan Expressway, Warri, Delta State
              </h3>
            </div>
          </div>
          <div className="part-two">
            <ul className="footer-links">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/testimonies">
                <li>Testimonies</li>
              </Link>
              <Link to="/resources">
                <li>Resources</li>
              </Link>
              <Link to="/giving">
                <li>Give</li>
              </Link>
              <Link to="/programs">
                <li>Upcoming Programs</li>
              </Link>
            </ul>
          </div>
          <div className="part-three">
            <div className="get-in-touch">
              <div className="connect-parent">
                <h3 className="connect">Connect with us via </h3>
                <h3 className="social-icons">
                  <Link to="https://web.facebook.com/crfcoan?_rdc=1&_rdr#">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      alt="facebook-icon"
                      className="facebook"
                    />
                  </Link>
                  <Link to="https://www.instagram.com/christreignministries/#">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      alt="instagram-icon"
                      className="instagram"
                    />
                  </Link>

                  <Link to="https://www.tiktok.com/@prophetehiebolopalmer">
                    <FontAwesomeIcon
                      icon={faTiktok}
                      alt="tiktok-icon"
                      className="tiktok"
                    />
                  </Link>
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    alt="tiktok-icon"
                    className="tiktok"
                  />
                </h3>
              </div>
              <div className="subscribe-body">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="email"
                />
                <button className="subscribe">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-ruler">Copyright 2025</div>
      </div>
    </div>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import churchLogo from "../assets/church logo copy.c056ca46.png";
import menu from "../assets/menu.png";
import arrow from "../assets/arrow.png";
import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Menu = () => {
  const [visiblity, setvisiblity] = useState(true);
  const [giveVisiblity, setGiveVisiblity] = useState(true);
  const [headerHeight, setHeaderHeight] = useState("70px");
  const [echurchVisibility, setechurchVisibility] = useState(false);
  const [giveDropDown, setGiveDropDown] = useState(false);
  const [echurchDropDown, setEchurchDropDown] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setvisiblity(!visiblity);
    visiblity === true ? setHeaderHeight("auto") : setHeaderHeight("70px");
    setEchurchDropDown(false);
    setGiveVisiblity(true);
  };

  const toggleGiveMenu = () => {
    setGiveVisiblity(!giveVisiblity);
  };

  const toggleEchurchMenu = () => {
    setEchurchDropDown(!echurchDropDown);
  };
  const toggleGiveDropDown = () => {
    setGiveDropDown(!giveDropDown);
    setechurchVisibility(false);
  };
  const toggleEchurch = () => {
    setechurchVisibility(!echurchVisibility);
    setGiveDropDown(false);
  };
  useEffect(() => {
    setHeaderHeight("70px");
    setvisiblity(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    function handleResize() {
      if (window.innerWidth > 1000) {
        setHeaderHeight("70px");
        setvisiblity(true);
        setGiveVisiblity(true);
      } else {
        setechurchVisibility(false);
        setGiveDropDown(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname]);
  return (
    <div className="top-menu-body">
      <nav className="header" style={{ height: headerHeight }}>
        <div className="church-icon">
          <Link to="/">
            <img src={churchLogo} className="church-logo" alt="church-icon" />
          </Link>
          <img
            src={visiblity ? menu : arrow}
            className="menu"
            onClick={toggleMenu}
            alt="menu-icon"
          />
        </div>
        <div className="list-items">
          <li
            className="first-echurch"
            onClick={() => toggleEchurch(false)}
            onMouseEnter={toggleEchurch}
            // onMouseLeave={() =>
            //   setTimeout(() => {
            //     toggleEchurch(false);
            //   }, 2000)
            // }
          >
            E-Church
            <FontAwesomeIcon
              icon={faAngleUp}
              alt="angle-up-icon"
              className={echurchVisibility ? "arrow-b" : "arrow"}
            />
          </li>

          <Link to="/testimonies">
            <li>Testimonies</li>
          </Link>

          <Link to="/resources">
            <li>Resources</li>
          </Link>

          <li
            onMouseEnter={toggleGiveDropDown}
            onClick={() => toggleGiveDropDown(false)}
          >
            Give{" "}
            <FontAwesomeIcon
              icon={faAngleUp}
              alt="angle-up-icon"
              className={giveDropDown ? "arrow-b" : "arrow"}
            />
          </li>

          <Link to="/programs">
            <li>Programs</li>
          </Link>
        </div>
        {visiblity ? (
          ""
        ) : (
          <div className="list-items-b">
            <ul onClick={toggleEchurchMenu}>
              E-Church
              <FontAwesomeIcon
                icon={faAngleUp}
                alt="angle-up-icon"
                className="arrow-up"
              />{" "}
            </ul>

            <div
              className="e-church-parent"
              style={{ display: echurchDropDown ? "block" : "none" }}
            >
              {" "}
              <hr />
              <Link to="/echurch/prayer-request">
                <ul>Prayer Requests</ul>
              </Link>
              <hr />
              <Link to="/echurch/first-timers">
                <ul>First Timer</ul>
              </Link>
              <hr />
              <Link to="/echurch/share-your-testimonies">
                <ul>Share your Testimony</ul>
              </Link>
            </div>
            <hr />
            <Link to="/testimonies">
              <ul>Testimonies</ul>
            </Link>
            <hr />
            <Link to="/resources">
              <ul>Resources</ul>
            </Link>
            <hr />
            <ul onClick={toggleGiveMenu}>
              Give{" "}
              <FontAwesomeIcon
                icon={faAngleUp}
                alt="angle-up-icon"
                className="arrow-up"
              />
            </ul>
            <hr />
            {giveVisiblity ? (
              ""
            ) : (
              <div className="give-parent">
                <Link to="/giving">
                  <ul>Offerings, Tithe & Donations</ul>
                </Link>
                <hr />
                <Link to="/giving">
                  <ul>Partners</ul>
                </Link>
                <hr />
              </div>
            )}
            <Link to="/programs">
              <ul>Upcoming Programs</ul>
            </Link>
          </div>
        )}
      </nav>
      <div
        className="e-church-drop-down"
        style={{
          display: `${echurchVisibility ? "block" : "none"}`,
        }}
        onMouseLeave={() =>
          setTimeout(() => {
            toggleEchurch();
          }, 1500)
        }
      >
        <ul className="e-church-child">
          <Link to="/echurch/prayer-request">
            <li>Prayer Requests</li>
          </Link>
          <Link to="/echurch/first-timers">
            <li>First Timer</li>
          </Link>

          <Link to="/echurch/share-your-testimonies">
            <li>Share your Testimony</li>
          </Link>
        </ul>
      </div>

      <div
        className="give-drop-down"
        style={{
          display: `${giveDropDown ? "block" : "none"}`,
        }}
        onMouseLeave={() =>
          setTimeout(() => {
            toggleGiveDropDown();
          }, 1500)
        }
      >
        <ul className="give-child">
          <Link to="/giving">
            <li>Offering</li>
          </Link>
          <li>Partners</li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

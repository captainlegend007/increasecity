import React from "react";
import Image from "../assets/Papa-j.webp";

const EChurchTestimonies = () => {
  return (
    <div>
      <div className="giving-image-container">
        <div className="sub">
          <img src={Image} loading="lazy" alt="giving-image" />
          <h3 className="giving-text">Share Your Testimony </h3>
        </div>
      </div>
      <form class="form">
        <h2 className="form-header">TESTIMONY</h2>
        <p type="Name:">
          <input
            className="prayer-input"
            placeholder="Write your name here..."
          ></input>
        </p>
        <p type="Email/Phone Number:">
          <input
            className="prayer-input"
            placeholder="Let us know how to contact you back.."
          ></input>
        </p>
        <p type="Testimony:">
          <input
            className="prayer-input"
            placeholder="Tell us what the Lord had done.."
          ></input>
        </p>
        <button className="send-message">Send Testimony</button>
        <div classname="form-div">
          {/* <span class="fa fa-phone"></span>001 1023 567 */}
          {/* <span class="fa fa-envelope-o"></span>christreign@increasecity.org */}
        </div>
      </form>
    </div>
  );
};

export default EChurchTestimonies;

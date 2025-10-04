import React from "react";
import Image from "../assets/Papa-f.webp";

const FirstTimer = () => {
  return (
    <div>
      <div className="giving-image-container">
        <div className="sub">
          <img loading="lazy" src={Image} loading="lazy" alt="giving-image" />
          <h3 className="giving-text">Thank you for worshipping with us </h3>
        </div>
      </div>
      <form class="form">
        <h2 className="form-header">FIRST TIMER DETAILS</h2>
        <p type="Name:">
          <input className="prayer-input" placeholder="Write your name here..."></input>
        </p>
        <p type="Email/Phone Number:">
          <input
            className="prayer-input"
            placeholder="Let us know how to contact you back.."
          ></input>
        </p>
        <p type="Address:">
          <input className="prayer-input" placeholder="Tell us where you stay.."></input>
        </p>
        <button className="send-message">Send Details</button>
        <div classname="form-div">
          {/* <span class="fa fa-phone"></span>001 1023 567 */}
          {/* <span class="fa fa-envelope-o"></span>christreign@increasecity.org */}
        </div>
      </form>
    </div>
  );
};

export default FirstTimer;

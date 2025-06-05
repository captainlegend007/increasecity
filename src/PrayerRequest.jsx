import React, { useState } from "react";
import Image from "../assets/Papa-i.webp";
import "./giving.css";
import "./prayerRequest.css";
import axios from "axios";
import swal from "sweetalert";

const PrayerRequest = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [prayer, setPrayer] = useState("");

  const sendFormData = async (event) => {
    event.preventDefault();
    const data = {
      name,
      prayer,
      number,
    };
    try {
      await axios
        .post("http://localhost:5000/echurch/prayer-request", data)
        .then((res) => {
          if (res.status === 200) {
            {
              swal(
                "Thank you!",
                "You submitted your prayer successfully!",
                "success"
              );
              setName("");
              setNumber("");
              setPrayer("");
            }
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="giving-image-container">
        <div className="sub">
          <img src={Image} loading="lazy" alt="giving-image" />
          <h3 className="giving-text">Prayer Requests </h3>
        </div>
      </div>
      <form className="form">
        <h2 className="form-header">PRAYER REQUEST</h2>
        <p type="Name:">
          <input
            className="prayer-input"
            placeholder="Write your name here..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </p>
        <p type="Email/Phone Number:">
          <input
            className="prayer-input"
            placeholder="Let us know how to contact you back.."
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></input>
        </p>
        <p type="Message:">
          <input
            className="prayer-input"
            placeholder="Specify your prayer request"
            value={prayer}
            onChange={(e) => setPrayer(e.target.value)}
          ></input>
        </p>
        <button className="send-message" onClick={sendFormData}>
          Send Message
        </button>
        {/* <div className="form-div"></div> */}
      </form>
    </div>
  );
};

export default PrayerRequest;

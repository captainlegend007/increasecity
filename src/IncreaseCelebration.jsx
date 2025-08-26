import React, { useState } from "react";
import Image from "../assets/Papa-g.webp";
import "./increasecelebration.css";
import axios from "axios";
import { toast } from "react-toastify";

const IncreaseCelebration = () => {
  const [physical, setPhyscial] = useState(false);
  const [online, setOnline] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const HandleCheckBox1 = () => {
    setPhyscial(true);
    setOnline(false);
  };
  const HandleCheckBox2 = (e) => {
    setPhyscial(false);
    setOnline(true);
  };

  const sendFormData = async (event) => {
    event.preventDefault();
    const userData = {
      name,
      email,
      number,
      physical,
      online,
    };

    const { data } = await axios.post(
      "https://increasecity-backend.vercel.app/registration",
      userData
    );
    console.log(data.message);
    if (data.success) {
      toast.success(data.message);
      setName("");
      setEmail("");
      setNumber("");
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div>
      <div>
        <div className="giving-image-container">
          <div className="sub">
            <img src={Image} loading="lazy" alt="giving-image" />
            <h3 className="giving-text">2025 Increase Celebration Registration</h3>
          </div>
        </div>
        <form className="form" onSubmit={sendFormData}>
          <h2 className="form-header">REGISTER</h2>
          <p type="Name:">
            <input
              className="prayer-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Write your name here..."
            ></input>
          </p>
          <p type="Email:">
            <input
              className="prayer-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Let us know how to contact you back.."
              type="email"
            ></input>
          </p>
          <p type="Number:">
            <input
              className="prayer-input"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Let us know how to contact you back.."
              type="search"
            ></input>
          </p>
          <p type="How will you be attending:"></p>
          <div className="register-option">
            <div className="option-a">
              <input
                className="prayer-input-b"
                placeholder="Specify your prayer request"
                type="checkbox"
                onChange={HandleCheckBox1}
                checked={physical}
              />
              <p className="method">Physical</p>
            </div>
            <div className="option-a">
              <input
                className="prayer-input-b"
                placeholder="Specify your prayer request"
                type="checkbox"
                checked={online}
                onChange={HandleCheckBox2}
              ></input>
              <p className="method">Online</p>
            </div>
          </div>
          <p type="Method of Attendance:">
            <input
              className="prayer-input"
              placeholder="Specify your prayer request"
              value={physical ? "Physcial" : "I'll Stream via Facebook"}
              type="input"
            ></input>
          </p>
          <div className="details">
            <p>Make Payment of NGN 5,000 to proceed with your registration</p>
            <h3 className="bank-name">ECO BANK</h3>
            <h3 className="account-number">5811034038</h3>
          </div>
          <button className="send-message" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default IncreaseCelebration;

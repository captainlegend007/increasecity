import React, { useState } from "react";
import Image from "../assets/Papa-g.webp";
import "./increasecelebration.css";
import axios from "axios";
import { toast } from "react-toastify";

const IncreaseCelebration = () => {
  const [attendance, setAttendance] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const handleGenderChange = (value) => {
    setGender(value);
  };
  const handleAttendanceChange = (value) => {
    setAttendance(value);
  };

  const sendFormData = async (event) => {
    event.preventDefault();
    const userData = {
      firstName,
      lastName,
      address,
      gender,
      email,
      number,
      attendance,
    };

    if (
      !firstName ||
      !lastName ||
      !address ||
      !gender ||
      !email ||
      !number ||
      !attendance
    ) {
      return toast.error("You didn't fill the form completely");
    } else {
      try {
        const { data } = await axios.post(
          "https://increasecity-backend-nu.vercel.app/registration",
          userData
        );
        if (data.success) {
          toast.success(data.message);
          setFirstName("");
          setLastName("");
          setAddress("");
          setEmail("");
          setNumber("");
          setAttendance("");
          setGender("");
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
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
          <p type="First Name:">
            <input
              className="prayer-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Write your First Name here..."
            ></input>
          </p>
          <p type="Last Name:">
            <input
              className="prayer-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Write your Last Name here..."
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
              type="tel"
              min="10"
              max="11"
            ></input>
          </p>
          <p type="How will you be attending:"></p>
          <div className="register-option">
            <div className="option-a">
              <input
                className="prayer-input-b"
                placeholder="Specify your prayer request"
                type="checkbox"
                checked={attendance === "physical"}
                onChange={() => handleAttendanceChange("physical")}
                value="physical"
              />
              <p className="method">Physical</p>
            </div>
            <div className="option-a">
              <input
                className="prayer-input-b"
                placeholder="Specify your prayer request"
                type="checkbox"
                checked={attendance === "online"}
                onChange={() => handleAttendanceChange("online")}
                value="online"
              ></input>
              <p className="method">Online</p>
            </div>
          </div>
          <p type="Gender:"></p>
          <div className="register-option">
            <div className="option-a">
              <input
                className="prayer-input-b"
                type="checkbox"
                checked={gender === "female"}
                onChange={() => handleGenderChange("female")}
                value="female"
              />
              <p className="method">Female</p>
            </div>
            <div className="option-a">
              <input
                className="prayer-input-b"
                type="checkbox"
                checked={gender === "male"}
                onChange={() => handleGenderChange("male")}
                value="male"
              ></input>
              <p className="method">Male</p>
            </div>
          </div>
          <p type="Address:">
            <input
              className="prayer-input"
              placeholder="Specify your Home Address"
              value={address}
              type="input"
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </p>
          {attendance === "physical" && (
            <div className="account-details-forReg">
              <p>Make Payment of NGN 5,000 to proceed with your registration</p>
              <h3 className="bank-name">ECO BANK</h3>
              <h3 className="account-number">5811034038</h3>
            </div>
          )}
          {attendance === "online" && (
            <div className="account-details-forReg">
              <p>If You Intend To Support the Program</p>
              <h3 className="bank-name">ECO BANK</h3>
              <h3 className="account-number">5811034038</h3>
            </div>
          )}
          <button className="send-message" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default IncreaseCelebration;

import { useState } from "react";
import Image from "../assets/Papa-j.webp";
import axios from "axios";

const EChurchTestimonies = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [testimony, setTestimony] = useState("");

  const sendFormData = async (event) => {
    event.preventDefault();
    const data = {
      name,
      number,
      testimony,
    };

    try {
      await axios
        .post(" http://localhost:5001/echurch/share-your-testimonies", data)
        .then((res) => {
          if (res.status === 200) {
            {
              swal("Thank you!", "You submitted your testimony successfully!", "success");
              setName("");
              setNumber("");
              setTestimony("");
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
          <h3 className="giving-text">Share Your Testimony </h3>
        </div>
      </div>
      <form class="form">
        <h2 className="form-header">TESTIMONY</h2>
        <p type="Name:">
          <input
            className="prayer-input"
            placeholder="Write your name here..."
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </p>
        <p type="Email/Phone Number:">
          <input
            className="prayer-input"
            placeholder="Let us know how to contact you back.."
            value={number}
            onChange={(event) => setNumber(event.target.value)}
          ></input>
        </p>
        <p type="Testimony:">
          <input
            className="prayer-input"
            placeholder="Tell us what the Lord had done.."
            value={testimony}
            onChange={(event) => setTestimony(event.target.value)}
          ></input>
        </p>
        <button className="send-message" onClick={sendFormData}>
          Send Testimony
        </button>
        <div classname="form-div">
          {/* <span class="fa fa-phone"></span>001 1023 567 */}
          {/* <span class="fa fa-envelope-o"></span>christreign@increasecity.org */}
        </div>
      </form>
    </div>
  );
};

export default EChurchTestimonies;

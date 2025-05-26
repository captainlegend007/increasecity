import "./giving.css";
import Image from "../assets/Papa-b.webp";
import { Link } from "react-router-dom";

const Giving = () => {
  return (
    <div>
      <div className="giving-image-container">
        <div className="sub">
          <img src={Image} loading="lazy" alt="giving-image" />
          <h3 className="giving-text">Offering, Tithe and Donations </h3>
        </div>
      </div>
      <div className="online-giving">
        <Link to="https://paystack.com/pay/increase-giving">
          <h3 className="pay-with-card">Pay With Card</h3>
        </Link>
      </div>
      <div className="giving-details">
        <div className="offering">
          <div className="details">
            <h3 className="bank-name">Offering</h3>
            <h3 className="bank-name">ACCESS BANK</h3>
            <h3 className="account-number">0065675723</h3>
          </div>
        </div>
        <div className="tithe">
          {" "}
          <div className="details">
            <h3 className="bank-name">Tithe</h3>
            <h3 className="bank-name">ACCESS BANK</h3>
            <h3 className="account-number">0067378664</h3>
          </div>
        </div>
        <div className="project">
          {" "}
          <div className="details">
            <h3 className="bank-name">Project</h3>
            <h3 className="bank-name">ECO BANK</h3>
            <h3 className="account-number">5811034038</h3>
          </div>
        </div>
        <div className="seed">
          {" "}
          <div className="details">
            <h3 className="bank-name">Seed</h3>
            <h3 className="bank-name">ACCESS BANK</h3>
            <h3 className="account-number">0067380270</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Giving;

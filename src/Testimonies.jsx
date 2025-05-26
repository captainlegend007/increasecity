import Image from "../assets/Papa-d.webp";
import { testimoniesSource } from "./testimoniesSource";
import "./testimonies.css";

const Testimonies = () => {
  return (
    <div>
      <div className="giving-image-container">
        <div className="sub">
          <img src={Image} loading="lazy" alt="testimonies-image" />
          <h3 className="giving-text">Testimonies </h3>
        </div>
      </div>
      <div className="testimonies-parent">
        {testimoniesSource.map((items, i) => {
          return (
            <div key={i}>
              <div className="iframe-head">
                <div className="iframe-parent">
                  <iframe
                    src={items.link}
                    width="640"
                    height="350"
                    allow="autoplay"
                  ></iframe>
                </div>
                <h3>{items.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonies;

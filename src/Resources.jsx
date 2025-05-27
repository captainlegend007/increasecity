import Image from "../assets/Papa-i.webp";
import "./resources.css";
import { resourcesSource } from "./ResourcesSource";

const Resources = () => {
  return (
    <div>
      {" "}
      <div className="giving-image-container">
        <div className="sub">
          <img src={Image} loading="lazy" alt="giving-image" />
          <h3 className="giving-text">Edifying Contents </h3>
        </div>

        <div className="video-container">
          {resourcesSource.map((items, i) => {
            return (
              <div key={i}>
                <div className="item">
                  <div>
                    <iframe
                      alt="edifying-contents"
                      className="iframe"
                      src={items.link}
                      width="267"
                      height="476"
                      scrolling="no"
                      frameBorder={0}
                      allowfullscreen="true"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen="true"
                    />{" "}
                  </div>
                </div>
                <h3 className="message-title">{items.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Resources;

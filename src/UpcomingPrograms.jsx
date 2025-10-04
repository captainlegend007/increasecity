import Image from "../assets/Papa-f.webp";
import "./UpcomingPrograms.css";
import { useState } from "react";
import { ProgramDetails } from "./ProgramDetails";

const UpcomingPrograms = () => {
  const [line, setLine] = useState(false);

  const toggleLine = () => {
    setLine(!line);
  };
  return (
    <div>
      <div className="giving-image-container">
        <div className="sub">
          <img loading="lazy" src={Image} loading="lazy" alt="upcoming-program-image" />
          <h3 className="giving-text">Upcoming Programs </h3>
        </div>
      </div>

      <div className="calendar-parent">
        <div className="calendar" onMouseEnter={toggleLine} onMouseLeave={toggleLine}>
          2025 Calendar
        </div>
        <hr className={line ? "line-effect-b" : "line-effect"} />
        <div className="calendar-sub">
          <div className="cal-a">Date</div>
          <div className="cal-a">Speakers</div>
          <div className="cal-a">Program</div>
          <div className="cal-a">Information</div>
        </div>{" "}
        {ProgramDetails.map((data, i) => {
          return (
            <>
              <div className="calendar-items" key={i}>
                <div className="cal-a">
                  <div className="date">{data.Date}</div>
                  <div className="month">{data.Month}</div>
                </div>
                <div className="cal-a">
                  <img loading="lazy" src={Image} className="speaker-image" />
                </div>
                <div className="cal-a">
                  <div className="program-name">{data.Name}</div>
                  <div className="program-details">{data.Time}</div>
                </div>
                <div className="cal-a">{data.Information}</div>
              </div>
              {/* <hr className="line-b" /> */}
            </>
          );
        })}
        {/* <div className="calendar-items">
          <div className="cal-a">
            <div className="date">16th</div>
            <div className="month">November</div>
          </div>
          <div className="cal-a">
            <img loading="lazy" src={Image} className="speaker-image" />
          </div>
          <div className="cal-a">
            <div className="program-name">Prayer for all round change</div>
            <div className="program-details">4:00 - 6:00PM</div>
          </div>
          <div className="cal-a">Start the month with prayers</div>
        </div>
        <hr className="line-b" /> */}
      </div>
    </div>
  );
};

export default UpcomingPrograms;

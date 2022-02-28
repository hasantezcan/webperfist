import React from "react";

const PreviousEventCard = () => {
  return (
    <div className="previous-event-card">
      <div className="event-content">
        <div className="title">
          <p>3rd party performance</p>
        </div>
        <div className="date">
          <p>7 Şubat 2021</p>
        </div>
        <div className="description">
          <p>Measuring Web Perf, Core Vitals and Lighthouse workshop</p>
        </div>
        <div className="event-redirection-button">
          <a href="https://www.youtube.com/webperfist">
            <p>Yayın kaydına Git!</p>
          </a>
        </div>
      </div>
      <div className="lecturer">
        <div className="avatar">
          <img
            src="https://avatars.githubusercontent.com/u/32804505?v=4"
            alt=""
          />
        </div>
        <div className="name">
          <p>Hasan Tezcan</p>
        </div>
        <div className="company-name">
          <p>"Trendyol"</p>
        </div>
      </div>
    </div>
  );
};

export { PreviousEventCard };

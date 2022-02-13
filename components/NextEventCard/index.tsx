import React from "react";

const NextEventCard = () => {
  return (
    <div className="next-event-card-wrapper">
      <div className="title">
        <h2>Gelecek Etkinlik</h2>
      </div>
      <div className="next-event-card">
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
        <div className="event-name">
          <p>3rd party performance</p>
        </div>
      </div>
    </div>
  );
};

export { NextEventCard };

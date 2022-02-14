import React from "react";
import Countdown from "react-countdown";

import LiveImageSvg from "../LiveImageSvg";
const NextEventCard = () => {
  return (
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
      <div className="next-event-content">
        <div className="next-event-title">
          <div className="next-event-badge">
            <p>Gelecek Etkinlik</p>
          </div>
          <div className="next-event-count-down">
            <Countdown date={Date.now() + 3000}>
              <a className="live-stream-link" rel="stylesheet" href="https://www.youtube.com/webperfist">
                <LiveImageSvg />
                Canlı Yayına Git!
              </a>
            </Countdown>
          </div>
        </div>
        <div className="event-name">
          <p>3rd party performance</p>
        </div>
        <div className="event-detail">
          <div className="time">
            <p>7 Şubat 19:30</p>
          </div>
          <div className="seperator"></div>
          <div className="social-redirection">
            <div className="kommunity">
              <img src="/images/kommunity-logo.svg" alt="Kommunity" />
              <p>ile katıl</p>
            </div>
            <div className="youtube">
              <img src="/images/youtube-logo.svg" alt="Youtube" />
              <p>hatırlatıcısı ekle</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { NextEventCard };

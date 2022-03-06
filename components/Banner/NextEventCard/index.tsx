import React from "react";
import Countdown from "react-countdown";
import LiveImageSvg from "./LiveImageSvg";

import events from "../../../data/events.json";

const NextEventCard = () => {
  const nextEvent = events[events.length - 1];

  const { title, date, kommunityUrl, youtubeUrl, lecturer } = nextEvent;

  const eventDate = new Date(date);

  const counterRenderer = ({ days, hours, minutes, completed }: any) => {
    if (completed) {
      return (
        <a className="live-stream-link" rel="stylesheet" href={youtubeUrl}>
          <LiveImageSvg />
          Canlı Yayına Git!
        </a>
      );
    } else {
      return (
        <span>
          {days} gün {hours} saat {minutes} dakika kaldı
        </span>
      );
    }
  };

  // const eventDateWithOneDay = new Date(eventDate.getTime() - 86400000);
  // substrac 10 hours from event date

  if (eventDate.getTime() < Date.now() - 86400000) {
    return <div className="no-next-event"></div>;
  } else {
    return (
      <div className="next-event-card">
        <div className="lecturer">
          <div className="avatar">
            <img src={lecturer.avatar} alt="" />
          </div>
          <div className="name">
            <p>{lecturer.name}</p>
          </div>
          <div className="company-name">
            <p>{`"${lecturer.company}"`}</p>
          </div>
        </div>
        <div className="next-event-content">
          <div className="next-event-title">
            <div className="next-event-badge">
              <p>Gelecek Etkinlik</p>
            </div>
            <div className="next-event-count-down">
              <Countdown date={eventDate} renderer={counterRenderer} />
            </div>
          </div>
          <div className="event-name">
            <p>{title}</p>
          </div>
          <div className="event-detail">
            <div className="time">
              <p>
                {eventDate.toLocaleString("tr-TR", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
            <div className="seperator"></div>
            <div className="social-redirection">
              <div className="kommunity">
                <a href={kommunityUrl} target="_blank" rel="noreferrer">
                  <img src="/images/kommunity-logo.svg" alt="Kommunity" />
                </a>
                <p>ile katıl</p>
              </div>
              <div className="youtube">
                <a href={youtubeUrl} target="_blank" rel="noreferrer">
                  <img src="/images/youtube-logo.svg" alt="Youtube" />
                </a>
                <p>hatırlatıcısı ekle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export { NextEventCard };

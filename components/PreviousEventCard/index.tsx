import React, { FunctionComponent } from "react";
import { Event } from "../../models/events";
interface PreviousEventCardProps {
  event: Event;
}

const PreviousEventCard: FunctionComponent<PreviousEventCardProps> = ({
  event,
}) => {
  const { title, date, description, youtubeUrl, lecturer } = event;

  const eventDate = new Date(date);
  return (
    <div className="previous-event-card">
      <div className="event-content">
        <div className="title">
          <p>{title}</p>
        </div>
        <div className="date">
          <p>
            {eventDate.toLocaleString("tr-TR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="description">
          <p>{description}</p>
        </div>
        <div className="event-redirection-button">
          <a href={youtubeUrl} target="_blank" rel="noreferrer">
            <p>Yayın kaydına Git!</p>
          </a>
        </div>
      </div>
      <a
        className="lecturer-wrapper"
        href={lecturer.linkedin}
        target="_blank"
        rel="noreferrer"
      >
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
      </a>
    </div>
  );
};

export { PreviousEventCard };

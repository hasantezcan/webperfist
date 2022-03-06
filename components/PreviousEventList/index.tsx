import React from "react";
import { PreviousEventCard } from "./PreviousEventCard";
import events from "../../data/events.json";

const PreviousEventList = () => {
  return (
    <>
      <h1 className="previous-event-card-list-title">Geçmiş Etkinlikler</h1>
      <div className="previous-event-card-list">
        {events.map((event) => (
          <PreviousEventCard key={event.date} event={event} />
        ))}
      </div>
    </>
  );
};

export { PreviousEventList };

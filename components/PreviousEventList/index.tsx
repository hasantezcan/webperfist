import React from "react";
import { PreviousEventCard } from "../PreviousEventCard";

const PreviousEventList = () => {
  return (
    <>
      <h1 className="previous-event-card-list-title">Geçmiş Etkinlikler</h1>
      <div className="previous-event-card-list">
        <PreviousEventCard />
        <PreviousEventCard />
        <PreviousEventCard />
        <PreviousEventCard />
        <PreviousEventCard />
        <PreviousEventCard />
        <PreviousEventCard />
        <PreviousEventCard />
      </div>
    </>
  );
};

export { PreviousEventList };

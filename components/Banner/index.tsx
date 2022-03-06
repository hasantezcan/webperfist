import React from "react";
import { NextEventCard } from "./NextEventCard";
import { NoEventCard } from "./NoEventCard";

import events from "../../data/events.json";

const Banner = () => {
  const nextEvent = events[events.length - 1];
  const eventDate = new Date(nextEvent.date);

  return (
    <div>
      {eventDate.getTime() < Date.now() - 86400000 ? (
        <NoEventCard />
      ) : (
        <NextEventCard />
      )}
    </div>
  );
};

export { Banner };

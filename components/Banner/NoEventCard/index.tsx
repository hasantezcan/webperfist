import React from "react";

import { socialMedia } from "../../../data/socialMedia.json";

const NoEventCard = () => {
  return (
    <div className="no-event-card">
      <div className="badge">
        <p>Gelecek etkinliklerimiz için bizi takip et</p>
      </div>
      <div className="seperator"></div>
      <div className="social-redirection">
        <div className="kommunity">
          <a href={socialMedia.kommunity} target="_blank" rel="noreferrer">
            <img src="/images/kommunity-logo.svg" alt="Kommunity" />
          </a>
          <p>ile katıl</p>
        </div>
        <div className="youtube">
          <a href={socialMedia.youtube} target="_blank" rel="noreferrer">
            <img src="/images/youtube-logo.svg" alt="Youtube" />
          </a>
          <p>{`'dan abone ol`}</p>
        </div>
      </div>
    </div>
  );
};

export { NoEventCard };

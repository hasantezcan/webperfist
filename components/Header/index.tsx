import { SocialMedia } from "./SocialMedia";
import data from "../../data/socialMedia.json";

const { socialMedia } = data;

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <img className="logo" src="/images/logo.svg" alt="webperfist-logo" />

        <p className="info">
          {`  Web performans üzerine odaklanmış bir topluluktur. Amacımız
          ulaştığımız kitlelere, web'i olabildiğince hızlı ve doğru bir şekilde
          ulaştırmaktır. Etkinliklerimizden haberdar olmak için `}
          <a className="link" href={socialMedia.kommunity}>
            #Komunity
          </a>
          {` üzerinden bizi takip edebilir ya da youtube kanalımıza abone
          olabilirsiniz.`}
        </p>

        <SocialMedia />
      </div>
      <div className="right">
        <div className="speed-metor-image">
          <img
            className="logo"
            src="/images/speedometer.svg"
            alt="speedometer"
          />
        </div>
      </div>
    </div>
  );
};

export { Header };

import Image from "next/image";
import { socialMedia } from "../../data/socialMedia.json";
import { SocialMedia } from "../SocialMedia";

const Header = () => {
  return (
    <div className="header">
      <div className="left">
        <Image
          className="logo"
          src="/images/logo.svg"
          alt="Webperfist Logo"
          height={72}
          width={297}
        />

        <p className="info">
          Web performans üzerine odaklanmış bir topluluktur. Amacımız
          ulaştığımız kitlelere, web'i olabildiğince hızlı ve doğru bir şekilde
          ulaştırmaktır. Etkinliklerimizden haberdar olmak için{" "}
          <a className="link" href={socialMedia.kommunity}>
            #Komunity
          </a>{" "}
          üzerinden bizi takip edebilir ya da youtube kanalımıza abone
          olabilirsiniz.
        </p>

        <SocialMedia />
      </div>
      <div className="right">
        <div className="speed-metor-image">
          <img className="logo" src="/images/speedometer.svg" />
        </div>
      </div>
    </div>
  );
};

export { Header };

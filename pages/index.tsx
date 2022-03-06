import type { NextPage } from "next";
import Head from "next/head";
import Main from "./Main";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>WebperfIst</title>
        <meta
          name="description"
          content="Web performans üzerine odaklanmış bir topluluktur. Amacımız ulaştığımız kitlelere, web'i olabildiğince hızlı ve doğru bir şekilde ulaştırmaktır."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
    </div>
  );
};

export default Home;

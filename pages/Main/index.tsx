import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { NextEventCard } from "../../components/NextEventCard";
import { PreviousEventList } from "../../components/PreviousEventList";

const Main = () => {
  return (
    <main className="main">
      <Header />
      <NextEventCard />
      <PreviousEventList />

      <div className="form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScCjzsICzKWqa16i4urzSGUheRq-Cx2BJTiLDd7fSSNrVnRyw/viewform?embedded=true"
          frameBorder="0"
          className="speaker-form-iframe"
        >
          Yükleniyor…
        </iframe>
      </div>

      <Footer />
    </main>
  );
};

export default Main;

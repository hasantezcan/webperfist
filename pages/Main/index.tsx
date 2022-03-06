import { Banner } from "../../components/Banner";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { LecturerForm } from "../../components/LecturerForm";
import { PreviousEventList } from "../../components/PreviousEventList";

const Main = () => {
  return (
    <main className="main">
      <Header />

      <Banner />

      <PreviousEventList />

      <LecturerForm />

      <Footer />
    </main>
  );
};

export default Main;

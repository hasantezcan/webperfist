import { Header } from "../../components/Header";
import { NextEventCard } from "../../components/NextEventCard";
import { PreviousEventList } from "../../components/PreviousEventList";

const Main = () => {
  return (
    <main className="main">
      <Header />
      <NextEventCard />
      <PreviousEventList />
    </main>
  );
};

export { Main };

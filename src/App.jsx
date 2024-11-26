import ArtistInfo from "./components/ArtistInfo";
import EventSchedule from "./components/EventSchedule";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TicketSection from "./components/TicketSection";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <EventSchedule />
      <ArtistInfo />
      <TicketSection/>
    </>
  );
}

export default App;

import ArtistInfo from "./components/ArtistInfo";
import EndSection from "./components/EndSection";
import EventSchedule from "./components/EventSchedule";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Profile from "./components/Profile";
import SponsorSection from "./components/SponsorSection";
import TicketSection from "./components/TicketSection";
function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <EventSchedule />
      <ArtistInfo />
      <TicketSection/>
      <Gallery/>
      <Profile/>
      <SponsorSection/>
      <EndSection/>
      <Footer/>
    </>
  );
}

export default App;

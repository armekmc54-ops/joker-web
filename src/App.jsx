import { useState } from "react";
import AgeGateModal from "./components/common/AgeGateModal.jsx";
import Navbar from "./components/layout/Navbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import HeroSection from "./components/hero/HeroSection.jsx";
import MenuSection from "./components/menu/MenuSection.jsx";
import EventsBoard from "./components/events/EventsBoard.jsx";
import ReservationForm from "./components/booking/ReservationForm.jsx";
import WhatsAppFloatButton from "./components/common/WhatsAppFloatButton.jsx";
import ConciergeWidget from "./components/concierge/ConciergeWidget.jsx";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-onyx">
      <AgeGateModal />
      <Navbar onCartClick={() => setCartOpen(true)} />

      <main>
        <HeroSection />
        <MenuSection cartOpen={cartOpen} setCartOpen={setCartOpen} />
        <EventsBoard />
        <ReservationForm />
      </main>

      <Footer />
      <WhatsAppFloatButton />
      <ConciergeWidget />
    </div>
  );
}

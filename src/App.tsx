import Header from "./components/Header";
import Hero from "./components/Hero";
import QuickLinks from "./components/QuickLinks";
import Services from "./components/Services";
import About from "./components/About";
import PediatricHighlight from "./components/PediatricHighlight";
import Team from "./components/Team";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";
import WhatsAppFloatButton from "./components/WhatsAppFloatButton";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-text">
      <Header />
      <main>
        <Hero />
        <QuickLinks />
        <Services />
        <About />
        <PediatricHighlight />
        <Team />
        <Reviews />
        <Location />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </div>
  );
}

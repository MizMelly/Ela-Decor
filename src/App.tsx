import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Collection from "./components/Collection";
import Philosophy from "./components/Philosophy";
import Showcase from "./components/Showcase";
import WhyChooseUs from "./components/WhyChooseUs"
import QuoteSection from "./components/QuoteSection";
import SpaceCta from "./components/SpaceCta";


function App() {
  return (
    <div className="min-h-screen bg-[#F3EEE5]">
      <Navbar />

      <main>
        <Hero />
        <Collection />
        <Philosophy />
        <Showcase />
        <WhyChooseUs />
        <QuoteSection />
        <SpaceCta />

        <Footer />
      </main>
    </div>
  );
}

export default App;
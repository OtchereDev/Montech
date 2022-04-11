import type { NextPage } from "next";
import AddNFT from "../components/AddNFT";
import Award from "../components/Award";
import BenefitsList from "../components/benefits/BenefitsList";
import Checkout from "../components/Checkout";
import Discovery from "../components/Discovery";
import HeroSection from "../components/HeroSection";
import MarketPlace from "../components/MarketPlace";
import Newsletter from "../components/Newsletter";
import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/NavBar";
import TrackReport from "../components/TrackReport";

const Home: NextPage = () => {
  return (
    <div className="bg-primaryBlue min-h-screen min-w-full overflow-y-scroll font-primary">
      <NavBar />
      <HeroSection />
      <BenefitsList />
      <Discovery />
      <TrackReport />
      <AddNFT />
      <MarketPlace />
      <Award />
      <Checkout />
      <Newsletter />

      <Footer />
    </div>
  );
};

export default Home;

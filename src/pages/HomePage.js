import Clients from "parts/Clients";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import BrowseRoom from "parts/HomePage/BrowseRoom";
import JustArrived from "parts/HomePage/JustArrived";
import Sitemap from "parts/Sitemap";
import useScrollAnchor from "helpers/hooks/useScrollAnchor";

const HomePage = () => {
  useScrollAnchor();

  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
};

export default HomePage;

import React from "react";
import Header from "../components/header";
import Hero from "../components/Hero";
import Map from "../components/Map";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import ContactButton from "../components/ContactButton";
import FeaturesSection from "../components/features/FeaturesSection";
import ReviewsSection from "../components/ReviewsSection";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <ContactButton />
      <FeaturesSection />
      <Map />

      <CTASection />
       <ReviewsSection />
      <Footer />
    </>
  );
};

export default Home;

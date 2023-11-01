import React from "react";
import NavbarComponent from "../Components/NavbarComponent";
import Hero from "../Components/Hero";
import LocationBar from "../Components/LocationBar";
import CallToAction1 from "../Components/CallToAction1";
import CarouselSection2 from "../Components/CarouselSection2";
import GallerySection from "../Components/GallerySection";
import FooterSection from "../Components/FooterSection";

export default function Home() {
  return (
    <div>
      <NavbarComponent />
      <Hero />
      <LocationBar />
      <CallToAction1 />
      <CarouselSection2 />
      <GallerySection />
      <FooterSection />
    </div>
  );
}

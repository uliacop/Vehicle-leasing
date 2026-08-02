import React from "react";
import Marquee from "react-fast-marquee";
import LeasingCalculator from "../../components/LeasingCalculator/LeasingCalculator";
import Achievements from "../../components/Achievements/Achievements";
import WhyChoose from "../../components/WhyChoose/WhyChoose";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import bookAdventure from "../../img/info-baner/book-your-adventure.png";
export default function PricingPage() {
  return (
    <main>
      <Achievements />
      <WhyChoose />
      <LeasingCalculator />
      <InfoBanner img={bookAdventure}>
        <h3>Find Your Perfect Ride</h3>
        <Marquee>
          <p className="marquee-text">
            Book Your Adventure Today and Feel the Power of the Open Road
          </p>
        </Marquee>
      </InfoBanner>
    </main>
  );
}

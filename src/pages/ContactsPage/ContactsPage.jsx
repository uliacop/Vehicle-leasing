import React from "react";
import Contact from "../../components/Contact/Contact";
import "./ContactsPage.css";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import explore from "/img/info-baner/exploreOurFleet.png";
import Marquee from "react-fast-marquee";
import Map from "../../components/Map/Map";
export default function ContactsPage() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Feel free to contact us with questions, potencial partnerships or media
        inquiries
      </p>
      <Contact />
      <Map />
      <InfoBanner img={explore}>
        <Marquee>
          <p className="marquee-text">
            Explore Our Fleet and Book Your Dream Car Today!
          </p>
        </Marquee>
      </InfoBanner>
    </div>
  );
}

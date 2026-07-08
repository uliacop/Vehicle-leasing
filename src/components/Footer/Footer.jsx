import React from "react";
import "./Footer.css";
const footerData = [
  {
    title: "Products",
    links: ["Used", "New", "Sell your car"],
  },
  {
    title: "Resources",
    links: ["Blog", "FAQ", "Contacts us"],
  },
  {
    title: "Work with TrueCar",
    links: ["Dealers", "Partners", "Team"],
  },
  {
    title: "About",
    links: ["About us", "Team", "Careers"],
  },
];
export default function Footer() {
  return (
    <footer>
      <div className="footer-list">
        {footerData.map((footerUnit) => (
          <div>
            <h3>{footerUnit.title}</h3>
            <ul className="footerUnit">
              {footerUnit.links.map((link) => (
                <li>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="svg-block">
        <ul className="svg-list">
          <li>
            <span>
              <img className="footer-svg" src="/src/img/signs/apple.svg" />
            </span>
            <p>Available on the AppStore</p>
          </li>
          <li>
            <span>
              <img className="footer-svg" src="/src/img/signs/playMarket.png" />
            </span>
            <p>Get it Google play</p>
          </li>
        </ul>
      </div>
      <p className="footer-p">
        For questions about the TrueCar Auto Buying Service please call
        1-888-878-3227. Certified Dealers are contractually obligated by TrueCar
        to meet certain customer service requirements and complete the TrueCar
        Dealer Certification Program. TrueCar does not broker, sell, or lease
        motor vehicles. Unless otherwise noted, all vehicles shown on this
        website are offered for sale by licensed motor vehicle dealers. All
        vehicles are subject to prior sale. By accessing this website, you agree
        to the TrueCar Terms of Service and Privacy Policy.
      </p>
      <ul className="footer-info">
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Do Not Sell My Personal Information</li>
      </ul>
    </footer>
  );
}

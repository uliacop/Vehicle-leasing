import React from "react";

import "./InfoBanner.css";
export default function InfoBanner({ img, title, children }) {
  return (
    <div>
      <section
        className="info-banner"
        style={{ backgroundImage: `url(${img})` }}
      >
        <h3 className="info-banner-text">{title}</h3>
        {/*         <p>{text}</p> */}
        {children}
      </section>
    </div>
  );
}

import React from "react";
import Accordion from "../../components/Accordion/Accordion";

import fqa from "../../../fqa.json";

export default function AboutPage() {
  console.log("AboutPage");
  return (
    <main>
      <Accordion data={fqa} />
    </main>
  );
}

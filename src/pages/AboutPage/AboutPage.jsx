import React from "react";
import Accordion from "../../components/Accordion/Accordion";
import fqa from "../../../data/fqa.json";
import TextExpanderList from "../../components/TextExpander/TextExpanderList";
import ChooseDM from "../../components/ChooseD&M/ChooseD&M";
import InfoBanner from "../../components/InfoBanner/InfoBanner";
import reserve from "/src/img/info-baner/reserve-your-dream.png";
export default function AboutPage() {
  console.log("AboutPage");
  return (
    <main>
      <Accordion data={fqa} />
      <ChooseDM />
      <TextExpanderList />
      <InfoBanner img={reserve}>
        <h3>Reserve Your Dream Car Today and Feel Best Experience Travel</h3>
      </InfoBanner>
    </main>
  );
}

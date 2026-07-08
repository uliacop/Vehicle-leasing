import { useState } from "react";
import AccordionItem from "./AccordionItem";
import "./Accordion.css";
export default function Accordion({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="accordion">
      <h3>FAQ</h3>
      {data.map((el, index) => (
        <ul className="list" key={el.id}>
          <li className="item">
            <AccordionItem
              title={el.title}
              text={el.text}
              index={index}
              activeIndex={activeIndex}
              onClickItem={setActiveIndex}
            />
          </li>
        </ul>
      ))}
    </div>
  );
}

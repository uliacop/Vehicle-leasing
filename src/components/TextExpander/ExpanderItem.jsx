import { useState } from "react";
import css from "./ExpanderItem.module.css";
export default function ExpanderItem({
  fullText,
  collapsedNumWords,
  expandButtonText,
  collapseButtonText,
  headerText,
  img,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? fullText
    : fullText.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  return (
    <>
      <img src={img} alt={headerText} className="img-car" />
      <h4>{headerText}</h4>
      <p className="text">{displayText}</p>
      <button
        className={css.button}
        onClick={() => setIsExpanded((exp) => !exp)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </>
  );
}

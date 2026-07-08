import { useState } from "react";
import css from "./ExpanderItem.module.css";
export default function ExpanderItem({
  fullText,
  collapsedNumWords,
  expandButtonText,
  collapseButtonText,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded
    ? fullText
    : fullText.split(" ").slice(0, collapsedNumWords).join(" ") + "...";

  return (
    <>
      <span className={css.text}>{displayText}</span>
      <button
        className={css.button}
        onClick={() => setIsExpanded((exp) => !exp)}
      >
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </>
  );
}

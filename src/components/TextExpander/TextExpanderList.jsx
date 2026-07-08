import ExpanderItem from "./ExpanderItem";
import css from "./TextExpanderList.module.css";
import textexpander from "../../../textexpander.json";
export default function TextExpanderList({
  collapsedNumWords = 10,
  expandButtonText = "Show more",
  collapseButtonText = "Show less",
}) {
  return (
    <ul>
      {textexpander.map((item) => (
        <li className={css.unit} key={item.id}>
          <ExpanderItem
            fullText={item.text}
            collapsedNumWords={collapsedNumWords}
            expandButtonText={expandButtonText}
            collapseButtonText={collapseButtonText}
          />
        </li>
      ))}
    </ul>
  );
}

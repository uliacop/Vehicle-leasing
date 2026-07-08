import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import "./AccordionItem.css";
export default function AccordionItem({
  index,
  title,
  text,
  activeIndex,
  onClickItem,
}) {
  const isActive = index === activeIndex;
  function handleClick() {
    onClickItem(isActive ? null : index);
  }
  return (
    <div className={`unit-faq ${isActive ? "open" : ""}`} onClick={handleClick}>
      <div className="faq">
        <p className="number">{index < 9 ? `0${index + 1}` : index + 1}</p>
        <p className="title"> {title} </p>
        <span className="icon">{isActive ? <FiMinus /> : <GoPlus />}</span>
      </div>
      {isActive && <p className="content">{text}</p>}
    </div>
  );
}

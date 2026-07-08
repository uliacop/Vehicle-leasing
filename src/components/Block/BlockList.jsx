import BlockListItem from "./BlockListItem";
import "./BlockList.css";

export default function BlockList({ items }) {
  return (
    <div>
      <ul className="wrapper-block">
        {items.map((item) => (
          <li className="car-card" key={items.key}>
            <BlockListItem car={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

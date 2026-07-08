import BlockList from "./BlockList";
import BlockListItem from "./BlockListItem";
import "./Block.css";
export default function Block({ items }) {
  return (
    <div className="title">
      <h3>Important Things to Consider</h3>
      <p>
        Depending on your circumstances and what is important to you, a lease
        could be a great option for your next vehicle. Below are some important
        factors that may influence your decision.
      </p>
      <BlockList items={items} />
    </div>
  );
}

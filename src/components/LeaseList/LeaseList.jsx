import LeaseListItem from "../LeaseListItem/LeaseListItem";
import "./LeaseList.css";
export default function LeaseList({ items }) {
  return (
    <div className="lease-list-cover">
      <h2 className="header-lease">Why Lease with D&M?</h2>
      <ul className="wrapper">
        {items.map((item) => (
          <li key={items.id} className="card-list">
            <LeaseListItem point={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

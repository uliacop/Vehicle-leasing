import "./BlockListItem.css";
export default function BlockListItem({ car: { img, description } }) {
  return (
    <div className="card-list ">
      <img src={img} className="img-car" />
      <p>{description}</p>
    </div>
  );
}

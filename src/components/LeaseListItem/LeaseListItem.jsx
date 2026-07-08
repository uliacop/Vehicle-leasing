import "./LeaseListItem.css";
export default function LeaseListItem({ point: { img, title, description } }) {
  return (
    <div className="wrapper">
      <div className="block">
        <span className="imgWrapper">
          <img className="svg-img" src={img} />
        </span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
}

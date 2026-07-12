import "./ButtonNavigation.css";
export default function ButtonNavigation({
  cars,
  end,
  page,
  totalPages,
  setPage,
}) {
  return (
    <div className="load">
      <button
        className="button-text "
        disabled={end >= cars.length}
        onClick={() => setPage((p) => p + 1)}
      >
        Next
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          className={page === i + 1 ? "active" : ""}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        disabled={page === 1}
        onClick={() => setPage((p) => p - 1)}
        className="button-text"
      >
        Previous
      </button>
    </div>
  );
}

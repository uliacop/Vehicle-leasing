export default function ButtonNavigation({
  cars,
  end,
  page,
  totalPages,
  setPage,
  visibleCars,
}) {
  return (
    <div>
      <button
        disabled={end >= cars.length}
        onClick={() => setPage((p) => p + 1)}
      >
        Next
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => setPage(i + 1)}
          style={{
            fontWeight: page === i + 1 ? "bold" : "normal",
            background: page === i + 1 ? "#333" : "#eee",
            color: page === i + 1 ? "#fff" : "#000",
          }}
        >
          {i + 1}
        </button>
      ))}
      <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
        Prev
      </button>
    </div>
  );
}

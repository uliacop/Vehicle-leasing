import React from "react";
import "./LoadMoreBtn.css";
export default function LoadMoreBtn({ setPage }) {
  return (
    <div className="load">
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>
        Load more
      </button>
    </div>
  );
}

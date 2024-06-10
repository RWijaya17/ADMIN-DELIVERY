// PageButtons.jsx
import React from "react";
import "./PageButtons.scss";

const PageButtons = ({ currentPage, onPageChange }) => {
  const handleRightClick = () => {
    onPageChange(currentPage + 1);
  };

  const handleLeftClick = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <div className="page-buttons">
      <button
        className={`page-button left-arrow ${currentPage === 1 ? "disabled" : ""}`}
        onClick={handleLeftClick}
      >
        {"<"}
      </button>
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          className={`page-button ${currentPage === page ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`page-button right-arrow ${currentPage === 5 ? "disabled" : ""}`}
        onClick={handleRightClick}
      >
        {">"}
      </button>
    </div>
  );
};

export default PageButtons;

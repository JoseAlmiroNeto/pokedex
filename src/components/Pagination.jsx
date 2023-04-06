import React from "react";

function Pagination({ currentPage, itemsPerPage, totalItems, onPageChange }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-5">
      <nav>
        <ul className="flex gap-1">
          {pageNumbers.map((number) => (
            <li key={number}>
              <a
                onClick={() => onPageChange(number)}
                href="#"
                className={
                  number === currentPage
                    ? "bg-blue-500 text-white p-1 rounded"
                    : "bg-zinc-400 text-white p-1 rounded"
                }
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;

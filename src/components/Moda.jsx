import React from "react";

function Modal({ title, isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-white rounded-lg p-6 w-[60%] h-[90%] z-50 relative">
        <div className="flex items-center justify-between mb-6 absolute right-0">
          <button onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;

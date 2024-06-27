import React from "react";

export default function Backbutton() {
  const BackButton = () => {
    window.history.back();
  };
  return (
    <div>
      <button
        onClick={BackButton}
        className="m-3 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Back
      </button>
    </div>
  );
}

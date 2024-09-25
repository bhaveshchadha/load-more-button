import React from "react";

function LimitCrossedWarning() {
  return (
    <div role="alert" className="alert alert-info w-[250px] mx-auto mb-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="h-6 w-6 shrink-0 stroke-current"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
      <span>No More Products Available</span>
    </div>
  );
}

export default LimitCrossedWarning;

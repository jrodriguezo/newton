import React from "react";

function Lock({className}) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="5" y="11" width="14" height="10" rx="2"></rect>
      <circle cx="12" cy="16" r="1"></circle>
      <path d="M8 11v-4a4 4 0 0 1 8 0v4"></path>
    </svg>
  );
}

export default Lock;

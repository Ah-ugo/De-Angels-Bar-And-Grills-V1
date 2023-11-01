import React from "react";

export default function LocationBar() {
  return (
    <div
      className="flex gap-3 text-center justify-center items-center text-white p-4 font-semibold text-lg lg:text-xl"
      style={{ background: "#0e0529", fontFamily: "Cabin" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>

      <p>Plot f16, F296+WM9 Housing Area B, New Owerri 460281, Owerri, Imo</p>
    </div>
  );
}

import React from "react";

export default function MenuCard1(props) {
  return (
    <div>
      <div
        className="rounded-md shadow-md text-gray-100"
        style={{ background: "#0e0529" }}>
        <img
          src={props.img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72"
          style={{ background: "#0e0529" }}
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2
              className="text-3xl text-gray2 font-semibold tracki"
              style={{ fontFamily: "Cabin" }}>
              {props.title}
            </h2>
            <p className="text-gray2" style={{ fontFamily: "Josefin Sans" }}>
              {props.content}
            </p>
            <button
              className="flex bg-gray2 gap-2 font-bold p-2 rounded-xl hover:bg-white"
              style={{ color: "#0e0529" }}>
              Add To Cart{" "}
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
          {/* <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">
            Read more
          </button> */}
        </div>
      </div>
    </div>
  );
}

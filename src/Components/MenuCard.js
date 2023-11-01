import React from "react";

export default function MenuCard() {
  return (
    <div>
      <div className="rounded-md shadow-md max-w-full dark:bg-gray-900 dark:text-gray-100">
        <img
          src="https://source.unsplash.com/random/300x300/?2"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracki">Donec lectus leo</h2>
            <p className="dark:text-gray-100">
              Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
}
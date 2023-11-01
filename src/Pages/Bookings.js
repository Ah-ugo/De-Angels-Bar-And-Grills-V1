import React, { useState } from "react";
import StepsUi from "../Components/StepsUi";

const stepsData = [
  {
    title: "Step 1",
    content: (
      <div>
        <div class="px-4 py-5 sm:px-6 lg:px-8">
          <div class="">
            <div class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
              <p class="text-center text-lg font-medium">
                Sign in to your account
              </p>

              <div>
                <label for="email" class="sr-only">
                  Email
                </label>

                <div class="">
                  <input
                    type="text"
                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter email"
                  />
                </div>
              </div>

              <div>
                <label for="password" class="sr-only">
                  Password
                </label>

                <div class="">
                  <input
                    type="text"
                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                  />
                </div>
              </div>

              <button
                type="submit"
                class="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  { title: "Step 2", content: "Content for Step 2" },
  { title: "Step 3", content: "Content for Step 3" },
];

export default function Bookings() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const handleNextStep = () => {
    setActiveStepIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevStep = () => {
    setActiveStepIndex((prevIndex) => prevIndex - 1);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1>Book A Table</h1>
      </div>
      <div className="flex justify-between content-center gap-60">
        {stepsData.map((step, index) => (
          <StepsUi
            key={index}
            title={step.title}
            content={step.content}
            isActive={index === activeStepIndex}
          />
        ))}
      </div>
      <div className="flex mt-4 space-x-4">
        <button
          onClick={handlePrevStep}
          disabled={activeStepIndex === 0}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-400">
          Previous
        </button>
        <button
          onClick={handleNextStep}
          disabled={activeStepIndex === stepsData.length - 1}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:bg-gray-400">
          Next
        </button>
      </div>
    </div>
  );
}

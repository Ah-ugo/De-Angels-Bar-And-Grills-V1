import React from "react";

export default function MenuComponent(props) {
  //   const slidesContainer = document.querySelector(".slides-container");
  //   const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
  //   const prevButton = document.querySelector(".prev");
  //   const nextButton = document.querySelector(".next");

  //   nextButton.addEventListener("click", () => {
  //     slidesContainer.scrollLeft += slideWidth;
  //   });

  //   prevButton.addEventListener("click", () => {
  //     slidesContainer.scrollLeft -= slideWidth;
  //   });

  return (
    <div>
      <div className="relative flex flex-col items-center justify-center text-center text-white slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          style={{ zIndex: 1 }}>
          <img
            className="w-full h-full object-cover"
            src={props.image}
            alt="mountain_image"
          />
        </div>
        <div className="video-overlay absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <div
          className="space-y-2 flex flex-col justify-center align-middle items-center"
          style={{ zIndex: 2 }}>
          <p
            className="font-semibold text-2xl"
            style={{ fontFamily: "Josefin Sans" }}>
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
}

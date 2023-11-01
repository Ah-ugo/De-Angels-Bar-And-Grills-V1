import React, { useEffect } from "react";
import MenuCard from "./MenuCard";
import MenuComponent from "./MenuComponent";
import { Link } from "react-router-dom";

export default function CarouselSection2() {
  useEffect(() => {
    const slidesContainer = document.querySelector(".slides-container");
    const slideWidth = slidesContainer.querySelector(".slide").clientWidth;
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    nextButton.addEventListener("click", () => {
      slidesContainer.scrollLeft += slideWidth;
    });

    prevButton.addEventListener("click", () => {
      slidesContainer.scrollLeft -= slideWidth;
    });
  }, []);

  return (
    <div>
      <div
        id="app"
        className="px-4 md:px-8 py-12 transition-all duration-500 ease-linear"
        style={{ background: "#0e0529" }}>
        <h1
          className="font-cabinetGrotesk text-center text-3xl text-white lg:text-4xl font-bold mb-12 leading-tight "
          style={{ fontFamily: "Cabin" }}>
          View Our Exquisite Menu
        </h1>
        <div className="relative">
          <div className="slides-container h-72 flex snap-x snap-mandatory overflow-hidden overflow-x-auto space-x-2 rounded scroll-smooth before:w-[45vw] before:shrink-0 after:w-[45vw] after:shrink-0 md:before:w-0 md:after:w-0">
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <MenuComponent
                image={require("../Assets/Ofada-Rice-And-Pepper-Sauce-min.jpg")}
                text="Ofada Rice And Pepper Sauce"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <MenuComponent
                image={require("../Assets/How-To-Prepare-Boli-Roasted-Plantain-min.jpg")}
                text="Boli Roasted Plantain"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <MenuComponent
                image={require("../Assets/Jollof-and-Beef-or-Chicken-min-1024x735.jpg")}
                text="Jollof Rice And Beef"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <MenuComponent
                image={require("../Assets/Nigerian-Abacha-and-Ugba-e1563992608375-768x718.jpg")}
                text="Abacha And Ugba"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <MenuComponent
                image={require("../Assets/Plate-of-edikang-ikong-in-Nigeria-min-1024x576.jpg")}
                text="Edikang Ikong"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <MenuComponent
                image={require("../Assets/okrosoup-1.webp")}
                text="Okro Soup"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <MenuComponent
                image={require("../Assets/suya-popular-night-food-in-nigeria-min.jpg")}
                text="Suya"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <MenuComponent
                image={require("../Assets/nkwobi-2.jpg")}
                text="Nkwobi"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <MenuComponent
                image={require("../Assets/goat-meat-pepper-soup-lagos-min.jpg")}
                text="Goat Meat Pepper Soup"
              />
            </div>
            <div className="slide aspect-square h-full flex-shrink-0 snap-center rounded overflow-hidden">
              <MenuComponent
                image={require("../Assets/yam&egg.jpg")}
                text="Yam And Egg"
              />
            </div>
          </div>
          <div className="absolute top-0 -left-4 z-10 h-full items-center hidden md:flex">
            <button
              role="button"
              className="prev px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
              aria-label="prev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 group-active:-translate-x-2 transition-all duration-200 ease-linear">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
          <div className="absolute top-0 -right-4 h-full items-center z-10 hidden md:flex">
            <button
              role="button"
              className="next px-2 py-2 rounded-full bg-neutral-100 text-neutral-900 group"
              aria-label="next">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 group-active:translate-x-2 transition-all duration-200 ease-linear">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="mt-3">
          <Link
            className="text-white flex items-center justify-end content-center font-semibold text-xl hover:text-gray-400"
            to={"/menu"}>
            View More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-8">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

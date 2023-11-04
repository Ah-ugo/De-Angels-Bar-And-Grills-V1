import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/web";
import Reservation from "./Reservation.js";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  const handleModal = () => {
    setOpen(!open);
  };
  return (
    <div>
      <section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            class="min-w-full min-h-full absolute object-cover"
            src={require("../Assets/BarBeachMenu.mov.mp4")}
            type="video/mp4"
            autoPlay={true}
            preload="metadata"
            poster={require("../Assets/deAngels4.jpg")}
            // muted
            loop></video>
        </div>
        <div
          className="video-overlay absolute top-0 left-0 w-full h-full"
          style={{ background: "rgba(14, 5, 41, 0.5)" }}></div>
        <div
          class="video-content space-y-2 flex flex-col justify-center align-middle items-center"
          // style={{ ...springs }}
        >
          <h1 class="font-light text-6xl" style={{ fontFamily: "Cabin" }}>
            Your Home Away From Home
          </h1>
          <h3
            class="font-light text-3xl"
            style={{ fontFamily: "Josefin Sans" }}>
            De-Angels Bar and Restaurant Services
          </h3>
          <h3 className="text-2xl font-mono pt-4">FRESH. HANDMADE. LOCAL.</h3>
          <div>
            <div className="items-center flex mt-5 gap-3 flex-col md:flex-row">
              <button
                className="self-center font-semibold bg-white px-8 py-3 rounded ml-4 mr-4 w-full md:w-auto"
                style={{
                  //   backgroundImage: "linear-gradient(90deg, #f4377b, #ba30fb)",
                  //   background: "#14bfb5",
                  //   marginLeft: "1rem",
                  //   marginRight: "1rem",
                  fontFamily: "Josefin Sans",
                  color: "rgba(14, 5, 41, 0.9)",
                }}
                onClick={() => handleModal()}>
                Book Now
              </button>
              <button
                className="self-center px-8 py-3 rounded flex items-center gap-2 border w-full md:w-auto"
                style={{ fontFamily: "Josefin Sans" }}>
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
                    d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                  />
                </svg>
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Component */}

      <Reservation
        open={open}
        handleModal={handleModal}
        Fragment={Fragment}
        cancelButtonRef={cancelButtonRef}
      />
    </div>
  );
}

import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, useState } from "react";
import { animations } from "react-animation";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

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
            // muted
            loop></video>
        </div>
        <div
          className="video-overlay absolute top-0 left-0 w-full h-full"
          style={{ background: "rgba(14, 5, 41, 0.5)" }}></div>
        <div
          class="video-content space-y-2 flex flex-col justify-center align-middle items-center"
          style={{ animation: animations.slideIn }}>
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

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={handleModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div>
                      <div className="flex flex-col gap-2">
                        <label
                          className="font-bold text-xl"
                          style={{ color: "#0e0529" }}>
                          Reservation
                        </label>
                        <label
                          className="font-semibold text-lg"
                          style={{ color: "#0e0529" }}>
                          Book A Table
                        </label>
                      </div>

                      <div>
                        <div className="flex flex-col">
                          <label className="my-2">Your Name</label>
                          <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full px-4 py-2 rounded "
                            style={
                              {
                                // border: "1px solid #0e0529",
                                // borderColor: "#0e0529",
                              }
                            }
                          />
                          <label className="my-2">Your Email</label>
                          <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full px-4 py-2 rounded-sm"
                          />
                          <label className="my-2">Your Phone Number</label>
                          <input
                            type="text"
                            placeholder="Your Phone Number"
                            className="w-full px-4 py-2 rounded-sm"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="my-2">Date</label>
                          <input
                            type="date"
                            placeholder="Date"
                            className="w-full px-4 py-2 rounded-sm"
                          />
                          <label className="my-2">Time</label>
                          <input
                            type="time"
                            placeholder="Time"
                            className="w-full px-4 py-2 rounded-sm"
                          />
                          <label className="my-2">Number Of People</label>
                          <input
                            type="text"
                            placeholder="Number Of People"
                            className="w-full px-4 py-2 rounded-sm"
                          />
                        </div>
                        <div className="flex flex-col">
                          <label className="my-2">
                            More Information You Would Like Us To Know About
                          </label>
                          <textarea
                            rows={4}
                            placeholder="Message"
                            className="w-full rounded-sm px-2"></textarea>
                        </div>
                        <div>
                          <button
                            className="my-2 w-full rounded-md text-white py-2"
                            style={{ background: "#0e0529" }}>
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}

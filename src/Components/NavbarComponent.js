import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";
import Reservation from "./Reservation";
// import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import "../App.css";
import { animated, useSpring } from "@react-spring/web";

export default function NavbarComponent() {
  const [showNav, setShowNav] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState("bg-transparent");

  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 },
  });

  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);

  const handleModal = () => {
    setOpen(!open);
  };

  const listenScrollEvent = () => {
    if (window.scrollY > 500) {
      setNavbarBackground("rgba(14, 5, 41, 0.5)"); // Change this to your desired color class
    } else {
      setNavbarBackground("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  return (
    <div>
      <header
        className="p-4 fixed top-0 left-0 right-0 py-4 px-6 text-white z-20"
        style={{
          background: navbarBackground,
          transition: "background-color 0.3s ease",
        }}>
        <div className="container flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="/"
            aria-label="Back to homepage"
            className="flex items-center p-2 text-white">
            <h1
              className="font-bold text-3xl"
              style={{ fontFamily: "Poppins" }}>
              De-Angels
            </h1>
          </a>
          <ul
            className="items-stretch hidden space-x-3 font-semibold md:flex"
            style={{ fontFamily: "Josefin Sans" }}>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center px-4 -mb-1 text-white">
                Home
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/contact"
                className="flex items-center px-4 -mb-1 text-white">
                About Us
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/menu"
                className="flex items-center px-4 -mb-1 text-white">
                Our Menu
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center px-4 -mb-1 text-white">
                Chef's Secret
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/contact"
                className="flex items-center px-4 -mb-1 text-white">
                Contact Us
              </a>
            </li>
          </ul>

          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button
              onClick={() => handleModal()}
              className="self-center px-8 py-3 font-semibold rounded bg-white text-slate-900"
              style={{
                color: "rgba(14, 5, 41, 0.9)",
                fontFamily: "Josefin Sans",
              }}>
              Book Now
            </button>
          </div>

          <button
            className="flex justify-end p-4 md:hidden"
            onClick={() => {
              setShowNav(!showNav);
            }}>
            {showNav ? (
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
          <button>
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

        {showNav ? (
          <ul
            id="element"
            className="items-stretch mobile-navbar flex-col h-screen left-0 shadow rounded right-0 font-semibold text-2xl md:flex"
            style={{
              // ...springs,
              background: "rgba(14, 5, 41, 0.5)",
              fontFamily: "Josefin Sans",
            }}>
            <li className="flex pt-4 mb-4">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center px-4 -mb-1 text-white">
                Home
              </a>
            </li>
            <li className="flex mb-4">
              <a
                rel="noopener noreferrer"
                href="/contact"
                className="flex items-center px-4 -mb-1 text-white">
                About Us
              </a>
            </li>
            <li className="flex mb-4">
              <a
                rel="noopener noreferrer"
                href="/menu"
                className="flex items-center px-4 -mb-1 text-white">
                Our Menu
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/"
                className="flex items-center px-4 -mb-1 text-white">
                Chef's Secret
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="/contact"
                className="flex items-center px-4 -mb-1 text-white">
                Contact Us
              </a>
            </li>
          </ul>
        ) : null}
      </header>
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

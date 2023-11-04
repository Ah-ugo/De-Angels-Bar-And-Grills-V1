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
      <Reservation
        open={open}
        handleModal={handleModal}
        Fragment={Fragment}
        cancelButtonRef={cancelButtonRef}
      />
    </div>
  );
}

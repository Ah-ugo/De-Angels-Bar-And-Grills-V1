import React from "react";
import ModalComponent1 from "./ModalComponent1";
import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function Reservation({
  open,
  handleModal,
  Fragment,
  cancelButtonRef,
}) {
  return (
    <div>
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
                        <div className="flex flex-row justify-between">
                          <label
                            className="font-bold text-xl"
                            style={{ color: "#0e0529" }}>
                            Reservation
                          </label>
                          <XMarkIcon
                            width={20}
                            className="font-normal text-sm hover:text-gray"
                            onClick={handleModal}
                          />
                        </div>
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

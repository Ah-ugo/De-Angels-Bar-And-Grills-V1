import React, { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import FooterSection from "./FooterSection";

function Steps2() {
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  //   Forms State
  const [number, setNumber] = useState();
  const [date, setDate] = useState();
  const [Time, setTime] = useState();
  const [FirstName, setFirstName] = useState();
  const [LastName, setLastName] = useState();
  const [Email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [Message, setMessage] = useState();

  const tabs = [
    {
      id: 1,
      label: "Basic Details",
      content: (
        <main>
          <div>
            <div class="px-4 py-5 sm:px-6 lg:px-8">
              <div class="">
                <div class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                  <p class="text-center text-lg font-medium">
                    So you want to eat at De-Angels Bar And Grills? Let's get
                    you sorted.
                  </p>

                  <div>
                    <label for="email" class="sr-only">
                      Select Party Size
                    </label>

                    <div class="">
                      <input
                        type="number"
                        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter Party Size"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label for="date" class="sr-only">
                      Date
                    </label>

                    <div class="">
                      <input
                        type="date"
                        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label for="time" class="sr-only">
                      Time
                    </label>

                    <div class="">
                      <input
                        type="time"
                        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter Time"
                        value={Time}
                        onChange={(e) => setTime(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      ),
    },
    {
      id: 2,
      label: "Personal Details",
      content: (
        <main>
          <div>
            <div class="px-4 py-5 sm:px-6 lg:px-8">
              <div class="">
                <div class="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                  <p class="text-center text-lg font-medium">
                    We will use this information to keep you up to date about
                    your booking.
                  </p>

                  <div>
                    <label for="fname" class="sr-only">
                      First Name
                    </label>

                    <div class="">
                      <input
                        type="text"
                        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter First Name"
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label for="lname" class="sr-only">
                      Last Name
                    </label>

                    <div class="">
                      <input
                        type="text"
                        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter Last Name"
                        value={LastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label for="email" class="sr-only">
                      Email
                    </label>

                    <div class="">
                      <input
                        type="text"
                        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter Email"
                        value={Email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label for="phone" class="sr-only">
                      Phone
                    </label>

                    <div class="">
                      <input
                        type="number"
                        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label for="message" class="sr-only">
                      Message
                    </label>

                    <div class="">
                      <textarea
                        placeholder="Enter allergies, intolerances and dietary requirements."
                        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        value={Message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      ),
    },
    {
      id: 3,
      label: "Comfirm Information",
      content: (
        <main>
          <h1>
            Please check the information below is correct before confirming your
            booking.
          </h1>

          <div>
            <h6>Restaurant:</h6>
            <p>De-Angels Bar And Grills</p>
          </div>
          <div>
            <h6>Date:</h6>
            <p></p>
          </div>
        </main>
      ),
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  const switchTab = (tabId) => {
    setActiveTab(tabId);
    setShowSubmitButton(false);
  };

  const moveToNextTab = () => {
    const nextTabId = activeTab + 1;
    setActiveTab(nextTabId);
    setShowSubmitButton(nextTabId === tabs.length);
  };

  return (
    <div className="">
      <div style={{ background: "#0e0529" }}>
        <NavbarComponent />
        <div className="relative mx-auto  pt-[120px] pb-[110px] lg:pt-[150px]">
          <div className="container mx-auto">
            <div className="flex flex-wrap align-middle items-center mx-4">
              <div className="w-full px-4 lg:w-5/12">
                <div className="hero-content">
                  <h1 className="mb-3 text-4xl font-bold leading-snug text-white sm:text-[42px] lg:text-[40px] xl:text-[42px]">
                    Embark on a Culinary Journey at De-Angels Bar and Grills
                  </h1>
                  <p className="mb-8 max-w-[480px] text-base text-white">
                    Book your table today and savor the fusion of exceptional
                    cuisine. Let De-Angels Bar and Grills create a symphony of
                    flavors and convenience, where pleasure thrives in perfect
                    harmony.
                  </p>
                  {/* <ul className="flex flex-wrap items-center">
                    <li>
                      <a
                        href="/#"
                        className="inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center  rounded-lg bg-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                        style={{ color: "#0e0529" }}>
                        Get Started
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#"
                        className="inline-flex items-center justify-center px-6 py-4 text-base font-normal text-center text-body-color hover:text-primary sm:px-10 lg:px-8 xl:px-10">
                        <span className="mr-2">
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11" cy="11" r="11" fill="#3056D3" />
                            <rect
                              x="6.90906"
                              y="13.3636"
                              width="8.18182"
                              height="1.63636"
                              fill="white"
                            />
                            <rect
                              x="10.1818"
                              y="6"
                              width="1.63636"
                              height="4.09091"
                              fill="white"
                            />
                            <path
                              d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                        Download App
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div className="hidden px-4 lg:block lg:w-1/12"></div>
              <div className="w-full px-4 lg:w-6/12">
                <div className="lg:ml-auto lg:text-right">
                  <div className="relative z-10 inline-block pt-11 lg:pt-0">
                    <img
                      src="https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/143379968_3769625796464209_7798787225313603056_n.jpg?stp=c0.15.914.914a_dst-jpg_s851x315&_nc_cat=108&cb=99be929b-59f725be&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeE1lD7xGwIU5qiDjhmb-1b1E27MkVCzSeYTbsyRULNJ5kAkXpP4w5enXX8QO43HKynZorHBJ7c4tMNaD6i4YY_f&_nc_ohc=V-XGi5BJmk0AX_FWgqH&_nc_ht=scontent.fabb1-1.fna&oh=00_AfBkwT7Mfj_TEmUzePuQKqO2URJFfNzn3eRoxtHCZMBHww&oe=64FB7C2E"
                      alt="hero"
                      className="max-w-full rounded-tl-3xl lg:ml-auto"
                    />
                    <span className="absolute -left-8 -bottom-8 z-[-1]">
                      <svg
                        width="93"
                        height="93"
                        viewBox="0 0 93 93"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                        <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white shadow-md flex">
        <div className="flex w-full justify-around">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              className={`p-3 flex flex-col items-center ${
                activeTab === tab.id
                  ? "text-themeColor font-bold"
                  : "text-gray-500"
              }`}
              onClick={() => {
                setActiveTab(tab.id);
                // index === activeStepIndex;
              }}>
              {/* <span className="text-xl">{tab.icon}</span> */}
              <span className="text-xs mt-1">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="container flex flex-col justify-center items-center w-full mx-auto p-4 pt-10 bg-white">
        <div>
          <h1>Book A Table</h1>
        </div>
        <div className="">{activeContent}</div>

        <div className="w-1/3 flex justify-around">
          <button
            className="p-3 flex flex-col items-center text-gray-500"
            onClick={() => switchTab(activeTab - 1)}
            disabled={activeTab === 1}>
            <span className="text-xl">⬅️</span>
            <span className="text-xs mt-1">Prev</span>
          </button>
          <button
            className={`p-3 flex flex-col items-center text-gray-500 ${
              showSubmitButton ? "hidden" : ""
            }`}
            onClick={moveToNextTab}
            disabled={activeTab === tabs.length}>
            <span className="text-xl">➡️</span>
            <span className="text-xs mt-1">Next</span>
          </button>

          <button
            className={`p-3 flex flex-col items-center text-gray-500 ${
              showSubmitButton ? "" : "hidden"
            }`}
            //   onClick={submitForm}
          >
            <span className="text-xl">📝</span>
            <span className="text-xs mt-1">Submit</span>
          </button>
        </div>
      </div>
      <div>
        <FooterSection />
      </div>
    </div>
  );
}

export default Steps2;

import React from "react";
import NavbarComponent from "../Components/NavbarComponent";
import FooterSection from "../Components/FooterSection";
import MenuCard1 from "../Components/MenuCard1";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="overflow-x-hidden">
      {/* Navbar Section */}
      <NavbarComponent />

      {/* Hero Section */}

      <div
        className="bg-cover bg-center bg-fixed bg-image h-screen flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url(${require("../Assets/BarBeachGrill-Jollof.jpg")})`,
        }}>
        <div
          className="text-gray2 w-full h-full flex flex-col justify-center items-center text-center px-3"
          style={{ background: "rgba(14, 5, 41, 0.5)" }}>
          <p className="mb-3 font-mono" style={{ fontFamily: "Josefin Sans" }}>
            OUR MENU
          </p>
          <h1
            className="font-bold text-gray2 text-4xl text-center"
            style={{ fontFamily: "Cabin" }}>
            Explore Our Dishes
          </h1>
          <p
            className="mt-3 font-semibold text-2xl text-center"
            style={{ fontFamily: "Josefin Sans" }}>
            We aim to provide good and healthy African and Nigerian foods, the
            desire to bring together flavors
            <br /> and taste from varied cultures to create culinary dishes.
          </p>
          {/* <p
            className="font-semibold text-2xl"
            style={{ fontFamily: "Josefin Sans" }}>
            the desire to bring together flavors and taste from varied cultures
            to create culinary dishes.
          </p> */}

          <div
            className="flex items-center gap-3 mt-3 font-semibold"
            style={{ fontFamily: "Josefin Sans" }}>
            <a href="/" className="text-white">
              Home
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-2 h-2">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            <a href="/menu" className="text-white">
              Our Menu
            </a>
          </div>
        </div>
      </div>

      {/* Main Menu */}

      <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span
                  className="block mb-2 text-lg font-semibold text-primary"
                  style={{
                    fontFamily: "Josefin Sans",
                    color: "rgba(14, 5, 41, 0.9)",
                  }}>
                  Menu
                </span>
                <h2
                  className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]"
                  style={{
                    fontFamily: "Cabin",
                    color: "rgba(14, 5, 41, 0.9)",
                  }}>
                  Our Exquisite Menu
                </h2>
                <p
                  className="text-base text-body-color"
                  style={{ fontFamily: "Josefin Sans" }}>
                  At De-Angels Bar and Grills, we invite you to embark on a
                  culinary journey like no other. Our menu features an array of
                  delectable dishes crafted with passion and expertise, offering
                  a tantalizing experience for your taste buds. From sizzling
                  steaks to indulgent desserts, each item on our menu is
                  thoughtfully curated to provide a memorable dining experience.
                  Whether you're a food enthusiast or simply looking for a
                  delightful meal, our offerings cater to every palate.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 items-center mx-4 justify-center lg:grid-cols-4 md:grid-cols-2">
            <MenuCard1
              title="Boli"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              img={require("../Assets/How-To-Prepare-Boli-Roasted-Plantain-min.jpg")}
            />
            <MenuCard1
              title="Okro Soup"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              img={require("../Assets/okrosoup-1.webp")}
            />
            <MenuCard1
              title="Suya"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              img={require("../Assets/suya-popular-night-food-in-nigeria-min.jpg")}
            />
            <MenuCard1
              title="Moi-Moi"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              img={require("../Assets/moimoi&egg.jpeg")}
            />
            <MenuCard1
              title="Goat Meat Pepper Soup"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              img={require("../Assets/goat-meat-pepper-soup-lagos-min.jpg")}
            />
            <MenuCard1
              title="Spaghetti"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              img={require("../Assets/Spaghetti.jpg")}
            />
            <MenuCard1
              title="Edikang Ikong"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              img={require("../Assets/Plate-of-edikang-ikong-in-Nigeria-min-1024x576.jpg")}
            />
            <MenuCard1
              title="Ofada Rice And Pepper Sauce"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              img={require("../Assets/Ofada-Rice-And-Pepper-Sauce-min.jpg")}
            />
            <MenuCard1
              title="Abacha And Ugba"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              img={require("../Assets/Nigerian-Abacha-and-Ugba-e1563992608375-768x718.jpg")}
            />
            <MenuCard1
              title="Jollof Rice And Beef"
              content="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
              img={require("../Assets/Jollof-and-Beef-or-Chicken-min-1024x735.jpg")}
            />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

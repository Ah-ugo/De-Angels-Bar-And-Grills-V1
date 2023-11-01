import React from "react";

export default function GallerySection() {
  return (
    <div>
      <section className="py-12">
        <h1
          className="font-cabinetGrotesk text-center text-3xl text-slate-900 lg:text-4xl font-bold mb-12 leading-tight "
          style={{ fontFamily: "Cabin" }}>
          Our Gallery
        </h1>
        <div className="grid grid-cols-2 gap-4 p-4 md:grid-cols-4">
          <img
            src={require("../Assets/deAngels1.jpg")}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1  aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={require("../Assets/deAngels2.jpg")}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={require("../Assets/deAngels3.jpg")}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={require("../Assets/deAngels4.jpg")}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={require("../Assets/deAngels5.jpg")}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={require("../Assets/deAngels6.jpg")}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={require("../Assets/deAngels7.jpg")}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={require("../Assets/deAngels8.jpg")}
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square"
            src={require("../Assets/deAngels9.jpg")}
          />
          <img
            src={require("../Assets/deAngels10.jpg")}
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 aspect-square"
          />
        </div>
      </section>
    </div>
  );
}

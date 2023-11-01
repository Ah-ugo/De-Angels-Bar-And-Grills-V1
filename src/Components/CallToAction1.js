import React from "react";

export default function CallToAction1() {
  return (
    <div>
      <section class="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2">
        <div class="p-8 md:p-12 lg:px-16 lg:py-24">
          <div class="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2
              class="text-2xl font-bold text-slate-950 md:text-3xl"
              style={{ fontFamily: "Cabin" }}>
              Taste the real Owerri
            </h2>

            <p
              class="hidden text-slate-500 font-semibold md:mt-4 md:block"
              style={{ fontFamily: "Josefin Sans" }}>
              Welcome to De-Angels Bar and Restaurant, your gateway to authentic
              flavors and delightful experiences. Nestled in the heart of
              Owerri, we invite you to savor the essence of our diverse cuisine
              crafted with love and care. Our talented chefs use the finest
              local ingredients to create mouthwatering dishes that capture the
              essence of Nigerian and international cuisine. Whether you're
              joining us for a casual lunch or a special evening, our menu has
              something to delight every palate. Join us for a memorable
              culinary journey where taste meets tradition and modernity. From
              our cozy ambiance to our attentive service, every detail is
              designed to ensure an unforgettable dining experience.
            </p>

            <div class="mt-4 md:mt-8">
              <a
                href="#"
                class="inline-block rounded px-12 py-3 text-sm font-semibold text-white transition hover:bg-slate-950 focus:outline-none focus:ring focus:ring-yellow-400"
                style={{ background: "#0e0529", fontFamily: "Josefin Sans" }}>
                Make A Reservation
              </a>
            </div>
          </div>
        </div>

        <img
          alt="Student"
          src={require("../Assets/nkwobi-2.jpg")}
          // src="https://scontent.fabb1-1.fna.fbcdn.net/v/t1.6435-9/131073782_3642067132553410_5260594040250882260_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGn0d4HNHcDwV3xxnjpgBRcohwVRoy6SdSiHBVGjLpJ1PBz4hp8d5P1ja1ZqORT6zWorqEcv8iuMczX3ALetZ1B&_nc_ohc=iJtdc4m59GoAX9z1C8I&_nc_ht=scontent.fabb1-1.fna&oh=00_AfCOvnQU9ndxyIYo1BgHdAHG_fUGH_Efs8r2YFrddlH3nQ&oe=64F8ACA5"
          class="h-56 w-full object-cover sm:h-full"
        />
      </section>
    </div>
  );
}

"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section
      id="testimonials"
      className="py-20 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto"
    >
      <h1 className="heading">
        Heres some
        <span className="text-blue"> testimonials </span>
        about my work
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <div key={company.id} className="flex md:max-w-80 max-w-32 gap-2">
              <img src={company.nameImg} className="md:w-140 w-80 rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

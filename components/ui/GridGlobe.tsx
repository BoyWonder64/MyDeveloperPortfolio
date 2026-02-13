"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const GridGlobe = () => {
  const globeConfig = {
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  return (
    // remove dark:bg-black bg-white h-screen md:h-auto  w-full flex-row py-20
    // change absolute -left-5 top-36, add w-full h-full md:top-40
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
      {/* remove h-full md:h-[40rem] */}
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">

        <div className="absolute top-0 left-0 w-full h-2/5 overflow-hidden">
          <img
            src="/Soldier.gif"
            alt="Soldier"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default GridGlobe;

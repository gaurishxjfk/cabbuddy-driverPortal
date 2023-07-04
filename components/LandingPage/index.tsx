"use client";
import Image from "next/image";
import React from "react";

import heroImgClient from "@/public/assets/heroImgDriver.png";
import DriverBenefits from "./DriverBenefits";
import Testimonials from "./Testimonials";

const index = () => {
  const handleSubmit = () => {};

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="flex flex-col md:flex-row">
        <div
          className="w-[100%] md:w-[60%] lg:w-[40%] px-5 md:pl-16 
                    flex flex-col items-center md:items-start z-10
                  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10
                   h-screen md:h-auto transition-all ease-linear duration-700"
        >
          <div className="text-center md:text-left max-w-[25em] md:max-w-none mt-12">
            <h1 className="text-3xl md:text-4xl font-bold text-darkText">
              Be a Buddy Behind the Wheel on CabBuddy's Driver Platform
            </h1>
            <p className="text-gray-600">
              Join CabBuddy and experience the joy of driving while forging
              meaningful connections on the road.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-5 items-center md:items-start">
            <button
              className="bg-darkText text-white rounded-lg py-2 px-12"
              onClick={() => handleSubmit()}
            >
              Join Us Now
            </button>
          </div>
        </div>
        <div className="absolute bg-opacity-10 z-0 md:relative transform -scale-x-100 md:-mt-24 md:ml-20">
          <Image src={heroImgClient} alt="" />
        </div>
      </section>

      {/* Benefits Section */}
      <DriverBenefits />

      {/* Testimonials Section */}
      <Testimonials />

      {/* footer Section */}
      <footer className="bg-white w-full text-darkText text-center font-bold py-8">
        <h4 className="text-xl">
          Join CabBuddy and be part of another success stories{" "}
        </h4>
        <button
          className="bg-darkText text-white rounded-lg py-2 px-12 my-8"
          onClick={() => handleSubmit()}
        >
          Join Us Now
        </button>
      </footer>
    </>
  );
};

export default index;

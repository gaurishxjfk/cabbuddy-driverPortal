"use client";
import Image from "next/image";
import React from "react";

const TestimonialCard = () => {
  return (
    <div className="bg-white px-4 rounded-lg flex flex-col max-w-[45vh] text-center  md:m-12 shadow-xl pb-6 text-darkText">
      <span className="flex justify-center -m-12">
        <Image
          src={"/assets/driverImg.png"}
          alt="driver img"
          width={124}
          height={124}
        />
      </span>
      <h1 className="mt-12 font-bold text-lg">Chadnu maajd</h1>
      <p className="text-xs text-slate-600 italic">
        CabBuddy has been a game-changer for me. The flexibility to choose my
        own working hours has allowed me to pursue my other interests while
        earning a steady income. The supportive community of drivers is
        fantastic, and the customer service is top-notch. I feel valued and
        appreciated as a driver.
      </p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-24">
      <header className=" text-2xl md:text-4xl font-extrabold bg-mainbg w-full p-5 pt-0 text-center text-darkText ">
        What other drivers said?
      </header>
      <div className="py-16 md:py-8 gap-16 md:gap-2 md:p-12 flex flex-col md:flex-row justify-center items-center">
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default Testimonials;

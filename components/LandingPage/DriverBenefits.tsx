import React from "react";
import { Chat, Clock, Community, Dollar, Medical } from "../SVGIcons";

const driverBenefitsData = [
  {
    id: 1,
    img: <Clock />,
    title: "Flexible Working Hours",
    description:
      "Drive on your terms. Whether you prefer part-time or full-time, CabBuddy gives you the freedom to create a schedule that suits your lifestyle.",
  },
  {
    id: 2,
    img: <Medical />,
    title: "Health Insurance Coverage",
    description:
      "CabBuddy provides comprehensive health insurance coverage, protecting you from unexpected medical costs and providing peace of mind for your driving career.",
  },
  {
    id: 3,
    img: <Dollar />,
    title: "Competitive Earnings",
    description:
      "Experience competitive rates and fair compensation for your services as a driver. Take control of your income and enjoy a rewarding driving experience.",
  },
  {
    id: 4,
    img: <Chat />,
    title: "Enhanced Customer Service",
    description:
      "Deliver outstanding customer service as a CabBuddy driver. With our platform's enhanced customer service features, you can provide a seamless and memorable experience for passengers.",
  },
  {
    id: 5,
    img: <Community />,
    title: "Supportive Community",
    description:
      "As a CabBuddy driver, you become part of a welcoming and supportive community. Connect with fellow drivers, share experiences, and receive valuable support along your journey.",
  },
];

const DriverBenefits = () => {
  return (
    <section className="bg-white text-darkText text-center py-8 pt-24" id="benefits">
      <header className=" text-2xl md:text-4xl font-extrabold">
        Why Join CabBuddy?
      </header>
      <div className="flex flex-col md:flex-row gap-4 my-8 md:px-16 lg:px-24">
        {driverBenefitsData.slice(0, 3).map((i) => (
          <div key={i.id} className="p-4 text-center ">
            <span className="w-full flex justify-center">{i.img}</span>
            <h1 className="font-bold text-lg">{i.title}</h1>
            <p className="text-slate-700">{i.description}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-4 my-8 md:px-16 lg:px-24">
        {driverBenefitsData.slice(-2).map((i) => (
          <div key={i.id} className="p-4 text-center ">
            <span className="w-full flex justify-center">{i.img}</span>
            <h1 className="font-bold text-lg">{i.title}</h1>
            <p className="text-slate-700 max-w-40">{i.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DriverBenefits;

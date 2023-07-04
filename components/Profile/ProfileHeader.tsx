import Image from "next/image";
import React from "react";
import { ThreeDots } from "../SVGIcons";

const ProfileHeader = () => {
  return (
    <header className="w-full flex px-4 gap-4  flex-col-reverse md:flex-row">
      <div className="bg-white p-8  font-normal shadow rounded-md">
        <div className="relative">
          <Image
            src={"/assets/driverImg.png"}
            alt="driver img"
            width={135}
            height={135}
            className="bg-red-500 rounded-full p-1 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-sky-400 via-blue-600 to-darkText"
          />
          <button className="absolute -top-5 -right-7 rounded-full p-1"><ThreeDots width={20}
            height={20} fill="#02283F" /></button>
        </div>
        <div>
          <h2 className="text-2xl">Elon Musk</h2>
          <p>MH4321123434289</p>
          <p>MH4321123434289</p>
        </div>
      </div>
      <div className="bg-white shadow w-full p-8 rounded-md">sadas</div>
    </header>
  );
};

export default ProfileHeader;

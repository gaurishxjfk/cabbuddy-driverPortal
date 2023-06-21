import React from "react";
import buddyGo from "@/public/assets/cars/buddyGo.svg";
import Image from "next/image";
import { Star } from "../SVGIcons";

const RideHistoryCard = () => {
  return (
    <div className="bg-white px-4 py-3 flex justify-between mx-[10%] rounded-lg mb-5">
      <Image
        src={buddyGo}
        alt="auto img"
        loading="lazy"
        width={80}
        height={80}
      />
      <div className="flex flex-col">
        <h2 className="font-bold">BuddyGo</h2>
        <h2>Reg. No. GA04 VB 4590</h2>
        <h2>Car Model: Hyundai Santro (silver) </h2>
        <h2>Driver: Chandamama Singh </h2>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2>Status</h2>
        <span className="px-2 py-1 bg-green-400 text-white rounded-full">
          Completed
        </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <h2>Ratings</h2>
        <span className="flex">{[...Array(5)].map(() => <Star fill="#FFD058" />)}</span>
      </div>
    </div>
  );
};

export default RideHistoryCard;

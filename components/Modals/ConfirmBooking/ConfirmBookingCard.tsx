"use client";
import { Cross, User } from "@/components/SVGIcons";
import Image from "next/image";
import React, { useState } from "react";
import buddyGo from "@/public/assets/cars/buddyGo.svg";
import ConfettiExplosion from "react-confetti-explosion";
import Link from "next/link";
import { CabObj } from "@/Types";
import { emptyCabObj } from ".";

const ConfirmBookingCard: React.FC<{
  selectedCab: CabObj;
  setSelectedCab: React.Dispatch<React.SetStateAction<CabObj>>;
}> = ({ selectedCab, setSelectedCab }) => {
  const [isExploding, setIsExploding] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  return (
    <div className="absolute bg-darkText h-screen bg-opacity-30 w-full  left-0 right-0 top-0 bottom-0 m-auto z-40 flex items-center">
      <div
        className="bg-white m-auto rounded-xl bg-clip-padding backdrop-filter
                   backdrop-blur-sm bg-opacity-50 shadow-darkText shadow-xl p-4 pt-16"
      >
        <button className={`absolute right-5 top-5 ${isConfirmed && 'hidden' }`}
        onClick={() => setSelectedCab(emptyCabObj)}
        >
          <Cross height={25} width={25} fill="#02283F" />
        </button>

        <div className="bg-white p-4 rounded-lg z-50 ">
          {isConfirmed && (
            <div className="flex justify-center">
              <ConfettiExplosion zIndex={999} duration={4444} width={1000} />{" "}
            </div>
          )}
          <div className="flex items-center gap-4 mb-2 ">
            <Image
              src={selectedCab.img}
              alt="auto img"
              loading="lazy"
              width={80}
              height={80}
            />
            <div className="flex flex-col text-darkText">
              <div className="flex gap-4 items-center">
                <h2>{selectedCab.title}</h2>
                <h4 className="flex items-center gap-2">
                  <User width={14} height={14} fill="#02283F" />
                  {selectedCab.seating}
                </h4>
              </div>
              <h2>Reg. No. GA04 VB 4590</h2>
            </div>
          </div>
          <h2 className="text-darkText">Car Model: Hyundai Santro (silver) </h2>
          <h2 className="text-darkText">Driver: Chandamama Singh </h2>
          {!isConfirmed ? (
            <h2 className={`text-darkText font-bold text-lg`}>
              Total fare: ₹{selectedCab.price}
            </h2>
          ) : (
            <>
              <div className="bg-darkText text-white font-bold mt-2 -mx-4 text-center py-1">
                Please pay ₹140 after the ride
              </div>
              <h2 className="text-center text-darkText font-bold mt-2">
                Safe Journey 😃
              </h2>
            </>
          )}
        </div>
        {isConfirmed ? (
          <h2 className="text-center text-darkText mt-4">
            Go to{" "}
            <Link className="font-semibold underline" href={"/ride-history"}>
              Your Rides
            </Link>
          </h2>
        ) : (
          <>
            <button
              className="bg-darkText w-full mt-2 rounded-lg py-2 text-white font-bold"
              onClick={() => {
                setIsConfirmed(true)
              }}
            >
              Confirm Booking
            </button>
            <button className="bg-white w-full my-2 rounded-lg py-2 ">
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ConfirmBookingCard;

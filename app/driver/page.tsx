import { Eye } from "@/components/SVGIcons";
import Link from "next/link";
import React from "react";
const ride_status = "Pending"
const page = () => {
  return (
    <div className="bg-white shadow rounded-lg w-[95%] md:w-[80%] mx-auto p-2 mb-2 
                    flex justify-around font-semibold text-darkText">
      You have already submitted the form.
      <div className="flex flex-col items-center gap-2">
        <h2>Status</h2>
        <span
          className={`px-2 py-1 ${
            ride_status.toLowerCase() === "completed"
              ? "bg-green-400"
              : ride_status.toLowerCase() === "cancelled"
              ? "bg-red-400"
              : "bg-blue-500"
          } text-white rounded-full font-bold`}
        >
          {ride_status}
        </span>
      </div>
      <Link href={'/driver/register'} className="flex items-center gap-2 my-auto cursor-pointer"><Eye width={20} height={20} fill="#02283F"/> View</Link>
    </div>
  );
};

export default page;

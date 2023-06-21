import { User } from "@/components/SVGIcons";
import Image from "next/image";
import React from "react";
import { CabCardProps } from "@/Types";

const getImg = (title: string) => {
  return `/assets/cars/${title.charAt(0).toLowerCase() + title.slice(1)}.svg`;
};

const CabCard: React.FC<CabCardProps> = ({
  title,
  price,
  seating,
  img,
  description,
  id,
  setSelectedCab,
}) => {
  const imageSrc = getImg(title.charAt(0).toLowerCase() + title.slice(1));
  const cab = {
    title,
    price,
    seating,
    img: imageSrc,
    description,
    id,
  };

  return (
    <div
      role="button"
      className="bg-white flex w-[100%] gap-5 items-center p-4 rounded relative"
      onClick={() => setSelectedCab(cab)}
    >
      <Image
        src={imageSrc}
        alt={title + " icon"}
        loading="lazy"
        width={80}
        height={80}
      />
      <div>
        <h1 className="font-bold text-lg">{title}</h1>
        <div className="flex items-center gap-2">
          <User width={14} height={14} />
          {seating}
        </div>
        <i className="text-slate-500 w-[70%]">{description}</i>
      </div>
      <div className="absolute right-5">₹{price}</div>
    </div>
  );
};

export default CabCard;

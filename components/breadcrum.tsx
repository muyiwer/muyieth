import Image from "next/image";
import React from "react";
import shop from "../images/shop3.png";
import { FaBars, FaArrowDown, FaBorderAll } from "react-icons/fa6";

export const BreadCrumb = () => {
  return (
    <div className="flex flex-col relative">
      <div className="w-full h-[250px] flex  items-center z-10 p-3">
        <div className="flex flex-col">
          {" "}
          <span className="text-[12px] cursor-pointer">
            Home {">"} Category {">"} shoes
          </span>
          <span className="text-white font-extrabold text-[2rem] -mt-2">
            SHOES- NIKE, REEBOK...
          </span>
        </div>
      </div>
      <Image
        src={shop}
        alt=""
        className="object-cover w-full h-[250px] absolute"
      />
      <div className="bg-[#383c64] w-full p-2 flex justify-between">
        <div className="flex gap-1 items-center cursor-pointer">
          <FaArrowDown size={18}/>
          <span>Sort by popularity</span>
        </div>
        <div className="flex gap-2">
          <FaBars size={20} className="cursor-pointer"/>
          <FaBorderAll size={20} className="cursor-pointer"/>
        </div>
      </div>
    </div>
  );
};

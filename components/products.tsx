"use client";
import { Badge, Button } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import sneakers from "../images/sneakers2.webp";
import { FaCartShopping, FaHeart } from "react-icons/fa6";

export const Products = () => {
  const [isTagVisible, setIsTagVisible] = useState(false);
  return (
    <div className="grid grid-cols-3 gap-3">
      {[1, 2, 3, 4, 5, 6].map((x) => (
        <Badge.Ribbon text="New" color="purple" key={x}>
          <div
            className="bg-[#383c64] flex flex-col rounded-[5px] cursor-pointer relative"
            onMouseEnter={() => setIsTagVisible(true)}
            onMouseLeave={() => setIsTagVisible(false)}
          >
            {isTagVisible && (
              <div id="tag" className="absolute flex flex-col gap-1 m-2">
                <Button
                  className="hover:bg-[#383c64] hover:!text-white hover:!border-none"
                  icon={<FaHeart size={20} />}
                ></Button>
                <Button
                  className="hover:bg-[#383c64] hover:!text-white hover:!border-none"
                  icon={<FaCartShopping size={20} />}
                ></Button>
              </div>
            )}
            <Image
              src={sneakers}
              alt=""
              className="rounded-md w-full h-[250px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-2">
            <span>Nike jump man</span> <span>♦ 0.0023</span>
          </div>
        </Badge.Ribbon>
      ))}
    </div>
  );
};

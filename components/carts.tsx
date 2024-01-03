"use client";
import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { FaCartShopping, FaTrashCan } from "react-icons/fa6";
import { Badge, Button } from "antd";

export const Carts = () => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger>
        <Badge count={3} className="cursor-pointer mt-2">
          {" "}
          <FaCartShopping size={25} color={"white"} />
        </Badge>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className="min-w-[220px] bg-[#383c64] rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenuPrimitive.Item className="rounded-[3px] flex gap-3 items-center justify-between h-[50px] px-[5px] select-none outline-none">
            <div className="flex gap-2">
              {" "}
              <div className="h-[40px] w-[40px] bg-gray-300 rounded-[5px]">
                1
              </div>
              <div className="flex flex-col">
                <span>1x nike sneakers</span>
                <span className="font-extrabold -mt-1">0.00234 eth</span>
              </div>
            </div>
            <FaTrashCan />
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item className="mt-3 rounded-[3px] flex gap-3 justify-between items-center h-[50px] px-[5px] select-none outline-none">
            <div className="flex gap-2">
              <div className="h-[40px] w-[40px] bg-gray-300 rounded-[5px]">
                1
              </div>
              <div className="flex flex-col">
                <span>2x iphone 13 pro max</span>
                <span className="font-extrabold -mt-1">0.00234 eth</span>
              </div>
            </div>
            <FaTrashCan />
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item className="rounded-[3px] flex gap-3 justify-between items-center h-[50px] px-[5px] select-none outline-none">
          <span className="font-extrabold">Total</span>
          <span className="font-extrabold">0.03344 eth</span>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item className="rounded-[3px] flex items-center h-[50px] px-[0px] select-none outline-none">
            <Button className="!border-[1px] !border-white leading-none select-none w-full text-white hover:!text-white h-[40px]">
              {" "}
              View Cart
            </Button>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item className="rounded-[3px] flex items-center h-[50px] px-[0px] select-none outline-none">
            <Button className="bg-[#191d3e] leading-none select-none border-none w-full text-white hover:!text-white h-[40px]">
              {" "}
             Checkout
            </Button>
          </DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};

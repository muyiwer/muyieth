"use client";
import React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { FaBars, FaChevronRight } from "react-icons/fa6";

export const PageMenu = () => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger>
        <FaBars size={30} className="cursor-pointer" />
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className="min-w-[220px] bg-[#383c64] rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenuPrimitive.Item className="hover:bg-[#191d3e] rounded-[3px] flex items-center h-[30px] px-[20px] select-none outline-none">
            New Tab{" "}
            <div className="ml-auto pl-2 text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘+T
            </div>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item className="hover:bg-[#191d3e] rounded-[3px] flex items-center h-[30px] px-[20px] select-none outline-none">
            New Window{" "}
            <div className="ml-auto pl-2 text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘+N
            </div>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Sub>
            <DropdownMenuPrimitive.SubTrigger className="hover:bg-[#191d3e] rounded-[3px] flex items-center h-[30px] px-[20px] select-none outline-none">
              More Tools
              <div className="ml-auto pl-[20px] text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
                <FaChevronRight />
              </div>
            </DropdownMenuPrimitive.SubTrigger>
            <DropdownMenuPrimitive.SubContent
              className="min-w-[220px] bg-[#383c64] backdrop:rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
              sideOffset={2}
              alignOffset={-5}
            >
              <DropdownMenuPrimitive.Item className="hover:bg-[#191d3e] group leading-none rounded-[3px] flex items-center h-[30px] px-[20px] select-none outline-none cursor-pointer">
                Move to project
              </DropdownMenuPrimitive.Item>
              <DropdownMenuPrimitive.Item className="hover:bg-[#191d3e] group leading-none rounded-[3px] flex items-center h-[30px] px-[20px] select-none outline-none cursor-pointer">
                Move to folder…
              </DropdownMenuPrimitive.Item>

              <DropdownMenuPrimitive.Separator/>
              <DropdownMenuPrimitive.Item className="hover:bg-[#191d3e] group leading-none rounded-[3px] flex items-center h-[30px] px-[20px] select-none outline-none cursor-pointer">
                Advanced options…
              </DropdownMenuPrimitive.Item>
            </DropdownMenuPrimitive.SubContent>
          </DropdownMenuPrimitive.Sub>

          <DropdownMenuPrimitive.Separator />
          <DropdownMenuPrimitive.Item className="hover:bg-[#191d3e] rounded-[3px] flex items-center h-[30px] px-[20px] select-none outline-none">
            New Tab{" "}
            <div className="ml-auto pl-2 text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘+T
            </div>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item className="hover:bg-[#191d3e] rounded-[3px] flex items-center h-[30px] px-[20px] select-none outline-none">
            New Tab{" "}
            <div className="ml-auto pl-2 text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘+T
            </div>
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Separator />
          <DropdownMenuPrimitive.Item className="hover:bg-[#191d3e] rounded-[3px] flex items-center h-[30px] px-[20px] select-none outline-none">
            New Tab{" "}
            <div className="ml-auto pl-2 text-mauve11 group-data-[highlighted]:text-white group-data-[disabled]:text-mauve8">
              ⌘+T
            </div>
          </DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};

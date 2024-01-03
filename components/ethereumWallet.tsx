"use client";
import React, { useState } from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { FaEthereum, FaBasketShopping } from "react-icons/fa6";
import { Button } from "antd";
import { useWeb3 } from "@/hooks/useWeb3";

export const EthereumWallet = () => {
  const { isInitialized, isLoading, web3, connectToMetamask } = useWeb3();
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <DropdownMenuPrimitive.Root open={open} onOpenChange={(prev) => !prev}>
      <DropdownMenuPrimitive.Trigger onClick={() => setOpen((prev) => !prev)}>
        <div className="border-[1px] border-white rounded-3xl cursor-pointer">
          <FaEthereum size={25} />
        </div>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          className="min-w-[220px] bg-[#383c64] rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenuPrimitive.Item className="rounded-[3px] flex items-center h-[50px] px-[0px] select-none outline-none">
            {isInitialized && web3 ? (
              <Button
                loading={isLoading}
                onClick={(e) => {
                  e.preventDefault();
                  connectToMetamask();
                }}
                className="bg-[#191d3e] leading-none select-none border-none w-full text-white hover:!text-white h-[40px]"
              >
                {" "}
                Connect to wallet
              </Button>
            ) : (
              <Button
                loading={isLoading}
                onClick={() =>
                  (window.open("https://metamask.io/download/", "_blank"))
                }
                className="bg-pink-600 leading-none select-none border-none w-full text-white hover:!text-white h-[40px]"
              >
                {" "}
                Install Metamask
              </Button>
            )}
          </DropdownMenuPrimitive.Item>
          <DropdownMenuPrimitive.Item className="hover:bg-[#191d3e] rounded-[3px] flex gap-2 items-center h-[30px] px-[10px] select-none outline-none cursor-pointer">
            <FaBasketShopping />
            <span>My Orders</span>
          </DropdownMenuPrimitive.Item>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};

"useClient";
import React from "react";
import { FaMagnifyingGlass} from "react-icons/fa6";
import { Input } from "antd";
import { PageMenu } from "./menu";
import { EthereumWallet } from "./ethereumWallet";
import { Carts } from "./carts";

export const PageHeader = () => {
  return (
    <header className="shadow-[0_10px_10px_-10px_rgba(230,177,255)] h-[60px] pr-[150px] pl-[150px] flex justify-between items-center">
      <div className="flex gap-3">
        <PageMenu />
        <div className="bg-white p-[2px] rounded-3xl font-bold">
          <span className="text-[#2B2F53]">muyi</span>
          <span className="text-[#C427FB]">eth</span>
        </div>
      </div>
      <div>
        <Input
          className="!w-[500px]"
          placeholder="search over 1,000 products"
          suffix={<FaMagnifyingGlass />}
        />
      </div>
      <div className="flex gap-3">
        <EthereumWallet />
        <Carts />
      </div>
    </header>
  );
};

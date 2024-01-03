"use client";
import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { classNames } from "@/utils/classnames";
import { FaChevronDown } from "react-icons/fa6";
import { Button, Checkbox } from "antd";

export const PageFilter = () => {
  return (
    <div className="h-[300px]">
      <Accordion.Root
        className="border-none !rounded-md shadow-[0_2px_10px] shadow-black/5 !bg-[#383c64]"
        type="single"
        defaultValue="item-1"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="!cursor-pointer">Categories</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <Checkbox className="text-white">Men</Checkbox>
                <span>12</span>
              </div>
              <div className="flex justify-between">
                <Checkbox className="text-white">Women</Checkbox>
                <span>12</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="!cursor-pointer">Color</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <Checkbox className="text-white">Men</Checkbox>
                <span>12</span>
              </div>
              <div className="flex justify-between">
                <Checkbox className="text-white">Women</Checkbox>
                <span>12</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="!cursor-pointer">Brands</AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <Checkbox className="text-white">Men</Checkbox>
                <span>12</span>
              </div>
              <div className="flex justify-between">
                <Checkbox className="text-white">Women</Checkbox>
                <span>12</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion.Root>
      <div className="bg-[#393e6e] flex gap-2 p-3">
        <Button className="text-white bg-purple-800">Filter</Button>
        <Button className="text-white">Reset</Button>
      </div>
    </div>
  );
};

const AccordionItem = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        "focus-within:shadow-[#383c64] mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        className={classNames(
          "text-violet11 shadow-mauve6 group flex h-[45px] flex-1 cursor-default items-center justify-between !bg-[#383c64] px-5 text-[15px] leading-none shadow-[0_1px_0] outline-none",
          className
        )}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <FaChevronDown
          className="cursor-pointer text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Content
      className={classNames(
        "hover:!border-[#383c64] focus:!border-[#383c64] text-mauve11  data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="py-[15px] px-5">{children}</div>
    </Accordion.Content>
  )
);

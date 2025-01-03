"use client";
import { StoreState } from "@/types";
import Link from "next/link";
import React from "react";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";

const SideBarCartIcon = () => {
  const { cart } = useSelector((state: StoreState) => state?.shoppers);
  return (
    <Link
      href={"/cart"}
      className="w-16 h-16 flex justify-center items-center relative"
    >
      <RiShoppingCart2Fill size={39} className="text-2xl" />
      <p className="absolute top-1 right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-semibold">
        {cart ? cart?.length : 0}
      </p>
    </Link>
  );
};

export default SideBarCartIcon;

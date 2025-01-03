"use client"

import { useState } from "react";
import Link from "next/link";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import Logo from "./Logo";
import { HiHeart } from "react-icons/hi";
import SideBarCartIcon from "./SideBarCartIcon";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="w-full h-20 bg-white border-b-[1px] border-lightText/20 sticky top-0 z-50">
      <div className="h-full max-w-screen-xl mx-auto px-4 flex items-center justify-between gap-5 lg:gap-10">
        <Logo />
        <nav className="hidden md:flex list-none space-x-6 font-sans text-lg font-semibold">
          <li className="hover:text-blue-500"><Link href="/">Home</Link></li>
          <li className="hover:text-blue-500"><Link href="/shop">Shop</Link></li>
          <li className="hover:text-blue-500"><Link href="/cart">Cart</Link></li>
          <li className="hover:text-blue-500"><Link href="/signin">SignIn</Link></li>
        </nav>
        <div className="flex items-center gap-5">
          <Link href="/shop">
            <HiHeart size={40} />
          </Link>
          <SideBarCartIcon />
          <button
            className="inline-flex md:hidden cursor-pointer"
            onClick={toggleSidebar}
          >
            <HiMenuAlt2 size={30} />
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile View */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <Logo />
          <button onClick={toggleSidebar}>
            <HiX size={30} />
          </button>
        </div>
        <ul className="p-4 list-none space-y-4 text-lg font-semibold">
          <li className="hover:text-blue-500">
            <Link href="/" onClick={toggleSidebar}>Home</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/shop" onClick={toggleSidebar}>Shop</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/cart" onClick={toggleSidebar}>Cart</Link>
          </li>
          <li className="hover:text-blue-500">
            <Link href="/signin" onClick={toggleSidebar}>SignIn</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

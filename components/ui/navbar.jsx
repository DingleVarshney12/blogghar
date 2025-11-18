"use client";
import { navLinks } from "@/constant";
import React, { useEffect, useState } from "react";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./toggleButton";
import { Plus, Search } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full md:h-22 fixed top-0 left-0 z-50 flex items-center justify-between space-x-2 py-2 px-2 md:px-4 flex-wrap transition-all duration-300 backdrop-blur-lg gap-2
      ${scrolled ? "text-black shadow-lg bg-transparent dark:bg-gray-400/60" : "bg-blue-500"}`}
    >
      <Link href={"/"}>
        <div
          className={`font-bold text-2xl py-2 md:py-4 md:px-2 flex gap-2 items-center justify-center ${scrolled ? "text-black" : "text-white"
            }`}
        >
          <div className="w-8 h-8 rounded-full bg-gray-100"></div>
          Blogghar
        </div>
      </Link>
      <nav className="items-center space-x-4 hidden md:flex">
        {navLinks.map((link, i) => (
          <Button
            key={i}
            variant="link"
            className={`transition-transform duration-300 nav_links ${pathname === link.path
              ? scrolled
                ? "text-black scale-110"
                : "text-white scale-110"
              : scrolled
                ? "text-black"
                : "text-gray-200"
              }`}
          >
            <Link href={link.path}>{link.name}</Link>
          </Button>
        ))}
      </nav>
      <div className="flex gap-2 focus-visible:outline-none">
        <Link href="/explore">
          <Button variant="outline" size="icon">
            <Search />
          </Button>
        </Link>
        <ModeToggle />
        <div>
          <Link href="/create-blog">
            <Button variant="outline" size="icon">
              <Plus className="h-[1.2rem] w-[1.2rem] scale-100" />
              <span className="sr-only">Create Button</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

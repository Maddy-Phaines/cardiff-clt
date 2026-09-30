"use client";

import Link from "next/link";
import { Menu, XIcon } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

interface NavLinkType {
  name: string;
  path: string;
  id: string;
}

const navLinks: NavLinkType[] = [
  { name: "Home", path: "/", id: "home" },
  { name: "Classes", path: "/classes", id: "classes" },
  { name: "About", path: "/about", id: "about" },
  { name: "Events", path: "/events", id: "events" },
  { name: "Contact", path: "/contact", id: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header
      className="w-full top-0 sticky
      left-0 right-0 bg-white
    z-1000 shadow-2xs"
    >
      <div className="py-6">
        <div
          className="px-4 md:px-8.75 max-w-7xl
        m-auto"
        >
          <nav
            className="md:static flex
        md:flex-row
        justify-between items-center ml-3.75 mr-3.75
        text-[#2E3E57]"
          >
            <Link href="/">
              <Logo />
            </Link>

            <ul
              className={clsx(
                "flex flex-col md:flex-row items-center gap-8 fixed md:static top-0 right-0 bottom-0 w-1/2 md:w-auto p-8 md:p-0 transition-transform duration-300 ease-in-out md:translate-x-0 md:bg-transparent",
                menuOpen ? "translate-x-0 bg-rose-300" : "translate-x-full",
              )}
            >
              {navLinks.map((link) => (
                <li key={link.name} className="py-6.25 px-3.5">
                  <Link
                    onClick={closeMenu}
                    href={link.path}
                    className={clsx(
                      "font-semibold hover:text-rose-500",
                      pathname === link.path && "text-rose-500",
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              aria-labelledby="Menu toggle button"
              className="text-black cursor-pointer
          z-9 md:hidden"
              onClick={toggleMenu}
            >
              {menuOpen ? <XIcon /> : <Menu />}
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

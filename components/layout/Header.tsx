"use client";

import Link from "next/link";
import { Menu, XIcon } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

import { useViewportSize } from "@mantine/hooks";
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
  const { width } = useViewportSize();
  const isMobile = width < 768;
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenuOnMobile = () => {
    if (isMobile) {
      setMenuOpen(false);
    }
  };
  return (
    <header
      className="w-full top-0 sticky
      left-0 right-0 
    z-1000 bg-amber-100 shadow-2xs"
    >
      <div className="py-6">
        <div
          className="px-4 md:px-8.75 max-w-250px  
        m-auto"
        >
          <nav
            className="md:static flex 
        md:flex-row
        justify-between items-center ml-3.75 mr-3.75 
        text-[text-[#2E3E57]]"
          >
            <Link href="/">
              <Logo />
            </Link>

            <ul
              className={clsx(
                "flex flex-col md:flex-row translate-x-0 items-center gap-8",
                {
                  "flex-col  fixed top-0 p-8 right-0 bottom-0 w-1/2 transform transition-transform duration-300 ease-in-out translate-x-0":
                    menuOpen,
                  "fixed top-0 right-0 bottom-0 p-8  duration-300 ease-in-out translate-x-full":
                    !menuOpen && isMobile,
                },
              )}
            >
              {navLinks.map((link) => (
                <li key={link.name} className="py-6.25 px-3.5">
                  <Link
                    onClick={closeMenuOnMobile}
                    href={link.path}
                    className={`font-semibold hover:text-[#A8922D]
                      pathname === link.path ? "text-sky-500" : "text-secondary"`}
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

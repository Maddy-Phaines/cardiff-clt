"use client";
import { useEffect, useState } from "react";

export const ToTop = () => {
  const [visible, setVisible] = useState(false);

  /*  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  */

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      href="#hero"
      id="toTopButton"
      className={`fixed bottom-5 right-5 
      z-50 p-4 rounded-full bg-blue-600 text-white shadow-lg 
      transition-opacity duration-300 ${visible ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <svg
        xmlns="http://www.w3.org"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </a>
  );
};

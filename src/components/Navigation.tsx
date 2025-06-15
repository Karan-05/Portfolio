
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 shadow-lg backdrop-blur-lg border-b border-emerald-400/25"
          : "bg-gradient-to-b from-white/80 to-transparent"
      }`}
      style={{ minHeight: "72px" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent drop-shadow-md">
            Karan Allagh
          </div>
          <div className="hidden md:flex space-x-8">
            {["About", "Experience", "Skills", "Projects", "Research", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="relative text-green-700 font-semibold px-3 py-1 transition-colors duration-200 rounded-md group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 hover:bg-emerald-50 hover:text-emerald-600"
                style={{
                  textShadow: "0 1px 2px #d4f7df",
                  letterSpacing: "-0.5px",
                }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// app/layout.tsx
"use client"; // Client component policy usage

import React, { useEffect, useState } from "react";
import { metadata } from "./metadata"; // Imports metadata from a new file
import localFont from "next/font/local";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsHeaderVisible(currentScrollY < prevScrollY || currentScrollY === 0);
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Black bar */}
        <header
          style={{
            backgroundColor: "rgba(10, 10, 10, 0.85)", // Color negro con 80% de opacidad            
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            transition: "transform 0.3s ease ,  backdrop-filter 0.3s ease",
            transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
            zIndex: 1000, // Put in the first layer
            backdropFilter: "blur(12px)"
          }}
        > <div className=" p-2">
            <ul className="flex justify-center items-center space-x-4">
              <li className="h-full flex items-center">
                <a
                  href="/"
                  className=" transition transform duration-150 hover:scale-95 text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded-full"
                >
                  Home
                </a>
              </li>
              <li className="h-full flex items-center">
                <a
                  href="faq"
                  className="transition transform duration-150 hover:scale-95  text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded-full"
                >
                  FAQ
                </a>
              </li>
              <li className="h-full flex items-center">
                <span className="text-white font-bold px-4">ScriptMaker</span>
              </li>
              <li className="h-full flex items-center">
                <a
                  href="about"
                  className="transition transform duration-150 hover:scale-95 text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded-full"
                >
                  About
                </a>
              </li>
              <li className="h-full flex items-center">
                <a
                  href="start"
                  className="transition transform duration-150 hover:scale-95 text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded-full"
                >
                  Start
                </a>
              </li>
            </ul>
          </div>

        </header>

        {/* primary container */}
        <main style={{ marginTop: "60px" }}>{children}</main>

        {/* foot page bar */}
        <footer style={{ backgroundColor: "##0a0a0a", padding: "1rem", marginTop: "auto" }}>
          <p style={{ color: "#fff", textAlign: "center" }}>© 2024 Alex Farrero script_maker dev</p>
        </footer>
      </body>
    </html>
  );
}

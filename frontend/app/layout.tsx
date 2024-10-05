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
            backgroundColor: "rgba(10, 10, 10, 0.8)", // Color negro con 80% de opacidad
            padding: "9px",            
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            transition: "transform 0.3s ease ,  backdrop-filter 0.3s ease",
            transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
            zIndex: 1000, // Put in the first layer
            backdropFilter: "blur(25px)"
          }}
        > <div className="w-3/5 mx-auto">
          <h1 style={{ color: "#fff", textAlign: "center" }} className="font-bold">Script maker</h1>
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

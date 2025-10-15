// components/ScrollProgressLine.js
"use client";
import React, { useEffect, useState } from "react";

const ScrollProgressLine = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const calculateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", calculateScrollProgress);
    return () => window.removeEventListener("scroll", calculateScrollProgress);
  }, []);

  return (
    <div className="scroll-container">
      <div className="track" />
      <div
        className="fill"
        style={{ height: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressLine;

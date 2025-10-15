// components/ZigZagProgressLine.js
"use client";
import React, { useEffect, useState } from "react";

const ZigZagProgressLine = () => {
   const [scrollPercent, setScrollPercent] = useState(0);

  const updateScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollPercent(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
<>



    <div style={{ position: 'fixed',
  right: '20px',
  top: '120px',
  bottom: '20px',
  height: 'calc(100vh - 140px)',
  width: '60px',
  zIndex: '999'}}>
      <svg viewBox="0 0 120 800" preserveAspectRatio="xMidYMin meet">
  {/* Base Track */}
  <path
    d="M110 800
       V600
       C110 580, 80 550, 40 540
       C10 530, 5 510, 5 470
       V0"
    fill="none"
    stroke="#0070f3"
    strokeWidth="4"
  />

  {/* Fill Progress */}
  <path
    d="M110 800
       V600
       C110 580, 80 550, 40 540
       C10 530, 5 510, 5 470
       V0"
    fill="none"
    stroke="#ccc"
    strokeWidth="4"
    strokeDasharray="1000"
    strokeDashoffset={1000 - scrollPercent * 10}
    style={{ transition: "stroke-dashoffset 0.2s ease-out" }}
  />
</svg>

    </div>
      </>

  );
};

export default ZigZagProgressLine;

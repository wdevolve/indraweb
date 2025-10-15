"use client";

import React, { useEffect, useState, useRef } from "react";

export default function ScrollLine() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Distance the section has scrolled into view
      const visible = windowHeight - rect.top;
      const totalScrollable = windowHeight + rect.height;

      let progress = visible / totalScrollable;
      progress = Math.max(0, Math.min(1, progress)); // Clamp 0 to 1

      setScrollPercent(progress);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll(); // initial run

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="bg-light"
        style={{
          background:
            "linear-gradient(180deg, #eeeef3 0%, #ededf2 50%, #e5eef0 100%)",
        }}
      >
        <div className="container-fluid pt-5 my-0">
          <div className="container" style={{ zIndex: "-1", position: "relative" }}>
            <div className="row mb-0">
              <div className="col anim-fade-left">
                <h2 className="my-3 fs-1 fw-normal lead pb-4 border-bottom border-dark">
                  Turning <span className="text-grad">Waste water</span> into Wonder.
                </h2>
                <p className="fs-4 text-secondary mt-4 mb-5">
                  Our plug-and-play systems, powered by patented{" "}
                  <span className="text-grad">ElectroX</span>™ tech, make water reuse
                  effortless and efficient - wherever you are.
                </p>
              </div>
            </div>

            <div className="row mx-auto my-0" style={{ maxWidth: "1000px" }}>
              <div className="col-md-5">{/* Empty column */}</div>

              <div className="col-md-2">
                <div
                  style={{
                    height: "auto",
                    width: "60px",
                    zIndex: "999",
                  }}
                >
<svg viewBox="0 0 120 800" preserveAspectRatio="xMidYMin meet">
  <defs>
    <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#268CD600" />
      <stop offset="100%" stopColor="#0050b3" />
    </linearGradient>
  </defs>

  {/* Base track */}
  <path
    d="M5 0
       V480
       C5 500, 40 540, 80 560
       C110 580, 115 620, 115 640
       V800"
    fill="none"
    stroke="#ccc"
    strokeWidth="4"
  />

  {/* Fill progress with gradient */}
  <path
    d="M5 0
       V480
       C5 500, 40 540, 80 560
       C110 580, 115 620, 115 640
       V800"
    fill="none"
    stroke="url(#lineGradient)"
    strokeWidth="4"
    strokeDasharray="1000"
    strokeDashoffset={1000 - scrollPercent * 1000}
    style={{ transition: "stroke-dashoffset 3s ease-out" }}
  />
</svg>

                </div>
              </div>

              <div className="col-md-5">
                <p className="pt-5 lead anim-fade-up">
                  INDRA is a wastewater management company delivering advanced,
                  decentralized solutions for recycling and reuse. Using our patented
                  ElectroX technology, we enable high-efficiency treatment at the point of
                  source with minimal footprint and zero chemical usage in primary
                  treatment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

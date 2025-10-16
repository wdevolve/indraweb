"use client";
import Link from 'next/link';

import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';
// // import { useAnimations } from "@/utils/animations";
import React, { useEffect, useState, useRef } from "react";

export default function HomeFeatures() {
// // useAnimations();
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

    <section ref={sectionRef} className="bg-light my-0 py-0" style={{background: 'linear-gradient(180deg, #eeeef3 0%, #ededf2 50%, #e5eef0 100%)'}}>
          <div className="container-fluid pt-0 my-0">
      <div className="container"  style={{zIndex:'-1', position:'relative'}}>


        {/* First Row: Heading */}
        <div className="row mb-0">
          <div className="col anim-fade-left">
            <h2 className="my-3 fs-1 fw-normal lead pb-4 border-bottom border-dark" style={{maxWidth:'100%'}}>
              What is <span className="text-grad">INDRA</span>?</h2>
            <p className="fs-4 text-secondary mt-4 mb-5">Every cubic metre reused cuts freshwater draw and tanker use. Compliance is engineered and visible on dashboards. Modular units handle loads and scale circular water across industry. </p>
          </div>
        </div>
        {/* Second Row: 2 columns */}
        <div className="row mx-auto mt-3 mb-0">
          <div className="col-md-6 px-0">{/* Empty column */}
            <div className="sticky-top" style={{top:'100px'}}>
              <h3 className="card-title lead fs-1 fw-normal mb-5 text-grad">
                    Incredibly Powerful
                  </h3>
                <Image
                                src={`/images/others/features-left.webp`}
                                alt="Media coverage"
                                width={0}
                                height={0}
                                className="media-slide-image pe-md-5"
                                style={{width:'100%',height:'500px',objectFit:'cover'}}
                              />
            </div>

          </div>
          <div className="col-md-1 only-desk">
                    
            <svg viewBox="0 0 120 800" preserveAspectRatio="xMidYMin meet">
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#268CD600" />
                  <stop offset="90%" stopColor="#0050b3" />
                  <stop offset="100%" stopColor="#268CD600" />
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
                strokeWidth="6"
                strokeDasharray="1300"
                strokeDashoffset={1000 - scrollPercent * 1000}
                style={{ transition: "stroke-dashoffset 1s ease-out" }}
              />
            </svg>

                </div>

          <div className="col-md-5">
            <p className="pt-0 lead anim-fade-up" style={{maxWidth:'400px'}}>
              Indra is a deep tech product company for water. We make reuse the default by treating wastewater at the source with electricity. No chemical theatrics in primary treatment, fewer moving parts, faster deployments. 

            </p>
          </div>
        </div>
      </div>
          </div>

      <div className="feature-container py-0  my-0">
      <div id="trigger-section" className="container">
      <div className="row row-cols-1 row-cols-md-3 text-center mx-auto" >
          <div className="col" style={{marginBottom:'-100px',paddingTop:'0px'}}>
          
          </div>
      </div>
      <div className="row row-cols-1 row-cols-md-3 text-center mx-auto g-5" style={{ marginTop:'145px', paddingBottom:'45px' }}>
            <div className="col ps-md-0 pe-md-5">
            {/* <span className="feature feature-two" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightf2" aria-controls="offcanvasRight"></span>
            <span className="feature-text" style={{marginLeft:'10px', marginRight:'50px'}}>Feature Two</span> */}

                  <span className="feature feature-two float-start pe-0 pe-md-3 only-desk" type="button"></span>



            <video
              className="anim-zoom d-none"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              style={{width:'175px'}}
            >
              <source src="/videos/water-bubble-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
              <div className="text-start anim-fade-up" style={{marginTop:'0px'}}>
            <Link href="/products" className="text-dark">
              <h3 className="border-bottom border-secondary pb-3 mb-3 fs-4">Products<i className="bi bi-arrow-up-right float-end"></i></h3>
              <p className="lead mt-4">Inspired by automobile style assembly lines, our standardised modules are mass produced lowering deployment time.</p>
            </Link>
              </div>
              </div>
          <div className="col ps-md-5 pe-md-5">
            {/* <span className="feature feature-two" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightf1" aria-controls="offcanvasRight"></span> */}

                  <span className="feature feature-two float-start pe-0 pe-md-3 only-desk" type="button"></span>

                <video
                  className="anim-zoom d-none"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  style={{width:'175px'}}
                  >
                  <source src="/videos/water-bubble-2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* <span className="feature-text">Feature One</span> */}
                <div className="text-start anim-fade-up" style={{marginTop:'0px'}}>
                <Link href="/technology" className="text-dark">
                  <h3 className="border-bottom border-secondary pb-3 mb-3 fs-4">Technology<i className="bi bi-arrow-up-right float-end"></i></h3>
                  <p className="lead mt-4">Redefining electrolysis, a centuries-old phenomenon, to solve today’s evolving wastewater challenges.</p>
                </Link>
                  </div>
                  </div>
          <div className="col ps-md-5">
                {/* <span className="feature feature-three" style={{paddingLeft:'100px'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightf3" aria-controls="offcanvasRight"></span> */}
                  <span className="feature feature-two float-start pe-0 pe-md-3 only-desk" type="button"></span>

                <video
                  className="anim-zoom d-none"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  style={{width:'175px'}}
                  >
                  <source src="/videos/water-bubble-3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* <span className="feature-text" style={{marginLeft:'80px'}}>Feature Three</span> */}
                <div className="text-start anim-fade-up" style={{marginTop:'0px'}}>
                <Link href="/industries" className="text-dark">
                  <h3 className="border-bottom border-secondary pb-3 mb-3 fs-4">Industries<i className="bi bi-arrow-up-right float-end"></i></h3>
                  <p className="lead mt-4">Really, can any industry survive without water? Find out how we create value for your industry.</p>
                </Link>
                  </div>
          </div>
      </div>
          </div>
          </div>

<div className="container">


    {/* <div className="row mb-0">
          <div className="col anim-fade-left">
            <h2 className="mt-3 fs-1 fw-normal lead pb-4 border-bottom border-dark" style={{maxWidth:'100%'}}>
              What is <span className="text-grad">INDRA</span>?
              </h2>
            <p className="fs-4 text-secondary mt-4">Indra is a deep tech product company for water. We make reuse the default by treating wastewater at the source with electricity. No chemical theatrics in primary treatment, fewer moving parts, faster deployments.</p>
            <p class="lead">ElectroX with digital intelligence makes plants smaller, faster and cleaner, with lower OPEX and higher uptime. We dismantle surfactants, organics, dyes, oils, nutrients, metals, petrochemical waste and pathogens among others, delivering high quality water for flushing, irrigation, cleaning, industrial processes, cooling towers, HVACs and boilers.</p>
          </div>
        </div> */}


    {/* <h2 class="lead fs-5 px-4 py-2 rounded-2 w-100 text-white" style={{background:'#a7abc1'}}>What is Indra?</h2> */}

    {/* <div className="row mt-3 g-5">
      <div className="col-md-6 pe-md-5 anim-fade-up">
                <h3 className="lead fw-medium fs-4 border-bottom border-secondary pb-3 mb-3">Efficient Water Recovery</h3>
                        <p className="lead mt-4">Our systems recover up to 99% of water, reduce sludge by over 70%, and lower operational costs by 35 - 40%. Designed to be plug-and-play, our modular units handle shock loads, meet compliance norms, and integrate seamlessly into existing setups across industrial and non-industrial environments.</p>
      </div>
      <div className="col-md-6 ps-md-5 anim-fade-up">
                <h3 className="lead fw-medium fs-4 border-bottom border-secondary pb-3 mb-3">Sustainable Water Management</h3>
            <p className="lead mt-4">INDRA serves key sectors like textiles, pharmaceuticals, chemicals, metals, and FMCG. With over 3 billion litres of water saved and counting, we are redefining water management - efficiently, sustainably, and at scale.</p>

      </div>
    </div> */}
</div>

    </section>

{/* 
<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRightf1" aria-labelledby="offcanvasRightf1Label">
<div className="offcanvas-header">
  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div className="offcanvas-body p-md-5">
  <h2 className="lead fs-1 text-primary">Feature One Heading</h2>
  <p className="mt-4 pt-4 border-top">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>
</div>

<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRightf2" aria-labelledby="offcanvasRightf2Label">
<div className="offcanvas-header">
  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div className="offcanvas-body p-md-5">
  <h2 className="lead fs-1 text-primary">Feature Two Heading</h2>
  <p className="mt-4 pt-4 border-top">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>
</div>

<div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRightf3" aria-labelledby="offcanvasRightf3Label">
<div className="offcanvas-header">
  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
</div>
<div className="offcanvas-body p-md-5">
  <h2 className="lead fs-1 text-primary">Feature Three Heading</h2>
  <p className="mt-4 pt-4 border-top">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
</div>
</div> */}

    </>
  );
}

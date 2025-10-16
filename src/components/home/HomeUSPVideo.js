import React from 'react';
import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";
import { useState, useEffect, useRef } from 'react';

// var images = [
//   "/images/image-stage-1.webp",
//   "/images/image-stage-2.webp",
//   "/images/image-stage-3.webp",
//   "/images/image-stage-4.webp",
//   "/images/product1.webp",
// ];

var images = [
  "/images/icons/plug-play.webp",
  "/images/icons/savings.webp",
  "/images/icons/less-space.webp",
  "/images/icons/operational-costs.webp",
  "/images/icons/water-recovery.webp",
    "/images/icons/zero-chemicals.webp",
  "/images/icons/pcb.webp",
  "/images/icons/modular-capacity.webp",
  "/images/icons/long-life.webp",
];

const sectionContent = [
  {
    icon: "/images/icons/plug-play.webp",
    title: "Plug and play",
    text: "Plug-and-play skids. Stack like LEGO. Scale from pilots to full scale plants.",
  },
  {
    icon:"/images/icons/savings.webp",
    title: "35% savings on Lifecycle costs",
    text: "Treatment in seconds, continuous flow. Big capacity, tiny footprint.",
  },
  {
    icon:"/images/icons/less-space.webp",
    title: "90% less space requirement",
    text: "No chemical dosing. No added toxicity in sludge. Safer for people, processes, planet.",
  },
  {
    icon:"/images/icons/operational-costs.webp",
    title: "40% savings on operational costs",
    text: "Close the loop. More water back, less wasted. Enabling circular water economies.",
  },
  {
    icon:"/images/icons/water-recovery.webp",
    title: "up to 99% Water Recovery",
    text: "Seamless integration with older & newer plants and treatment technologies. More performance, more capacity.",
  },
  {
    icon:"/images/icons/zero-chemicals.webp",
    title: "Zero chemicals in Primary Treatment",
    text: "Seamless integration with older & newer plants and treatment technologies. More performance, more capacity.",
  },
  {
    icon:"/images/icons/modular-capacity.webp",
    title: "Meets PCB & STATE norms",
    text: "Seamless integration with older & newer plants and treatment technologies. More performance, more capacity.",
  },
  {
    icon:"/images/icons/pcb.webp",
    title: "Modular Capacity: 5-2000 KLD",
    text: "Seamless integration with older & newer plants and treatment technologies. More performance, more capacity.",
  },
  {
    icon:"/images/icons/long-life.webp",
    title: "Long life-span 10+ years",
    text: "Seamless integration with older & newer plants and treatment technologies. More performance, more capacity.",
  },        
];

export default function HomeUSPVideo() {
// useAnimations();
const [currentImage, setCurrentImage] = useState(images[0]);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      const windowHeight = window.innerHeight;
      const midPoint = scrollPos + windowHeight / 2;

      sectionsRef.current.forEach((section, i) => {
        if (!section) return;
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (midPoint >= top && midPoint <= bottom) {
          setCurrentImage(images[i]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="container-fluid px-0 pt-5 bg-grad-blue-gray" style={{ zIndex: 9, position: 'relative' }}>
      <div className="container">
        <div className='row mb-0'>
          <div className="col anim-fade-left">
            <h2 className="my-3 fs-1 fw-normal lead pb-4 border-bottom border-dark" style={{ maxWidth: '100%' }}>
              Why <span className="text-grad">Indra</span>?
            </h2>
            <p className="fs-4 text-secondary mt-4 mb-5">
Answering today’s water challenge. Advancing tomorrow’s water certainty.
            </p>
          </div>
        </div>

        <div className='row section'>
          <div className='col-md-0 d-none'>

            <h3 className="card-title lead fs-1 fw-normal mb-5 sticky-top" style={{top:'100px'}}>
                    Important USPs
                  </h3>

            <ul class="sticky-top" style={{top:'40%', listStyleType:  'circle', paddingLeft: '1.5rem'}}>
              <li class="my-2 lead"><a class="text-secondary" href="#usp-1">Modular & Scalable</a></li>
              <li class="my-2 lead"><a class="text-secondary" href="#usp-2">90% Less Footprint Low</a></li>
              <li class="my-2 lead"><a class="text-secondary" href="#usp-3">Zero Chemicals in Primary Treatment</a></li>
              <li class="my-2 lead"><a class="text-secondary" href="#usp-4">Up to 99% Water Recovery</a></li>
              <li class="my-2 lead"><a class="text-secondary" href="#usp-5">Flexible and Retrofit Ready</a></li>
            </ul>

          </div>

          <div className="col-md-6 py-5 text-center only-desk">
            <Image
              src="/images/icons/plug-play.webp"
              alt="Product Feature"
              width={0}
              height={0}
              className="product-image"
            />
          </div>

                    <div className='col-md-6 sections-container'>
            {sectionContent.map((item, index) => (
              <div
                key={index}
                className={`section${index + 1} sections`}
                ref={(el) => (sectionsRef.current[index] = el)}
              >
                <div className="p-0 mt-5" style={{maxWidth:'500px'}}>
                  <a id={`usp-${index + 1}`} style={{paddingTop: '50%', marginTop: '-50%'}}></a>
                  <span className="d-none badge rounded-pill text-bg-warning py-2 px-3 mb-3">USP {index + 1}</span>

                  <h5 className="card-title text-primary lead fs-1 text-grad fw-normal mb-3 text-start">
                    {item.title}
                  </h5>
                  <p className="card-text lead fs-4 fw-medium text-secondary d-none">
                    {item.text}
                  </p>

                  <Image
              src={`${item.icon}`}
              alt="Product Feature"
              width={0}
              height={0}
              className="product-image-mob mx-auto only-mob"
              style={{width:'auto',height:'200px'}}
            />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
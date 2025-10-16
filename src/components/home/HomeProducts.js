import React from 'react';
import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";
import { useState, useEffect, useRef } from 'react';

const images = [
  "/images/product1.webp",
  "/images/product2.webp",
  "/images/product3.webp",
  "/images/product4.webp",
  "/images/product5.webp",
];

const sectionContent = [
  {
    title: "Modular & Scalable",
    text: "Plug-and-play skid-based reactors as like LEGO building blocks.",
  },
  {
    title: "90% Less Footprint Low",
    text: "Instantaneous treatment rate and continuous flow enable compact solutions.",
  },
  {
    title: "Zero Chemicals in Primary Treatment",
    text: "No chemical dosing. No sludge toxicity. Safer for people, processes, and the planet.",
  },
  {
    title: "Up to 99% Water Recovery",
    text: "High recovery with no rejects generated. Building circular water economies.",
  },
  {
    title: "Flexible and Retrofit Ready",
    text: "Seamless integration in any plant - Maximising performance & expanding capacity.",
  },
];

export default function HomeProducts() {
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
    <section className="container-fluid px-0 pt-5 text-grad-gray-blue" style={{ zIndex: 9, position: 'relative' }}>
      <div className="container">
        <div className='row mb-0'>
          <div className="col anim-fade-left">
            <h2 className="my-3 fs-1 fw-normal lead pb-4 border-bottom border-dark" style={{ maxWidth: '100%' }}>
              Why <span className="text-grad">Indra</span> for water treatment?
            </h2>
            <p className="fs-4 text-secondary mt-4 mb-5">
              Built for the realities of today. Engineered for the needs of tomorrow.
            </p>
          </div>
        </div>

        <div className='row section mx-auto text-end' style={{ maxWidth: '900px' }}>
          <div className='col-md-6 sections-container'>
            {sectionContent.map((item, index) => (
              <div
                key={index}
                className={`section${index + 1} sections`}
                ref={(el) => (sectionsRef.current[index] = el)}
              >
                <div className="p-0 mt-5">
                  <h5 className="card-title text-primary lead fs-1 text-grad fw-normal mb-3">
                    {item.title}
                  </h5>
                  <p className="card-text lead fs-4 fw-medium text-secondary">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-6 py-5">
            <Image
              src={currentImage}
              alt="Product Feature"
              width={0}
              height={0}
              className="product-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import Image from 'next/image';
import Head from 'next/head';
import SEO from '../../SEO'
import { useEffect, useRef } from 'react';
// import { useAnimations } from "@/utils/animations";
import ProjCaseStudyDownload from '../../projects/ProjCaseStudyDownload'
import Link from "next/link";
import ASSET_VERSION from '../../../version';

export default function IndHeroSub({image, h1, intro, children, grayValue, grayText, challenges=[],electroxHelps=[] }) {  
  // useAnimations();

   const lineRef = useRef(null);
    const containerRef = useRef(null);
    const entryRefs = useRef([]);
    const dotRefs = useRef([]);
  
    useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      const line = lineRef.current;
  
      if (!container || !line) return;
  
  const containerTop = container.getBoundingClientRect().top + window.scrollY;
      const containerHeight = container.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
  
      const startOffset = windowHeight * 0.5; // Start when 20% from top
      const maxVisibleHeight = containerHeight * 1; // max 85% line fill
  
      // Calculate how far user has scrolled into the container
      const scrollProgress = (scrollY + startOffset - containerTop) / (containerHeight - windowHeight * 0.3);
  
      // Clamp between 0 and 1
      const progress = Math.max(0, Math.min(scrollProgress, 1));
  
      // Apply progress to line height
      const lineHeight = maxVisibleHeight * progress;
      line.style.height = `${lineHeight}px`;
    };
  
    window.addEventListener('scroll', handleScroll);
    handleScroll();
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  
  


  return (
    <>
         <Head>
        <title>Industries | INDRA</title>
      </Head>
      <SEO title="Industries | MySite" description="Welcome to my Next.js website." />
      <link rel="stylesheet" href={`/css/ind.css?v=${ASSET_VERSION}`} />

   <section className="py-4 pb-5 bg-grad-gray-blue">
      <div className="container">
        <div className="row g-5" style={{marginTop:'50px'}}>
          <div className="col-md-6 pe-md-5">
            <h1 class="mb-3 fs-1 lead fw-normal border-bottom border-secondary pb-3">{h1}</h1>
            <p class="fs-5 lead fw-normal text-secondary">{intro}</p>
            {children}
          </div>
          <div className="col-md-6 ps-md-5">
            <Image
              src={image}
              alt="Product Feature"
              width={0}
              height={0}
              objectFit='cover'
              position='abosolute'
              style={{width:'100% ! important;', height:'400px ! important;'}}
            />
          </div>
        </div>
      </div>
    </section>



{/* Challenges Section */}
{/* Challenges Section */}
<section className="bg-grad-blue-gray py-5">
  <div className="container mb-5">
    <h2 className="my-3 fs-1 fw-normal text-dark lead pb-4 border-bottom border-dark mb-5">
      Industry Challenges
    </h2>

    <div className="row row-cols-1 row-cols-md-4 g-5 text-center">
      {challenges.map((item, index) => (
        <div className="col" key={index}>
          <div className="border-0 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center">
            
            {/* Top Image */}
            <img
              src={`/images/icons/${item.icon}`}
              alt="Benefit Icon"
              className="mb-3"
              style={{
                width: '70px',
                height: '70px',
                objectFit: 'contain',
              }}
            />

            {/* Bottom Description */}
            <p className="fs-5 text-dark mb-0">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>







<section className="bg-grad-gray-blue">
  <div className="container">

     <div className="row g-0 mb-3">
          <div className="col">
            <h2 className="mb-3 fw-normal lead fs-1 border-bottom border-secondary pb-3">
              How ElectroX Helps
            </h2>
            <p className="fs-4 text-secondary">Through the lens of a co-founder</p>
          </div>
        </div>


    <div className="row mt-5">
  

      {/* Right Column: Timeline */}
      <div className="col-md-11 ps-md-0 pb-5 mx-auto">
        <div className="timeline-container" ref={containerRef}>
          {/* Timeline Line */}
          <div className="timeline-line-wrapper">
            <div className="timeline-line-track"></div>
            <div className="timeline-line-progress" ref={lineRef}></div>

            {/* Optional: Add dynamic dots */}
            {/* {electroxHelps.map((_, index) => (
              <div
                key={`dot-${index}`}
                className="timeline-dot"
                ref={(el) => (dotRefs.current[index] = el)}
              ></div>
            ))} */}
          </div>

          {/* Timeline Entries */}
          <div className="timeline-entries">
            {electroxHelps.map((item, index) => (
              <div
                className="timeline-entry d-flex position-relative"
                key={index}
                ref={(el) => (entryRefs.current[index] = el)}
              >
                {/* Marker */}
                <div className="timeline-marker">
                  <span className="timeline-dot"></span>
                </div>

                {/* Entry Content */}
                <div className="row w-100 anim-slide-right" style={{zIndex:'999999',marginTop:'-20px'}}>
                  <div className="col-md-2 d-flex justify-content-center align-items-start">
                    <img
                      src={`/images/icons/${item.icon}`}
                      alt="Benefit Icon"
                      className="mb-3 rounded-circle bg-white shadow-sm p-3"
                      style={{
                        width: '70px',
                        height: '70px',
                        objectFit: 'contain',
                        // marginLeft:'-150px',
                        marginTop:'0px',
                        zIndex:'999999'
                      }}
                    />
                  </div>
                  <div className="col-md-10">
                    <div className="border-grad p-1 rounded-3">
                      <div className="timeline-description bg-light rounded-3 py-3 px-4">
                        <div
                          className="lead fs-5"
                          dangerouslySetInnerHTML={{ __html: item.desc }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






    <ProjCaseStudyDownload/>


      </>
  );
}


import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";
import Link from "next/link";

export default function TechHero() {  
  // useAnimations();
    useEffect(() => {
          // Dynamically load jQuery and Ripples
          const loadScript = (src) =>
            new Promise((resolve, reject) => {
              const script = document.createElement('script');
              script.src = src;
              script.async = true;
              script.onload = resolve;
              script.onerror = reject;
              document.body.appendChild(script);
            });
      
          async function initRipples() {
            if (typeof window !== 'undefined') {
              try {
                await loadScript('/library/jquery.ripples.min.js');
      
                window.jQuery('.full-landing-image').ripples({
                  resolution: 256,
                  perturbance: 0.01,
                });
              } catch (error) {
                console.error('Failed to load ripples plugin', error);
              }
            }
          }
      
          initRipples();
        }, []);
  
  return (

<>
       {/* <section
      className="position-relative text-white text-center d-flex align-items-end justify-content-center py-5 full-landing-image"
      style={{
backgroundImage: `url('/images/technology-bg.webp')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',minHeight:'calc(100vh - 0px)', backgroundPosition:'center center',
  }}
    > */}

<section
      className="position-relative text-white text-center d-flex align-items-end justify-content-center py-5 full-landing-image"
      style={{minHeight:'calc(100vh - 0px)'  }}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute w-100 h-100"
        style={{
          objectFit: 'cover',
          top: 0,
          left: 0,
        }}
      >
        <source src="/videos/technology-bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Radial black overlay */}
      <div
        className="position-absolute w-100 h-100 inner-water-bg"
        style={{
          background:
            'radial-gradient(circle, transparent 0%, rgba(0,0,0,0.5) 100%)',
          top: 0,
          left: 0,
        }}
      ></div>

      {/* Centered Content */}
      <div className="container" style={{ position: 'relative', zIndex: 1}}>
        <div className="float-start text-start anim-fade-left" style={{maxWidth:'800px' }}>
          <h1 className="display-6 fw-medium text-start">Benchmarking Water Treatment
</h1>
          <Link href="/contact"><button className="btn btn-outline-light mt-4">Save Water</button></Link>
        </div>
      </div>
    </section>
   {/* <section className="py-4 pb-5">
      <div className="container">
        <div className="mb-2 media-container rounded-3 anim-fade-up">
                        <div className="media-overlay-tab p-4">
                          <h3 className="fs-4 text-white fw-medium lead text-shadow pb-1 tech-slide-h3">
                            Technology
                          </h3>
                          <hr
                            className="border-white border-1 my-2 tech-slide-hr"
                            style={{ zIndex: 999, position: 'relative', opacity: 1 }}
                          />
                          <p className="text-end text-white">Lorem Ipsum</p>
                        </div>
                        <Image
                          src={`/images/technology-bg.webp`}
                          alt="Media coverage"
                          width={0}
                          height={0}
                          className="media-slide-image rounded-3"
                          style={{width:'100%',height:'450px',objectFit:'cover'}}
                        />
                      </div>
      </div>
    </section> */}
    </>
   );
}
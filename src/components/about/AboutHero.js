import React from 'react';
import Image from 'next/image';
import Link from "next/link";

import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";
export default function AboutHero() {  
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
//     <section
//       className="position-relative text-white text-center d-flex align-items-end justify-content-center py-5 full-landing-image"
//       style={{
// backgroundImage: `url('/images/pexels-bithinrajxlr8-2763927.jpg')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',minHeight:'calc(100vh - 0px)', backgroundPosition:'center center',
//   }}
//     >
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
  <source src="/videos/hero-video.mp4" type="video/mp4" />
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
          <h1 className="display-6 fw-medium text-start">Incredibly powerful, unbelievably compact.
</h1>
          <Link href="/contact"><button className="btn btn-outline-light mt-4">Save Water</button></Link>
        </div>
      </div>
    </section>
  );
}
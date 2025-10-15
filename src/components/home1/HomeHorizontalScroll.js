// /components/HorizontalScroll.js

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import dynamic from 'next/dynamic';

gsap.registerPlugin(ScrollTrigger);

export default function HomeHorizontalScroll() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    const panels = gsap.utils.toArray('.panel');

    const totalPanels = panels.length;
    const panelWidth = scrollEl.scrollWidth / totalPanels;

    let ctx = gsap.context(() => {
      gsap.to(panels, {
        xPercent: -100 * (totalPanels - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: scrollEl,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          end: () => `+=${panelWidth * totalPanels}`,
        },
      });
    }, scrollEl); // context to safely scope selectors

    return () => ctx.revert(); // kills ScrollTrigger and animations scoped to this component
  }, []);

  return (
    <div className="horizontal-scroll py-5" ref={scrollRef} style={{ overflow: 'hidden' }}>
      <div style={{ display: 'flex', width: '300vw' }}>
        <div className="panel d-flex align-items-center" style={{ width: 'calc(100vw - 5%)', height: '100vh' }}>
          <div className="hs-cont-1 container mx-3 px-5 py-5 rounded-5 d-flex align-items-end" style={{backgroundColor:'#8088D1', minHeight:'calc(100vh - 150px)'}}>
              <h2 className="mt-5 text-white ms-auto" style={{maxWidth:'600px'}}>Sample 2 lines paragraph in the horizontal slide section</h2>
          </div>
        </div>
        <div className="panel d-flex align-items-center" style={{ width: 'calc(100vw - 5%)', height: '100vh' }}>
          <div className="hs-cont-2 container mx-3 px-5 py-5 rounded-5 d-flex align-items-end" style={{backgroundColor:'#268CD6', minHeight:'calc(100vh - 150px)'}}>
              <h2 className="mt-5 text-white ms-auto" style={{maxWidth:'600px'}}>Sample 2 lines paragraph in the horizontal slide section</h2>
          </div>
        </div>
        <div className="panel d-flex align-items-center" style={{ width: 'calc(100vw - 5%)', height: '100vh' }}>
          <div className="hs-cont-3 container mx-3 px-5 py-5 rounded-5 d-flex align-items-end" style={{backgroundColor:'#204A7D', minHeight:'calc(100vh - 150px)'}}>
              <h2 className="mt-5 text-white ms-auto" style={{maxWidth:'600px'}}>Sample 2 lines paragraph in the horizontal slide section</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

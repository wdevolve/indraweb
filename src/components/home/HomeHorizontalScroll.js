import { use, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
// import { useAnimations } from "@/utils/animations";

gsap.registerPlugin(ScrollTrigger);

export default function ProductsHorizontalScroll() {
  // useAnimations();
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    const containerEl = containerRef.current;
    if (!scrollEl || !containerEl) return;

    const panels = gsap.utils.toArray('.panel');
    const totalPanels = panels.length;

    // Set container width dynamically
    containerEl.style.width = `${totalPanels * 100}vw`;

    let ctx = gsap.context(() => {
      gsap.to(panels, {
        xPercent: -100 * (totalPanels - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: scrollEl,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          snap: 1 / (totalPanels - 1), // Snap to each panel
          end: () => `+=${scrollEl.offsetWidth * (totalPanels - 1)}`,
        },
      });
    }, scrollEl);

    return () => ctx.revert();
  }, []);

  return (
    <div
      className="horizontal-scroll py-5"
      ref={scrollRef}
      style={{ overflow: 'hidden' }}
    >
      <div ref={containerRef} style={{ display: 'flex' }}>
        <div className="panel d-flex align-items-center" style={{ width: '100vw', height: '100vh' }}>
          <div
            className="hs-cont-1 container mx-3 px-5 py-5 rounded-5 d-flex align-items-end"
            style={{ backgroundColor: '#8088D1', minHeight: 'calc(100vh - 150px)' }}
          >
            <h2 className="mt-5 text-white ms-auto" style={{ maxWidth: '600px' }}>
              Sample 2 lines paragraph in the horizontal slide section
            </h2>
          </div>
        </div>
        <div className="panel d-flex align-items-center" style={{ width: '100vw', height: '100vh' }}>
          <div
            className="hs-cont-2 container mx-3 px-5 py-5 rounded-5 d-flex align-items-end"
            style={{ backgroundColor: '#268CD6', minHeight: 'calc(100vh - 150px)' }}
          >
            <h2 className="mt-5 text-white ms-auto" style={{ maxWidth: '600px' }}>
              Sample 2 lines paragraph in the horizontal slide section
            </h2>
          </div>
        </div>
        <div className="panel d-flex align-items-center" style={{ width: '100vw', height: '100vh' }}>
          <div
            className="hs-cont-3 container mx-3 px-5 py-5 rounded-5 d-flex align-items-end"
            style={{ backgroundColor: '#204A7D', minHeight: 'calc(100vh - 150px)' }}
          >
            <h2 className="mt-5 text-white ms-auto" style={{ maxWidth: '600px' }}>
              Sample 2 lines paragraph in the horizontal slide section
            </h2>
          </div>
        </div>
        <div className="panel d-flex align-items-center" style={{ width: '100vw', height: '100vh' }}>
          <div
            className="hs-cont-4 container mx-3 px-5 py-5 rounded-5 d-flex align-items-end"
            style={{ backgroundColor: '#AA4455', minHeight: 'calc(100vh - 150px)' }}
          >
            <h2 className="mt-5 text-white ms-auto" style={{ maxWidth: '600px' }}>
              Sample 2 lines paragraph in the horizontal slide section
            </h2>
          </div>
        </div>
        <div className="panel d-flex align-items-center" style={{ width: '100vw', height: '100vh' }}>
          <div
            className="hs-cont-4 container mx-3 px-5 py-5 rounded-5 d-flex align-items-end"
            style={{ backgroundColor: '#AA4455', minHeight: 'calc(100vh - 150px)' }}
          >
            <h2 className="mt-5 text-white ms-auto" style={{ maxWidth: '600px' }}>
              Sample 2 lines paragraph in the horizontal slide section
            </h2>
          </div>
        </div>
        <div className="panel d-flex align-items-center" style={{ width: '100vw', height: '100vh' }}>
          <div
            className="hs-cont-4 container mx-3 px-5 py-5 rounded-5 d-flex align-items-end"
            style={{ backgroundColor: '#AA4455', minHeight: 'calc(100vh - 150px)' }}
          >
            <h2 className="mt-5 text-white ms-auto" style={{ maxWidth: '600px' }}>
              Sample 2 lines paragraph in the horizontal slide section
            </h2>
          </div>
        </div>                
      </div>
    </div>
  );
}

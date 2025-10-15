import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";
import ProductsFeatures from './ProductsFeatures'

gsap.registerPlugin(ScrollTrigger);

export default function ProductsHorizontalScroll() {
  // useAnimations();
  const scrollRef = useRef(null);      // viewport element (pin area)
  const containerRef = useRef(null);   // the flex container that holds panels

  useEffect(() => {
    const scrollEl = scrollRef.current;
    const containerEl = containerRef.current;
    if (!scrollEl || !containerEl) return;

    // select panels scoped to container
    const panels = gsap.utils.toArray(".panel", containerEl);
    const totalPanels = panels.length;
    if (totalPanels < 1) return;

    // helper to apply sizes based on current viewport width
    const applySizes = () => {
      const vw = scrollEl.clientWidth; // actual viewport width for this pinned area
      panels.forEach((p) => {
        p.style.width = `${vw}px`;
        p.style.flexShrink = "0";
      });
      containerEl.style.width = `${vw * totalPanels}px`;
    };

    let ctx; // will hold gsap context so we can revert on resize/unmount

    const initAnimation = () => {
      // ensure sizes are correct before creating animation
      applySizes();

      // total horizontal scroll distance (in px)
      const totalScroll = containerEl.scrollWidth - scrollEl.clientWidth;

      // create scoped context and ScrollTrigger animation
      ctx = gsap.context(() => {
        gsap.to(containerEl, {
          x: () => `-${totalScroll}px`,
          ease: "none",
          scrollTrigger: {
            trigger: scrollEl,
            start: "top top",
            end: () => `+=${totalScroll}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            // snap: fraction so it snaps to panels (works with any panel count)
            snap: 1 / Math.max(1, totalPanels - 1),
          },
        });
      }, scrollEl);
    };

    initAnimation();

    // Recalculate on resize using ResizeObserver so panel widths stay exact
    const ro = new ResizeObserver(() => {
      if (ctx) ctx.revert(); // remove previous animation/ScrollTrigger
      // re-init sizes + animation
      initAnimation();
      ScrollTrigger.refresh();
    });
    ro.observe(scrollEl);

    // cleanup
    return () => {
      ro.disconnect();
      if (ctx) ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (

<>
<section style={{ PaddingTop:'0px' }} className="bg-grad-gray-blue">
  
            


      <div
        className="horizontal-scroll pt-5 pb-5"
        ref={scrollRef}
        style={{ overflow: "hidden" }}
      >


<div className="container heading-area mt-5" style={{height:'auto ! important', minHeight:'auto ! important', maxHeight:'auto'}}>
              <div className="row" >
              <div className="col">
                <h2 className="mb-3 fs-1 lead fw-normal border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                  Dynamic Product Slide</h2>
                <p className="fs-4 text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            </div>



        <div ref={containerRef} style={{ display: "flex" }}>
          {/* Example panels — add as many as you want */}
          <div className="panel d-flex align-items-top mt-4">
            <div className="hs-cont-1 container-fluid" style={{ minHeight:'auto' }}>
  
              <div className="container">
                                <div className="row">
                                  <div className="col-md-6 pe-md-5 anim-zoom">
                                    <Image
                                      src={`/images/products-bg.jpg`}
                                      alt="Media coverage"
                                      width={0}
                                      height={0}
                                      className="media-slide-image rounded-3"
                                      style={{width:'100%',height:'350px',objectFit:'cover'}}
                                    />
                                  </div>                                  
                                  <div className="col-md-6 ps-md-5 anim-fade-right">
                                    <h3 className="lead fw-bold fs-5 border-bottom border-secondary pb-3 mb-3">ElectroX Nano</h3>
                                       <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                       <button className="btn  rounded-5 border-secondary px-3 py-2 mt-2 float-end" data-bs-toggle="modal" data-bs-target="#productOne">Key Features</button>
                                  </div>
                                </div>
                            </div>
  
            </div>
          </div>
  
          <div className="panel d-flex align-items-top mt-4">
            <div className="hs-cont-2 container-fluid" style={{ minHeight:'auto' }}>
  
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 pe-md-5 anim-zoom anim-zoom">
                        <Image
                          src={`/images/industries-bg.jpg`}
                          alt="Media coverage"
                          width={0}
                          height={0}
                          className="media-slide-image rounded-3"
                          style={{width:'100%',height:'350px',objectFit:'cover'}}
                        />
                      </div>                      
                      <div className="col-md-6 ps-md-5 anim-fade-right anim-fade-right">
                        <h3 className="lead fw-bold fs-5 border-bottom border-secondary pb-3 mb-3">ElectroX S01</h3>
                          <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                          <button className="btn  rounded-5 border-secondary px-3 py-2 mt-2 float-end" data-bs-toggle="modal" data-bs-target="#productOne">Key Features</button>

                      </div>
                    </div>
                </div>
  
            </div>
          </div>
  
          {/* add more panels — no manual width changes required */}
          <div className="panel d-flex align-items-top mt-4">
            <div className="hs-cont-3 container-fluid" style={{ minHeight:'auto' }}>
  
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 pe-md-5 anim-zoom anim-zoom">
                        <Image
                          src={`/images/technology-bg.jpg`}
                          alt="Media coverage"
                          width={0}
                          height={0}
                          className="media-slide-image rounded-3"
                          style={{width:'100%',height:'350px',objectFit:'cover'}}
                        />
                      </div>                      
                      <div className="col-md-6 ps-md-5 anim-fade-right anim-fade-right">
                        <h3 className="lead fw-bold fs-5 border-bottom border-secondary pb-3 mb-3">ElectroX S02</h3>
                          <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                       <button className="btn  rounded-5 border-secondary px-3 py-2 mt-2 float-end" data-bs-toggle="modal" data-bs-target="#productOne">Key Features</button>
                      </div>
                    </div>
                </div>
  
            </div>
          </div>
  
          <div className="panel d-flex align-items-top mt-4">
            <div className="hs-cont-4 container-fluid" style={{ minHeight:'auto' }}>
  
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 pe-md-5 anim-zoom anim-zoom">
                        <Image
                          src={`/images/projects-bg.jpg`}
                          alt="Media coverage"
                          width={0}
                          height={0}
                          className="media-slide-image rounded-3"
                          style={{width:'100%',height:'350px',objectFit:'cover'}}
                        />
                      </div>                      
                      <div className="col-md-6 ps-md-5 anim-fade-right anim-fade-right">
                        <h3 className="lead fw-bold fs-5 border-bottom border-secondary pb-3 mb-3">ElectroX L01</h3>
                         <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                       <button className="btn  rounded-5 border-secondary px-3 py-2 mt-2 float-end" data-bs-toggle="modal" data-bs-target="#productOne">Key Features</button>
                      </div>
                    </div>
                </div>
  
            </div>
          </div>
  
          <div className="panel d-flex align-items-top mt-4">
            <div className="hs-cont-5 container-fluid" style={{ minHeight:'auto' }}>
  
  
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 pe-md-5 anim-zoom anim-zoom">
                        <Image
                          src={`/images/products-bg.jpg`}
                          alt="Media coverage"
                          width={0}
                          height={0}
                          className="media-slide-image rounded-3"
                          style={{width:'100%',height:'350px',objectFit:'cover'}}
                        />
                      </div>                      
                      <div className="col-md-6 ps-md-5 anim-fade-right anim-fade-right">
                        <h3 className="lead fw-bold fs-5 border-bottom border-secondary pb-3 mb-3">ElectroX L02</h3>
                          <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                       <button className="btn  rounded-5 border-secondary px-3 py-2 mt-2 float-end" data-bs-toggle="modal" data-bs-target="#productOne">Key Features</button>
                      </div>
                    </div>
                </div>
  
            </div>
          </div>
  
          <div className="panel d-flex align-items-top mt-4">
            <div className="hs-cont-6 container-fluid" style={{ minHeight:'auto' }}>
  
  
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6 pe-md-5 anim-zoom anim-zoom">
                        <Image
                          src={`/images/industries-bg.jpg`}
                          alt="Media coverage"
                          width={0}
                          height={0}
                          className="media-slide-image rounded-3"
                          style={{width:'100%',height:'350px',objectFit:'cover'}}
                        />
                      </div>
                      <div className="col-md-6 ps-md-5 anim-fade-right anim-fade-right">
                        <h3 className="lead fw-bold fs-5 border-bottom border-secondary pb-3 mb-3">PhloX</h3>
                           <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                       <button className="btn  rounded-5 border-secondary px-3 py-2 mt-2 float-end" data-bs-toggle="modal" data-bs-target="#productOne">Key Features</button>
                      </div>
                    </div>
                </div>
  
            </div>
          </div>
        </div>
      </div>
</section>




<div className="modal fade" id="productOne" tabindex="-1" aria-labelledby="productOneLabel" aria-hidden="true">
  <div className="modal-dialog modal-fullscreen" style={{maxHeight:'calc(100vh - 60px)'}}>
    <div className="modal-content container rounded-4" style={{margin:'30px auto'}}>
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="productOneLabel">Key Features</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <ProductsFeatures/>
      </div>
     </div>
  </div>
</div>
</>    
  );
}

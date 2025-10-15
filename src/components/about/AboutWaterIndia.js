import { useState, useEffect } from 'react';
import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";

export default function AboutWaterIndia() {
  // useAnimations();

  return (
    <>
    
    <section className="container-fluid px-0" style={{background:'#e5eef0', zIndex:9,position:'relative'}}>
    
        <div className='container'>
    
      <div className='row section mx-auto' style={{maxWidth:'1000px'}}>
                <div className='water-data col-md-6 px-0 py-5 text-grad display-3 text-center fw-bold  only-desk' style={{fontSize:'120px'}}>4<br/>Billion</div>

        <div className='col-md-6 sections-container'>
         <div className='section1 sections'>
            <div className="p-0">
              <p className="only-mob lead fs-3 text-grad">4 Billion</p>
              <p className="card-text lead fs-3 fw-medium text-secondary pb-3 mb-5">people, almost two-thirds of the world’s population, experience severe water scarcity.</p><p className="lead fs-5 text-secondary">What started as a simple thought with Indra, has now transformed into a powerful movement to secure the fundamental element for life - WATER.</p>
            </div>
          </div>
          <div className='section2 sections' style={{minHeight:'calc(100vh + 60px)'}}>
            <div className="p-0">
            <p className="only-mob lead fs-3 text-grad">$260 Billion</p>
            <p className="card-text lead fs-3 fw-medium text-secondary pb-3 mb-5">is lost annually to poor water and wastewater management across the globe.</p><p className="lead fs-5 text-secondary">We help industries save water, cut carbon, and reduce costs; shifting wastewater treatment from the COO’s desk to the CFO’s.</p>
                        </div>
          </div>
        </div>
      </div>
      </div>
    
    </section>
    
    </>
  );
}

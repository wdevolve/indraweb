import React from 'react';
import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";

export default function ProjCaseStodyDownload() {
  // useAnimations();
  return (
    <>
<section className="pb-5 bg-grad-blue-gray">
      <div className="container">
                    <div className="row mb-5 g-5">
              <div className="col-md-6 anim-fade-left">
               <img src="/images/case-studies.webp" className="rounded mx-auto d-block w-100" alt="..."></img>
              </div>
              <div className="col-md-6 d-flex align-items-center anim-fade-right">
                 <div>
                   <h2 className="mx-auto mb-3 fs-1 fw-normal lead" style={{maxWidth:'100%'}}>
                                   Download <span className="text-grad">Case Studies</span> of Indra’s water Treatment projects</h2>
                    <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <button className="btn btn-light rounded-5 border-secondary px-3 py-2 mt-3">Download Now</button>
                 </div></div>
            </div>
        </div> 


    </section>
  

</>
  );
}

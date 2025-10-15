import React from 'react';
import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";
import Link from "next/link";

export default function ProjCaseStudyDownload() {
  // useAnimations();
  return (
    <>
<section className="pt-5 pb-5 bg-transparent">
      <div className="container">
                    <div className="row g-5">
              <div className="col-md-6 anim-fade-left">
               <img src="/images/case-studies.avif" className="rounded mx-auto d-block w-100" alt="..."></img>
              </div>
              <div className="col-md-6 d-flex align-items-center anim-fade-right">
                 <div className="mb-5 pb-5">
                   <h2 className="mx-auto mb-3 fs-1 fw-normal lead" style={{maxWidth:'100%'}}>
                                   Download <span className="text-grad">Case Studies</span> of Indra’s water Treatment projects</h2>
                    <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <button className="btn btn-light rounded-5 border-secondary px-3 py-2 mt-3">Download Now</button>
                 </div></div>
            </div>
        </div> 


    </section>
  

    <section className=" pt-5 pb-5 bg-grad" style={{marginTop:'-100px', zIndex:'1'}}>

<div
  className="container anim-fade-left"
>
      <h2 className="mb-3 fs-1 fw-normal lead border-bottom border-light pb-3 text-light">
        Have any water challenge?</h2>
      <div className="row">
        <div className="col">
          <p className="fs-4 text-light">Let's solve it together</p>
        </div>
          <div className="col-md-6">
            <Link href="/contact"><button className="btn btn-light rounded-5 border-secondary px-3 py-2 mt-3 float-end">Let's Connect</button></Link>
            </div>
      </div>
</div>
</section>



</>
  );
}

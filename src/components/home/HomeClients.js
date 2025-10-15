import React from 'react';
import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";

export default function HomeClients() {
// useAnimations();
const logos = [
  'logo1.png',
  'logo2.png',
  'logo3.png',
  'logo4.png',
  'logo5.png',
  'logo6.png',
  'logo7.png',
  'logo8.png',
  'logo9.png',
  'logo10.png',
  'logo11.png',
  'logo12.png',
  'logo13.png',
  'logo14.png',
  'logo15.png',
  'logo16.png',
];


  return (
    <section className="container-fluid px-0 pb-5 bg-grad-gray-blue py-5" style={{zIndex:9,position:'relative'}}>
      <div className="container my-0 ">
        {/* Sticky Main Heading */}
        <div
          className="py-3"
        >
          {/* <h1 className="display-4 fw-bold">Clients and Partners</h1> */}

          <div className="row">
         <div
          className="col-12 py-3 mx-auto"
               >
          <h1 className="fs-1 text-dark fw-normal border-bottom border-dark pb-4">We <span className="text-grad">Work</span> With</h1>
               </div>
       </div>


        </div>
       
      </div>


       <div className="container">
              <div className="row">


<div className="col-md-12 logo-carousel-wrapper overflow-hidden py-4">
      <div className="logo-carousel-track d-flex anim-zoom">
        {[...logos, ...logos].map((logo, index) => (
          <div className="logo-item px-4 flex-shrink-0" key={index}>
            <Image height={0}
                width={0} src={`/images/clients/${logo}`} alt={`Logo ${index}`} className="Image-fluid anim-zoom" />
          </div>
        ))}
      </div>
    </div>


              </div>
            </div>

    </section>
  );
}

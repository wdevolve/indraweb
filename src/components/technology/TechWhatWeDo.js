import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";

export default function TechWhatWeDo() {  
  // useAnimations();
  return (
    <section
      className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 anim-fade-up">
            <p className="lead fs-4 fw-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
            <button className="btn btn-outline-secondary mt-4">Click Button</button>
          </div>
          <div className="col-md-6 anim-fade-up">
            <p className="lead fs-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
          </div>          
        </div>
      </div>
    </section>
  );
}
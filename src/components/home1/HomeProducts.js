import React from 'react';
import Image from 'next/image';

export default function HomeProducts() {


  return (
  
<section className="container-fluid px-0 bg-light">
    <div className='container '>

       <div className="row">
         <div
          className="col-12 text-center py-3 mx-auto"
               >
          <h1 className="display-1 fw-medium mx-auto" style={{maxWidth:'750px'}}>Tailored <span className="text-grad">solutions</span> for each project.</h1>
               </div>
       </div>


  <div className='row section'>
    <div className='col-md-5 sections-container'>
     <div className='section1 sections'>
        <div className="p-0 mt-5 pe-md-5 me-md-5">
                      <h5 className="card-title text-primary lead display-2 text-grad lead fw-medium mb-3">Agile process</h5>
                      <p className="card-text lead fs-4 fw-medium text-secondary">In-house, self-designed testing equipment with integrated measurement technology.</p>
                    </div>
      </div>
      <div className='section2 sections'>
        <div className="p-0 mt-5">
                      <h5 className="card-title text-primary display-2 text-grad lead fw-medium mb-3">Rapid Prototyping</h5>
                      <p className="card-text lead fs-4 fw-medium text-secondary">In-house, self-designed testing equipment with integrated measurement technology.</p>
                    </div>
      </div>
      <div className='section3 sections'>
        <div className="p-0 mt-5 pe-md-5 me-md-5">
                      <h5 className="card-title text-primary lead display-2 text-grad lead fw-medium mb-3">Reliable testing</h5>
                      <p className="card-text lead fs-4 fw-medium text-secondary">In-house, self-designed testing equipment with integrated measurement technology.</p>
                    </div>
      </div>
    </div>
    <Image height={0}
                width={0} alt="Image" className='image col-md-7' src="/images/product1.png"/>
  </div>
  </div>





</section>







  );
}
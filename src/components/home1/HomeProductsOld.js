import React from 'react';
import Image from 'next/image';

export default function HomeProductsOld() {


  return (
    <div className="container-fluid bg-light pb-5 my-0 px-0">
      <div
        className="col-5 text-center py-3 mx-auto"
      >
        <h1 className="display-1 fw-medium">Tailored <span className="text-grad">solutions</span> for each project.</h1>
      </div>

      <div className="container my-5">
        <div className="row">
          <div className="col-md-5">
            <div className="row">
                <div className="col-md-12 mb-4 d-flex align-items-center" style={{minHeight:'calc(100vh - 100px)'}}>
                    <div className="p-0 mt-5 pe-md-5 me-md-5">
                      <h5 className="card-title text-primary lead display-2 text-grad lead fw-medium mb-3">Agile process</h5>
                      <p className="card-text lead fs-4 fw-medium text-secondary">In-house, self-designed testing equipment with integrated measurement technology.</p>
                    </div>
                  </div>
            </div>
          </div>
          <div className="col-md-7  d-flex align-items-center">
            <div className="position-sticky pe-md-5 py-md-5 d-flex align-items-center mx-auto" style={{ top: '0px', zIndex: 1010 }}>
              <Image height={0}
                width={0} alt="Image" className="mx-auto" style={{maxHeight:'calc(60vh - 0px)'}} src="/images/product1.webp"/>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          
          <div className="col-md-5">
            <div className="row">
                <div className="col-md-12 mb-4 d-flex align-items-center" style={{minHeight:'calc(100vh - 100px)'}}>
                    <div className="p-0 mt-5">
                      <h5 className="card-title text-primary display-2 text-grad lead fw-medium mb-3">Rapid Prototyping</h5>
                      <p className="card-text lead fs-4 fw-medium text-secondary">In-house, self-designed testing equipment with integrated measurement technology.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-md-7 d-flex align-items-center">
            <div className="position-sticky pe-md-5 py-md-5 d-flex align-items-center mx-auto" style={{ top: '200px', zIndex: 1010 }}>
                            <Image height={0}
                width={0} alt="Image" className="mx-auto" style={{maxHeight:'calc(60vh - 0px)'}}  src="/images/product2.webp"/>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row">
          
          <div className="col-md-5">
            <div className="row">
                <div className="col-md-12 mb-4 d-flex align-items-center" style={{minHeight:'calc(100vh - 100px)'}}>
                    <div className="p-0 mt-5 pe-md-5 me-md-5">
                      <h5 className="card-title text-primary lead display-2 text-grad lead fw-medium mb-3">Reliable testing</h5>
                      <p className="card-text lead fs-4 fw-medium text-secondary">In-house, self-designed testing equipment with integrated measurement technology.</p>
                    </div>
                  </div>
            </div>
          </div>

          <div className="col-md-7 d-flex align-items-center">
            <div className="position-sticky pe-md-5 py-md-5 d-flex align-items-center mx-auto" style={{ top: '250px', zIndex: 1010 }}>
              <Image height={0}
                width={0} alt="Image" className="mx-auto" style={{maxHeight:'calc(60vh - 0px)'}}  src="/images/product3.webp"/>
            </div>
          </div>


        </div>
      </div>



    </div>
  );
}
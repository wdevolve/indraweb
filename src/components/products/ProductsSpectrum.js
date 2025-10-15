import { useEffect } from 'react';
import Link from 'next/link';
// import { useAnimations } from "@/utils/animations";
import Image from 'next/image';

export default function ProductsEvolution() {

// useAnimations();
  return (
    <>
    

      <section className="pt-5 pb-0 bg-grad-blue-gray">
        <div className="container"  style={{zIndex:'-1', position:'relative'}}>
      
        <div className="row mt-3">
          <div className="col-md-7 pe-md-5 anim-fade-left">

                      <div className="row">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fs-1 fw-normal lead border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Indra <span className="text-grad">Spectrum</span></h2>
              <p className="fs-4 text-secondary">Water made Smarter</p>
            </div>
          </div>

            <p className="pe-md-5 lead fs-5">Indra Spectrum empowers our treatment plants with real-time monitoring of treatment volumes, water quality, and process performance.</p>
            <p className="pe-md-5 lead fs-5">Powered by IoT-enabled analytics, it delivers a data preview for live tracking, actionable insights, and seamless remote control, making wastewater treatment smarter, faster, and more reliable.</p>


            <section className="py-5">


    <div className="row row-cols-1 row-cols-md-4 g-5 text-center">
        <div className="col">
          <div className="border-0 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center">
            
            {/* Top Image */}
            <img
              src={`/images/icons/industry-challenges.png`}
              alt="Benefit Icon"
              className="mb-3"
              style={{
                width: '70px',
                height: '70px',
                objectFit: 'contain',
              }}
            />

            {/* Bottom Description */}
            <p className="fs-5 text-dark mb-0">Lorem ipsum lorem ipsum.</p>
          </div>
        </div>
                <div className="col">
          <div className="border-0 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center">
            
            {/* Top Image */}
            <img
              src={`/images/icons/industry-challenges.png`}
              alt="Benefit Icon"
              className="mb-3"
              style={{
                width: '70px',
                height: '70px',
                objectFit: 'contain',
              }}
            />

            {/* Bottom Description */}
            <p className="fs-5 text-dark mb-0">Lorem ipsum lorem ipsum.</p>
          </div>
        </div>
                <div className="col">
          <div className="border-0 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center">
            
            {/* Top Image */}
            <img
              src={`/images/icons/industry-challenges.png`}
              alt="Benefit Icon"
              className="mb-3"
              style={{
                width: '70px',
                height: '70px',
                objectFit: 'contain',
              }}
            />

            {/* Bottom Description */}
            <p className="fs-5 text-dark mb-0">Lorem ipsum lorem ipsum.</p>
          </div>
        </div>
                <div className="col">
          <div className="border-0 rounded-4 h-100 d-flex flex-column align-items-center justify-content-center">
            
            {/* Top Image */}
            <img
              src={`/images/icons/industry-challenges.png`}
              alt="Benefit Icon"
              className="mb-3"
              style={{
                width: '70px',
                height: '70px',
                objectFit: 'contain',
              }}
            />

            {/* Bottom Description */}
            <p className="fs-5 text-dark mb-0">Lorem ipsum lorem ipsum.</p>
          </div>
        </div>
    </div>
</section>

          </div>
          <div className="col-md-5 ps-md-5 anim-fade-right">

            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/products/spectrum-1.jpg`} alt={`Water Treatment`} className="Image-fluid mb- rounded-5 shadow" />

            <Image height={0} width={0} style={{ width:'75%', height:'auto', marginTop:'-175px', zIndex:'999', position:'relative' }} src={`/images/products/spectrum-2.jpg`} alt={`Water Treatment`} className="Image-fluid mb-3 rounded-5 shadow float-end" />
            
            

          </div>
        </div>

</div>
</section>       



    </>
  );
}

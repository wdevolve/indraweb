import { useEffect } from 'react';
import Link from 'next/link';
// import { useAnimations } from "@/utils/animations";
import Image from 'next/image';

export default function ProductsEvolution() {

// useAnimations();
  return (
    <>
    

      <section className="pt-5 pb-5 bg-grad-gray-blue">
        <div className="container"  style={{zIndex:'-1', position:'relative'}}>

        <div className="row mt-3">
          <div className="col-md-7 pe-md-5 anim-fade-left">

          
          <div className="row">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fs-1 fw-normal lead border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Inspired by <span className="text-grad">Automotive Efficiency</span></h2>
              <p className="fs-4 text-secondary">Designed turnkey. Delivered as a product.</p>
            </div>
          </div>

            <p className="pe-md-5 lead fs-5">ElectroX translates the efficiency of automotive manufacturing into water treatment.</p>
            <p className="pe-md-5 lead fs-5">It means industries get faster installations, bear lower costs, and move closer to net water neutrality.</p>

          </div>
          <div className="col-md-5 ps-md-5 anim-fade-right">

            <div className="row py-4">
              <div className="col w-25">
                  <video
                    className="d-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{width:'135px'}}
                  >
                    <source src="/videos/water-bubble-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                                    <span className="feature feature-two float-start pe-0 pe-md-3" type="button"></span>

              </div>

              <div className="col-auto ps-md-5 w-75 d-flex align-items-center">
                <div className="d-flex w-100 align-items-center">
                  <div className="w-100">
                    <h3 className="d-block lead fw-medium fs-4">Standard modules </h3>
                  </div>
                </div>
              </div>
            </div>


            <div className="row py-4">
              <div className="col-auto w-25">
                  <video
                    className="d-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{width:'135px'}}
                  >
                    <source src="/videos/water-bubble-2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                                    <span className="feature feature-two float-start pe-0 pe-md-3" type="button"></span>

              </div>

              <div className="col-auto ps-md-5 w-75 d-flex align-items-center">
                <div className="d-flex w-100 align-items-center">
                  <div className="w-100">
                    <h3 className="lead fw-medium fs-4">Plug & Play Skids</h3>
                  </div>
                </div>
              </div>
            </div>


                        <div className="row py-4">
              <div className="col-auto w-25">
                  <video
                    className="d-none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{width:'135px'}}
                  >
                    <source src="/videos/water-bubble-3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                <span className="feature feature-two float-start pe-0 pe-md-3" type="button"></span>

              </div>
              <div className="col-auto ps-md-5 w-75 d-flex align-items-center">
                <div className="w-100  d-flex align-items-center">
                  <div className="w-100 d-flex align-items-center">
                    <h3 className="lead fw-medium fs-4">Scalable design </h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

</div>
</section>       



    </>
  );
}

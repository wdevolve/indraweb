import { useState, useEffect } from 'react';
import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";

export default function AboutMediaCoverage() {
  // useAnimations();

  return (
    <>
{/* <section className="bg-grad-gray-blue pb-5">

        <div
          className="container mx-auto rounded-5  inner-water-bg"
        >

                    <div className="row mb-5">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fw-normal fs-1 lead border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Media Coverage</h2>
              <p className="fs-4 text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                  <div className="col anim-zoom">
                    <div className="border-grad p-1 rounded-3">
                      <div className="media-container rounded-3 shadow-sm">
                        <Image
                          src={`/images/media-coverage-1.webp`}
                          alt="Media coverage"
                          width={0}
                          height={0}
                          className="media-slide-image rounded-3"
                        />
                        <div className="media-overlay rounded-bottom-3 p-4">
                          <h3 className="fs-5 fw-medium lead text-shadow pb-1 ind-slide-h3">
                            Global Freshwater Challenge
                          </h3>
                          <hr
                            className="border-secondary border-1 my-2 ind-slide-hr"
                            style={{ zIndex: 999, position: 'relative', opacity: 1 }}
                          />
                          <p>Winners - Global Freshwater Challenge - World Economic Forum - Davos 2023</p>
                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col anim-zoom">
                    <div className="border-grad p-1 rounded-3">
                      <div className="media-container rounded-3 shadow-sm">
                        <Image
                          src={`/images/media-coverage-2.webp`}
                          alt="Media coverage"
                          width={0}
                          height={0}
                          className="media-slide-image rounded-3"
                        />
                        <div className="media-overlay rounded-bottom-3 p-4">
                          <h3 className="fs-5 fw-medium lead text-shadow pb-1 ind-slide-h3">
                            Global Water Intelligence
                          </h3>
                          <hr
                            className="border-secondary border-1 my-2 ind-slide-hr"
                            style={{ zIndex: 999, position: 'relative', opacity: 1 }}
                          />
                          <p>Shortlisted as Breakthrough Water Technology Company of the Year 2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col anim-zoom">
                    <div className="border-grad p-1 rounded-3">
                      <div className="media-container rounded-3 shadow-sm">
                        <Image
                          src={`/images/media-coverage-3.webp`}
                          alt="Media coverage"
                          width={0}
                          height={0}
                          className="media-slide-image rounded-3"
                        />
                        <div className="media-overlay p-4 rounded-bottom-3">
                          <h3 className="fs-5 fw-medium lead text-shadow pb-1 ind-slide-h3">
                            Global Cleantech
                          </h3>
                          <hr
                            className="border-secondary border-1 my-2 ind-slide-hr"
                            style={{ zIndex: 999, position: 'relative', opacity: 1 }}
                          />
                          <p>Indra named to 2025 Global Cleantech top 100 list.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

        </div>
      </section> */}
      


  <section className="py-5 bg-grad-blue-gray">
        <div className="container"  style={{zIndex:'-1', position:'relative'}}>
      
        <div className="row mt-3">
          <div className="col-md-12 pe-md-5 anim-fade-left">

                      <div className="row">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fs-1 fw-normal lead border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Indra <span className="text-grad">Featured On</span></h2>
              <p className="fs-4 text-secondary">Lorem ipsum lorem ipsum.</p>
            </div>
          </div>

          
          </div>
          <div className="col-md-12 ps-md-5 d-flex align-items-center">


          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-4">
            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/others/featured-1.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
            </div>

            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/others/featured-2.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
            </div>

            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/others/featured-3.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
            </div>


            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/others/featured-4.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
            </div>


            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/others/featured-5.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
            </div>


            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/others/featured-6.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
            </div>


            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/others/featured-7.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
            </div>

            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/others/featured-8.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
          </div>     

            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/others/featured-9.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
          </div>
            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/others/featured-10.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
          </div>
            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/others/featured-11.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
          </div>
                  </div>
          </div>
        </div>

</div>
</section>       





      
      <section className="py-5 bg-grad-gray-blue">
        <div className="container"  style={{zIndex:'-1', position:'relative'}}>
      
        <div className="row mt-3">
          <div className="col-md-6 pe-md-5 anim-fade-left">

                      <div className="row">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fs-1 fw-normal lead border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Indra <span className="text-grad">Supported By</span></h2>
              <p className="fs-4 text-secondary">Water made Smarter</p>
            </div>
          </div>

            <p className="pe-md-5 lead fs-5">Indra Spectrum empowers our treatment plants with real-time monitoring of treatment volumes, water quality, and process performance.</p>
            <p className="pe-md-5 lead fs-5">Powered by IoT-enabled analytics, it delivers a data preview for live tracking, actionable insights, and seamless remote control, making wastewater treatment smarter, faster, and more reliable.</p>

          </div>
          <div className="col-md-6 ps-md-5 d-flex align-items-center">


          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/products/supported-1.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
            </div>

            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/products/supported-2.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
            </div>

            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/products/supported-3.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
            </div>


            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/products/supported-4.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
            </div>


            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/products/supported-5.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
            </div>


            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/products/supported-6.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
            </div>


            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/products/supported-7.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
            </div>

            <div className="col d-flex align-items-center">
            <Image height={0} width={0} style={{ width:'75%', height:'auto' }} src={`/images/products/supported-8.webp`} alt={`Water Treatment`} className="Image-fluid anim-zoom" />
          </div>     
        </div>
          </div>
        </div>

</div>
</section>       



    </>
  );
}

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { useAnimations } from "@/utils/animations";

export default function IndStoryNavigation() {
  // useAnimations();
  const productData = [
    { name: 'Chemical & Pharmaceutical', image: 'industry-1.webp', url: 'chemical-pharmaceutical' },
    { name: 'Textile & Dyeing', image: 'industry-2.webp', url: 'textile-dyeing' },
    { name: 'Metal & Allied Manufacturing', image: 'industry-3.webp', url: 'metal-allied-manufacturing' },
    { name: 'Sewage (STPs) & Hospitality', image: 'industry-4.webp', url: 'sewage-stps-hospitality' },
    { name: 'Cooling Tower Blowdown', image: 'industry-5.webp', url: 'cooling-tower-blowdown' },
    { name: 'Manufacturing', image: 'industry-6.webp', url: 'manufacturing' },
  ];



  return (
      <section
        className="d-flex flex-column justify-content-center align-items-center py-0 position-relative bg-grad-gray-blue"
       >
       

        <div className="container">


                    {/* <div className="row">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fs-1 fw-normal lead border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Story Navigation</h2>
              <p className="fs-4 text-secondary">Trace the journey: Wher, how and with what.</p>
            </div>
          </div> */}


        </div>

        <div className="container">

            <div className="row row-cols-1 row-cols-sm-3 row-cols-md-3 g-4 mb-5">
              {productData.map((item, index) => (
                  <div className="anim-zoom col my-4">
                    <a href={`/industry/${item.url}`}>
                      <div className="mb-2">
                        <Image
                          src={`/images/${item.image}`}
                          alt={item.name}
                          width={0}
                          height={0}
                          style={{ width:'100%', height:'100%' }}
                          className="product-slide-image"
                        />
                          <h3 className="fs-5 fw-medium lead text-white text-shadow mx-4 pb-1 ind-slide-h3">{item.name}</h3>
                          <hr className="border-light border-1 mx-4 mb-4 ind-slide-hr" style={{xIndex:'999',position:'relative',opacity:'1 ! important'}}/>
                          <div className="grid-overlay"></div>
                      </div>
                    </a>
                  </div>
              ))}
            </div>



        </div>
      </section>
  );
}

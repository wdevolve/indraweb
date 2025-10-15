import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import { useAnimations } from "@/utils/animations";

export default function IndStoryNavigation() {
  // useAnimations();
  const productData = [
    { name: 'Industry One', image: 'industry-1.webp' },
    { name: 'Industry Two', image: 'industry-2.webp' },
    { name: 'Industry Three', image: 'industry-3.webp' },
    { name: 'Industry Four', image: 'industry-4.webp' },
    { name: 'Industry Five', image: 'industry-5.webp' },
    { name: 'Industry Six', image: 'industry-6.webp' },
    { name: 'Industry Seven', image: 'industry-7.webp' },
    { name: 'Industry Eight', image: 'industry-8.webp' },
    { name: 'Industry Nine', image: 'industry-9.webp' },
    { name: 'Industry Ten', image: 'industry-10.webp' },
    { name: 'Industry Eleven', image: 'industry-11.webp' },
    { name: 'Industry Twelve', image: 'industry-12.webp' },
    { name: 'Industry Thirteen', image: 'industry-13.webp' },
    { name: 'Industry Fourteen', image: 'industry-14.webp' },
    { name: 'Industry Fifteen', image: 'industry-15.webp' },
    { name: 'Industry Sizteen', image: 'industry-16.webp' },
  ];

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigation, setNavigation] = useState({});

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setNavigation({
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      });
    }
  }, []);

  return (
      <section
        className="d-flex flex-column justify-content-center align-items-center py-0 position-relative bg-grad-gray-blue"
       >
       

        <div className="container">


                    <div className="row">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fs-1 fw-normal lead border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Story Navigation</h2>
              <p className="fs-4 text-secondary">Trace the journey: Wher, how and with what.</p>
            </div>
          </div>


        </div>

        <div className="w-100 mt-3">
                   {/* Swiper Carousel */}
             <Swiper
  modules={[Navigation]}
  spaceBetween={24}
  breakpoints={{
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 5 },
  }}
  navigation={navigation}
  onBeforeInit={(swiper) => {
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
  }}
  onSwiper={(swiper) => {
    // Necessary if buttons are after Swiper
    setTimeout(() => {
      if (swiper.params.navigation) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }
    });
  }}
>
            {productData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="anim-zoom">
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
                      <div className="slide-overlay"></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

            {/* Navigation Buttons */}

          <div className="container pt-3 swiper-nav">
            <div className="d-flex justify-content-end me-3 mb-4">
              <button ref={prevRef} className="btn border-0 shadow-none">
                <i className="bi bi-arrow-left display-5"></i>
              </button>
              <button ref={nextRef} className="btn border-0 shadow-none">
                <i className="bi bi-arrow-right display-5"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}

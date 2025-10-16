import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import { useAnimations } from "@/utils/animations";

export default function ProductsGallery() {
  // useAnimations();
  const productData = [
    { name: 'ElectroX nano', image: 'product1.webp' },
    { name: 'ElectroX S01', image: 'product2.webp' },
    { name: 'ElectroX S02', image: 'product3.webp' },
    { name: 'ElectroX L01', image: 'product4.webp' },
    { name: 'ElectroX L02', image: 'product5.webp' },
    { name: 'PhloX', image: 'product6.webp' },
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
        className="text-white d-flex flex-column justify-content-center align-items-center pb-5 position-relative bg-grad-gray-blue"
        // style={{
        //   backgroundImage: 'url("/images/bg-abstract.webp")',
        //   backgroundSize: 'contain',
        //   backgroundPosition: 'center',
        //   backgroundRepeat:'no-repeat',
        //   width: '100%',
        //   minHeight: '100vh',
        // }}
      >
        {/* Overlay */}
        {/* <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: 'rgba(225, 225, 225, 0.8)',
            zIndex: 1,
          }}
        ></div> */}

        <div className="w-100 container">
          {/* Heading */}
          <div className="mb-5">
            <div className="col-12">
              <h2 className="fs-1 lead fw-normal mb-5 text-dark border-bottom border-dark pb-4">
                Interactive Products Gallery
              </h2>

            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="d-flex justify-content-end me-3 mb-4">
            <button ref={prevRef} className="btn btn-light me-2 rounded-circle">
              <i className="bi bi-arrow-left"></i>
            </button>
            <button ref={nextRef} className="btn btn-light rounded-circle">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          {/* Swiper Carousel */}
                    <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              breakpoints={{
                320: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 4 },
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              onSlideChange={(swiper) => {
                const { activeIndex, slides, params } = swiper;
                const lastVisible = activeIndex >= slides.length - params.slidesPerView;
                const first = activeIndex === 0;

                document.querySelector('.swiper-button-prev-custom')?.classList.toggle('nav-btn-inactive', first);
                document.querySelector('.swiper-button-prev-custom')?.classList.toggle('nav-btn-active', !first);
                document.querySelector('.swiper-button-next-custom')?.classList.toggle('nav-btn-inactive', lastVisible);
                document.querySelector('.swiper-button-next-custom')?.classList.toggle('nav-btn-active', !lastVisible);
              }}
            >
            {productData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="text-center px-3">
                  <div className="mb-2 anim-zoom">
                    <Image
                      src={`/images/products/${item.image}`}
                      alt={item.name}
                      width={0}
                      height={0}
                      style={{ width:'100%', height:'100%' }}
                      className="product-slide-image"
                    />
                  </div>
                  <h6 className="mt-4 text-black">{item.name}</h6>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
  );
}

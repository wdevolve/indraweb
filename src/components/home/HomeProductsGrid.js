import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Parallax } from 'react-scroll-parallax';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// import { useAnimations } from "@/utils/animations";

export default function HomeProductsGrid() {
  // useAnimations();
  const productData = [
    { name: 'ElectroX nano', image: 'electrox-nano.webp', product:'electroxnano' },
    { name: 'ElectroX S Series', image: 'electrox-s-series.webp', product:'electroxs01' },
    // { name: 'ElectroX S02', image: 'product3.webp', product:'electroxs02' },
    { name: 'ElectroX L Series', image: 'electrox-l-series.webp', product:'electroxl01' },
    // { name: 'ElectroX L02', image: 'product5.webp', product:'electroxl02' },
    { name: 'PhloX', image: 'phlox.webp', product:'phlox' },
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
        className="bg-grad-gray-blue text-white d-flex flex-column justify-content-center align-items-center py-5 position-relative"
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
        <div
          className="position-absolute top-0 start-0"
          style={{
            // backgroundColor: 'rgba(225, 225, 225, 0.8)',
            zIndex: 1,
          }}
        ></div>

        <div style={{ zIndex: 9, marginBottom:'0px' }} className="container">
          {/* Heading */}
          <div className="">
            <div className="col-12">
              <div className="fs-1 lead fw-normal mb-5 text-dark pb-4" style={{ marginTop:'0px'}}>
              </div>
            </div>
          </div>


                    <div className="row mb-0">
            <div className="col anim-fade-left">
              <h2 className="my-3 fs-1 fw-normal text-dark lead pb-4 border-bottom border-dark" style={{maxWidth:'100%'}}>
                <span className="text-grad">Solutions</span> That Fit. <span className="text-grad">Projects</span> That Scale.
              </h2>
              <p className="fs-4 text-secondary mt-4 mb-5">Explore what INDRA solves and how we’re transforming water treatment.</p>
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
                <div className="text-center px-3 anim-zoom">
                  <Link href={`/products#${item.product}`}>
                    <div className="mb-2">
                      <Image
  src={`/images/products/${item.image}`}
  alt={item.name}
  width={0}
  height={0}
  style={{ 
    width: '100%', 
    height: '350px', 
    objectFit: 'cover' // or 'contain' depending on the desired effect
  }}
  className="product-slide-image anim-zoom p-0"
/>

                    </div>
                    <h6 className="mt-4 text-black">{item.name}</h6>
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
  );
}

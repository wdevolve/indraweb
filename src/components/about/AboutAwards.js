import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useRef, useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";


export default function AboutAwards() {
// useAnimations();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const blogs = [
    {
      title: 'Award Title One',
      excerpt: 'Award description sample threeline paragraph. Award description sample threeline paragraph. Award description sample threeline paragraph.',
      image: '/images/award1.jpg',
    },
    {
      title: 'Award Title Two',
      excerpt: 'Award description sample threeline paragraph. Award description sample threeline paragraph. Award description sample threeline paragraph.',
      image: '/images/award2.jpg',
    },
    {
      title: 'Award Title Three',
      excerpt: 'Award description sample threeline paragraph. Award description sample threeline paragraph. Award description sample threeline paragraph.',
      image: '/images/award3.jpg',
    },
    {
      title: 'Award Title Four',
      excerpt: 'Award description sample threeline paragraph. Award description sample threeline paragraph. Award description sample threeline paragraph.',
      image: '/images/award4.jpg',
    },
    {
      title: 'Award Title Five',
      excerpt: 'Award description sample threeline paragraph. Award description sample threeline paragraph. Award description sample threeline paragraph.',
      image: '/images/award1.jpg',
    },
    {
      title: 'Award Title Six',
      excerpt: 'Award description sample threeline paragraph. Award description sample threeline paragraph. Award description sample threeline paragraph.',
      image: '/images/award2.jpg',
    },
    {
      title: 'Award Title Seven',
      excerpt: 'Award description sample threeline paragraph. Award description sample threeline paragraph. Award description sample threeline paragraph.',
      image: '/images/award3.jpg',
    },
    {
      title: 'Award Title Eight',
      excerpt: 'Award description sample threeline paragraph. Award description sample threeline paragraph. Award description sample threeline paragraph.',
      image: '/images/award4.jpg',
    },
  ];

  useEffect(() => {
    // ensure Swiper navigation refs are correctly initialized
  }, []);

  return (
    <section className="py-5 bg-grad-blue-gray">
      <div className="container position-relative">
        <h2 className="fw-normal fs-1 lead ar-title-blog anim-fade-left">Awards & Recognition</h2>

        {/* Navigation Buttons */}
        <div className="d-flex justify-content-end me-3 mb-5">
          <button ref={prevRef} className="btn swiper-button-prev-custom">
            <i className="bi bi-arrow-left display-5"></i>
          </button>
          <button ref={nextRef} className="btn swiper-button-next-custom">
            <i className="bi bi-arrow-right display-5"></i>
          </button>
        </div>
                        <hr
                          className="border-secondary border-1 mb-5 ind-slide-hr"
                          style={{ zIndex: 999, position: 'relative', opacity: 1, marginTop:'-10px' }}/>
                                  {/* Blog Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
          }}
          navigation={{
            prevEl: '.swiper-button-prev-custom',
            nextEl: '.swiper-button-next-custom',
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
          {blogs.map((post, i) => (
            <SwiperSlide key={i}>
              <div className="border-grad p-1 rounded-3">
                <div className="card h-100 border-0 rounded-3 mt-0 shadow-sm anim-zoom">
                  <Image
                    src={post.image}
                    className="card-img-top img-fluid"
                    alt={`Thumbnail of ${post.title}`}
                    width={100}
                    height={250}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body bg-white rounded-bottom-3 border-0 p-4 pb-5 text-dark">
                    <h5 className="card-title fw-normal display-6 fs-3">{post.title}</h5>
                    <p className="card-text  lead fs-6 mt-3">{post.excerpt}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

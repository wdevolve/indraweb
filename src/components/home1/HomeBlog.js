import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

export default function HomeBlog() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const blogs = [
    {
      title: 'Top 10 Digital Transformation Trends in 2025',
      excerpt: 'Explore the upcoming trends shaping the digital transformation landscape in 2025, from AI integration to smart automation.',
      image: '/images/blog1.jpg',
    },
    {
      title: 'Why Cybersecurity Is a Business Priority',
      excerpt: 'Understand why securing your digital assets is more than an IT concern—it’s essential to your company’s survival.',
      image: '/images/blog2.jpg',
    },
    {
      title: 'UX Design Principles That Drive Conversions',
      excerpt: 'Discover how great UX design improves user retention and maximizes conversions across digital products.',
      image: '/images/blog3.jpg',
    },
    {
      title: 'How AI Is Changing Healthcare Forever',
      excerpt: 'A deep dive into how artificial intelligence is revolutionizing diagnostics, treatments, and patient care.',
      image: '/images/blog4.jpg',
    },
    {
      title: 'Top 10 Digital Transformation Trends in 2025',
      excerpt: 'Explore the upcoming trends shaping the digital transformation landscape in 2025, from AI integration to smart automation.',
      image: '/images/blog1.jpg',
    },
    {
      title: 'Why Cybersecurity Is a Business Priority',
      excerpt: 'Understand why securing your digital assets is more than an IT concern—it’s essential to your company’s survival.',
      image: '/images/blog2.jpg',
    },
    {
      title: 'UX Design Principles That Drive Conversions',
      excerpt: 'Discover how great UX design improves user retention and maximizes conversions across digital products.',
      image: '/images/blog3.jpg',
    },
    {
      title: 'How AI Is Changing Healthcare Forever',
      excerpt: 'A deep dive into how artificial intelligence is revolutionizing diagnostics, treatments, and patient care.',
      image: '/images/blog4.jpg',
    },
  ];

  useEffect(() => {
    // ensure Swiper navigation refs are correctly initialized
  }, []);

  return (
    <div className="py-5 bg-light border-top">
      <section className="container my-md-5 position-relative">
        <h2 className="text-primary fw-light fs-1 lead ar-title-blog">Latest Blogs</h2>

        {/* Navigation Buttons */}
        <div className="d-flex justify-content-end me-3">
          <button ref={prevRef} className="btn nav-btn-inactive me-2 rounded-circle swiper-button-prev-custom">
            <i className="bi bi-arrow-left"></i>
          </button>
          <button ref={nextRef} className="btn nav-btn-active rounded-circle swiper-button-next-custom">
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>

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
              <div className="card h-100 bg-light border-0 mt-md-5">
                <Image
                  src={post.image}
                  className="card-img-top img-fluid"
                  alt={`Thumbnail of ${post.title}`}
                  width={100}
                  height={250}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body bg-grad border-0 p-4 pb-5 text-white">
                  <h5 className="card-title fw-normal display-6 fs-3">{post.title}</h5>
                  <p className="card-text  lead fs-6 mt-3">{post.excerpt}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}

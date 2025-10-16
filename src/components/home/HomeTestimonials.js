import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';

import { useRef, useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";

export default function HomeTestimonials() {
  // useAnimations();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      // no-op
    }
  }, []);

  const testimonials = [
    {
      name: 'John Doe',
      comment: 'This service exceeded my expectations. Highly recommended!',
      rating: 5,
      image: '/images/user1.webp',
    },
    {
      name: 'Priya Sharma',
      comment: 'Amazing support and quality. Will work with them again.',
      rating: 4.5,
      image: '/images/user2.webp',
    },
    {
      name: 'Ahmed Khan',
      comment: 'Timely delivery and excellent communication. Great job!',
      rating: 4,
      image: '/images/user1.webp',
    },
    {
      name: 'Emily Chen',
      comment: 'Professional team with great attention to detail.',
      rating: 5,
      image: '/images/user2.webp',
    },
    {
      name: 'Carlos Rivera',
      comment: 'Good overall experience, but some delays in updates.',
      rating: 3.5,
      image: '/images/user1.webp',
    },
    {
      name: 'Sophie Martin',
      comment: 'Very responsive and reliable. Loved the collaboration.',
      rating: 4.5,
      image: '/images/user2.webp',
    },
    {
      name: 'John Doe',
      comment: 'This service exceeded my expectations. Highly recommended!',
      rating: 5,
      image: '/images/user1.webp',
    },
    {
      name: 'Priya Sharma',
      comment: 'Amazing support and quality. Will work with them again.',
      rating: 4.5,
      image: '/images/user2.webp',
    },
    {
      name: 'Ahmed Khan',
      comment: 'Timely delivery and excellent communication. Great job!',
      rating: 4,
      image: '/images/user1.webp',
    },
    {
      name: 'Emily Chen',
      comment: 'Professional team with great attention to detail.',
      rating: 5,
      image: '/images/user2.webp',
    },
    {
      name: 'Carlos Rivera',
      comment: 'Good overall experience, but some delays in updates.',
      rating: 3.5,
      image: '/images/user1.webp',
    },
    {
      name: 'Sophie Martin',
      comment: 'Very responsive and reliable. Loved the collaboration.',
      rating: 4.5,
      image: '/images/user2.webp',
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="bi bi-star-fill text-warning me-1"></i>);
    }

    if (halfStar) {
      stars.push(<i key="half" className="bi bi-star-half text-warning me-1"></i>);
    }

    const remaining = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < remaining; i++) {
      stars.push(<i key={`empty-${i}`} className="bi bi-star text-warning me-1"></i>);
    }

    return stars;
  };

  return (
    <div className="py-5 my-0 bg-light border-top">
      <section className="container my-md-5 position-relative">
      <h2 className="text-primary fw-light fs-1 lead ar-title">Testimonials</h2>

      <div className="d-flex justify-content-end my-5 me-3">
        <button ref={prevRef} className="btn nav-btn-inactive me-2 rounded-circle swiper-button-prev-custom">
          <i className="bi bi-arrow-left"></i>
        </button>
        <button ref={nextRef} className="btn nav-btn-active rounded-circle swiper-button-next-custom">
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>

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
        {testimonials.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="card h-100 shadow-sm border-secondary bg-light">
              {/* Full-width image */}
              <Image
                src={item.image}
                className="card-img-top img-fluid"
                alt={`Photo of ${item.name}`}
                width={100}
                height={250}
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body p-4">
                <div className="mb-2">{renderStars(item.rating)}</div>
                <p className="card-text fst-italic">{item.comment}</p>
                <h6 className="card-title mt-3 fw-bold">{item.name}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
    </div>
  );
}

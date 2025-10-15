import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";

export default function HomeHero() {
  // useAnimations();
  return (
    <>
      {/* Hero Section */}
      <section
        className="position-relative overflow-hidden gradient-overlay-section bg-light-full"
        style={{ minHeight: '100vh' }}
      >
        {/* Gradient Overlay */}
        <div className="video-gradient-overlay position-absolute w-100 h-100"></div>

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="position-absolute w-100 h-100 object-fit-contain"
          style={{ zIndex: -1 }}
        >
          <source src="/videos/hero-video-4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay Content */}
        <div
          className="container d-flex flex-column justify-content-center align-items-center"
          style={{ minHeight: '100vh', position: 'relative', zIndex: 2 }}
        >
          <div className="w-auto text-center flex-grow-1 d-flex flex-column justify-content-center">
            {/* Centered Heading */}
            <h1 className="pb-4 anim-fade-up border-dark border-bottom pb-4">
              Smarter Water Starts Here.
            </h1>
          </div>

          {/* Bottom Content */}
          <div className="d-none row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5 w-100 mt-auto border-dark border-top pt-4 pb-5">
            <div className="col ps-md-0">
              <h2 className="fs-4">99% Water Recovery</h2>
              <p className="lead">Turn wastewater into a sustainable resource.</p>
            </div>
            <div className="col ps-md-0">
              <h2 className="fs-4">90% Smaller Footprint</h2>
              <p className="lead">Space-saving by design - 4x smaller infrastructure needs.</p>
            </div>
            <div className="col ps-md-0">
              <h2 className="fs-4">35% Cost Savings</h2>
              <p className="lead">Save more across the lifecycle.</p>
            </div>
            
            <div className="col ps-md-0">
              <h2 className="fs-4">0% Chemicals</h2>
              <p className="lead">No chemical dosing. No sludge toxicity.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

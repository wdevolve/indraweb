import React from 'react';
// import { useAnimations } from "@/utils/animations";

const HomeMilestones = () => {
// useAnimations();
   const items = [
    {
      icon: 'bi-signpost',
      title: 'Milestone Heading One',
      description: 'Description for milestone one.',
    },
    {
      icon: 'bi-signpost',
      title: 'Milestone Heading Two',
      description: 'Description for milestone two.',
    },
    {
      icon: 'bi-signpost',
      title: 'Milestone Heading Three',
      description: 'Description for milestone three.',
    },
    {
      icon: 'bi-signpost',
      title: 'Milestone Heading Four',
      description: 'Description for milestone four.',
    },
    {
      icon: 'bi-signpost',
      title: 'Milestone Heading Five',
      description: 'Description for milestone five.',
    },
    {
      icon: 'bi-signpost',
      title: 'Milestone Heading Six',
      description: 'Description for milestone six.',
    },
    // Add more if needed
  ];


  return (
    <section className="container-fluid px-0 py-5 bg-light">
      <div className="container">

        <div className="row">
          
          {/* Left Sticky Column */}
          <div className="col-md-8">
            <div className="row d-flex"  style={{ position: 'sticky', top: '100px' }}>
              <div className="col-11">
                <div className="pt-5">
                    <h3 className="mb-3 lead display-5 fw-medium"><span className="text-grad">INDRA</span> serve OEMs, Recyclers, and Mines by addressing customers&apos; unique needs.</h3>
                    <p className="mt-4 fs-5 text-secondary">INDRA Technologies proprietary process employs organic, inorganic and <span className="text-grad">electrochemical processes</span> to increase the supply of critical metals in an economical and environmentally friendly manner. This innovative process <span className="text-grad">extracts critical metals</span> such as copper, tin, platinum and iridium from previously unrecoverable resources.</p>
                    <button type="submit" className="btn btn-dark rounded-5 px-5 py-3 btn-medium mt-4">
                Contact Us
                          </button>
                </div>
              </div>
              <div className="col-1">


                  <svg
                    viewBox="0 0 120 800"
                    preserveAspectRatio="xMidYMin slice"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: 'block', height: '600px', width: 'auto', margin: '0 auto', marginRight:'-35px',  transform: 'scaleX(-1)' }}
                  >
                  <defs>
    {/* Gradient for glowing animated stroke with smooth edges */}
    <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#f8f9fa" />
      <stop offset="30%" stopColor="#8088D1" />
      <stop offset="40%" stopColor="#268CD6" />
      <stop offset="50%" stopColor="#268CD6" />
      <stop offset="55%" stopColor="#268CD6" />
      <stop offset="60%" stopColor="#8088D1" />
      <stop offset="100%" stopColor="#f8f9fa" />
    </linearGradient>

    {/* Glow blur effect */}
    <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

<defs>
    {/* Gradient for base line */}
    <linearGradient id="baseGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#f8f9fa" />
      <stop offset="30%" stopColor="#999" />
      <stop offset="100%" stopColor="#f8f9fa" />
    </linearGradient>
  </defs>

  {/* Base gradient line */}
  <path
    d="M110 800
       V600
       C110 580, 80 550, 40 540
       C10 530, 5 510, 5 470
       V0"
    stroke="url(#baseGradient)"
    strokeWidth="1"
    fill="none"
    className="fixed-stroke"
  />


  {/* Animated glowing line with smooth color fading */}
  <path
    className="animated-stroke"
    d="M110 800
       V600
       C110 580, 80 550, 40 540
       C10 530, 5 510, 5 470
       V0"
    stroke="url(#glowGradient)"
    strokeWidth="1"
    fill="none"
    filter="url(#glowFilter)"
  />
                  </svg>


              </div>
            </div>
          </div>

         {/* Right Scrollable Column */}
          <div className="col-md-4 pt-5 ps-md-5">
            {items.map((item, i) => (
              <div key={i} className="milestone-grid text-center pb-5 mb-5">
                <i className={`bi ${item.icon} display-1 text-primary mb-4 d-block`}></i>
                <h4 className="text-dark mb-4 lead fs-1 fw-medium w-50 mx-auto">{item.title}</h4>
                <p className="mb-0 text-muted lead fw-normal">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeMilestones;

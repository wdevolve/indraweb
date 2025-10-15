
export default function HomeFeatures() {

  return (
    <>
    
<section className="bg-light-grad container-fluid px-0 bg-light py-0 my-0">
      <div className="container" style={{zIndex:'10'}}>
        {/* First Row: Heading */}
        <div className="row mb-0">
          <div className="col text-center">
            <h2 className="text-center mx-auto my-4 display-4 fw-medium" style={{maxWidth:'1100px'}}><span className="text-grad">INDRA WATER</span> has developed turnkey and affordable point of source, treatment, and re-cycling packaged solutions.</h2>
            <p className="text-center fs-4 text-secondary mx-auto mt-5" style={{maxWidth:'800px'}}>We develop and industrialize valves for automotive <span className="text-grad">air conditioning systems</span> and <span className="text-grad">alternative powertrains</span> in on and off-road vehicles.</p>
          </div>
          
        </div>
        {/* Second Row: 2 columns */}
        <div className="row mx-auto my-0"  style={{maxWidth:'1000px'}}>
          <div className="col-md-5">{/* Empty column */}</div>
          <div className="col-md-2">
<svg
  viewBox="0 0 120 800"
  preserveAspectRatio="xMidYMin slice"
  xmlns="http://www.w3.org/2000/svg"
  style={{ display: 'block', height: '600px', width: 'auto', margin: '0 auto', marginRight:'-35px' }}
>
  <defs>
    {/* Gradient for glowing animated stroke with smooth edges */}
    <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="transparent" />
      <stop offset="30%" stopColor="#8088D1" />
      <stop offset="40%" stopColor="#268CD6" />
      <stop offset="50%" stopColor="#268CD6" />
      <stop offset="55%" stopColor="#268CD6" />
      <stop offset="60%" stopColor="#8088D1" />
      <stop offset="100%" stopColor="transparent" />
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

  {/* Base gray line */}
  <path
    d="M110 800
       V600
       C110 580, 80 550, 40 540
       C10 530, 5 510, 5 470
       V0"
    stroke="#ccc"
    strokeWidth="1"
    fill="none"
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
          <div className="col-md-5">
            <p className="pt-5 mt-5 lead">
              INDRA has developed turnkey and affordable point of source, decentralized wastewater management, treatment, and re-cycling packaged solutions. Our patented designs are modular, easily scalable, smaller in footprint and can cater to domestic as well as industrial wastewater treatment.
            </p>
          </div>
        </div>
      </div>
    </section>

 <section className="container-fluid bg-light py-0  my-0 px-0">
  <div id="trigger-section" className="container bg-light">
  <div className="row text-center mx-auto bg-light" style={{ maxWidth: '800px' }}>
    <div className="col-md-12 f1-col" style={{marginBottom:'-100px',paddingTop:'100px'}}>
      <span id="animated-element" className="feature feature-one" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightf1" aria-controls="offcanvasRight">
        
      </span>
      <span className="feature-text" style={{marginBottom:'-100px'}}>Feature One</span>
    </div>
  </div>
  <div className="row text-center mx-auto" style={{ maxWidth: '670px', marginTop:'300px', paddingBottom:'150px' }}>
    <div className="col-6">
      <span className="feature feature-two float-start pe-0 pe-md-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightf2" aria-controls="offcanvasRight"></span>
      <span className="feature-text">Feature Two</span>
    </div>
    <div className="col-6">
      <span className="feature feature-three float-end ps-0 ps-md-3" style={{paddingLeft:'100px'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightf3" aria-controls="offcanvasRight"></span>
      <span className="feature-text" style={{marginLeft:'100px'}}>Feature Three</span>
    </div>
  </div>
</div>
</section> 



<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRightf1" aria-labelledby="offcanvasRightf1Label">
  <div className="offcanvas-header">
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body p-md-5">
    <h2 className="lead fs-1 text-primary">Feature One Heading</h2>
    <p className="mt-4 pt-4 border-top">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</div>

<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRightf2" aria-labelledby="offcanvasRightf2Label">
  <div className="offcanvas-header">
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body p-md-5">
    <h2 className="lead fs-1 text-primary">Feature Two Heading</h2>
    <p className="mt-4 pt-4 border-top">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</div>

<div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRightf3" aria-labelledby="offcanvasRightf3Label">
  <div className="offcanvas-header">
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body p-md-5">
    <h2 className="lead fs-1 text-primary">Feature Three Heading</h2>
    <p className="mt-4 pt-4 border-top">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</div>

    </>
  );
}

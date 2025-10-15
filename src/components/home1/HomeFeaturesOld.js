
export default function HomeFeaturesOld() {

  return (
    <>
    
<section className="bg-light-grad container-fluid px-0 bg-light py-0 my-0">
      <div className="container">
        {/* First Row: Heading */}
        <div className="row mb-0">
          <div className="col text-center">
            <h2 className="text-center mx-auto my-4 display-4 fw-medium" style={{maxWidth:'1100px'}}><span className="text-grad">INDRA WATER</span> has developed turnkey and affordable point of source, treatment, and re-cycling packaged solutions.</h2>
            <p className="text-center fs-4 text-secondary mx-auto mt-5" style={{maxWidth:'800px'}}>We develop and industrialize valves for automotive <span className="text-grad">air conditioning systems</span> and <span className="text-grad">alternative powertrains</span> in on and off-road vehicles.</p>
          </div>
          
        </div>
        {/* Second Row: 2 columns */}
        <div className="row mx-auto my-0"  style={{maxWidth:'1000px'}}>
          <div className="col-md-6">{/* Empty column */}</div>
          <div className="col-md-6 line-left">
            <p className="pt-5 mt-5 lead">
              INDRA has developed turnkey and affordable point of source, decentralized wastewater management, treatment, and re-cycling packaged solutions. Our patented designs are modular, easily scalable, smaller in footprint and can cater to domestic as well as industrial wastewater treatment.
            </p>
          </div>
        </div>
      </div>
    </section>

<section className="container-fluid bg-light py-0  my-0 px-0">
  <div id="trigger-section" className="container">
  <div className="row text-center mx-auto" style={{ maxWidth: '800px' }}>
    <div className="col-md-12 f1-col">
      <span id="animated-element" className="feature feature-one" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightf1" aria-controls="offcanvasRight">
        <span className="feature-text">Feature One</span>
      </span>
    </div>
  </div>
  <div className="row text-center mx-auto" style={{ maxWidth: '600px' }}>
    <div className="col-6">
      <span className="feature feature-two float-start pe-0 pe-md-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightf2" aria-controls="offcanvasRight"><span className="feature-text">Feature Two</span></span>
    </div>
    <div className="col-6">
      <span className="feature feature-three float-end ps-0 ps-md-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRightf3" aria-controls="offcanvasRight"><span className="feature-text">Feature Three</span></span>
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

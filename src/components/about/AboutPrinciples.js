import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";

export default function AboutPrinciples() {
// useAnimations();
  return (
    <>

{/* <section className="container-fluid px-0 bg-white py-5 mb-0">
      <div className="container bg-grad p-3 p-md-5 rounded-3">
        <div className="row mb-0">
          <div className="col-md-8 mx-auto text-white text-center">
            <h2 className="my-4 text-light fw-medium display-5 lead fw-light">How INDRA is Solving</h2><hr/>
        
            <p className="lead">
              INDRA has developed turnkey and affordable point of source, decentralized wastewater management, treatment, and re-cycling packaged solutions. Our patented designs are modular, easily scalable, smaller in footprint and can cater to domestic as well as industrial wastewater treatment and recycling needs.
            </p>
          </div>
        </div>
      </div>
    </section> */}



     <section className="position-relative overflow-hidden pt-5 pb-5">

        <div
          className="container  mx-auto"
        >


          <div className="row mb-0">
            <div className="col">
              <h2 className="mb-3 fs-1 fw-normal lead border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Potential of <span className="text-grad"> untreated wastewater</span></h2>
              <p className="fs-4 text-secondary">And it's affecting everything around us.</p>
            </div>
          </div>


                <div className="mt-5 text-black">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5">
                    <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-3">
                              <img width={75} height={75} src="/images/icons/icons8-waste-water-100.webp" class="rounded float-start" alt="..." style={{filter:'grayscale(1)'}}/>
                            </div>
                            <p className="lead w-75 fs-5 mb-0"><span className="d-block fw-bold">80%</span>of wastewater is discharged untreated globally.</p>
                          </div>
                    </div>
                    {/* <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-3">
                              <img width={75} height={75} src="/images/icons/savings.webp" class="rounded float-start" alt="..." style={{filter:'grayscale(1)'}}/>
                            </div>
                            <p className="lead w-75 fs-5 mb-0"><span className="d-block fw-bold">70%</span>of industrial wastewater in developing nations is released directly into rivers</p>
                          </div>
                    </div> */}
                                        <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-3">
                              <img width={75} height={75} src="/images/icons/icons8-water-tap-100.webp" class="rounded float-start" alt="..." style={{filter:'grayscale(1)'}}/>
                            </div>
                            <p className="lead w-75 fs-5 mb-0"><span className="d-block fw-bold">1 in 3</span>Freshwater ecosystems are already critically threatened by pollution</p>
                          </div>
                    </div>
                                        <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-3">
                              <img width={75} height={75} src="/images/icons/icons8-water-saving-100.webp" class="rounded float-start" alt="..." style={{filter:'grayscale(1)'}}/>
                            </div>
                            <p className="lead w-75 fs-5 mb-0"><span className="d-block fw-bold">50%</span>in freshwater demand is projected by 2030 without reuse solutions</p>
                          </div>
                    </div>
                                        {/* <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-3">
                              <img width={75} height={75} src="/images/icons/water-recovery.webp" class="rounded float-start" alt="..." style={{filter:'grayscale(1)'}}/>
                            </div>
                            <p className="lead w-75 fs-5 mb-0"><span className="d-block fw-bold">30%</span>of industrial freshwater demand could be replaced by recycled wastewater</p>
                          </div>
                    </div> */}
                                        <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-3">
                              <img width={75} height={75} src="/images/icons/icons8-global-warming-100.webp" class="rounded float-start" alt="..." style={{filter:'grayscale(1)'}}/>
                            </div>
                            <p className="lead w-75 fs-5 mb-0"><span className="d-block fw-bold">10% of Global Emissions</span>linked to conventional water treatment and supply systems</p>
                          </div>
                    </div>
                                        <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-3">
                              <img width={75} height={75} src="/images/icons/icons8-nuclear-100.webp" class="rounded float-start" alt="..." style={{filter:'grayscale(1)'}}/>
                            </div>
                            <p className="lead w-75 fs-5 mb-0"><span className="d-block fw-bold">20–40%</span> of industrial production costs tied to water availability.</p>
                          </div>
                    </div>
                                        {/* <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-3">
                              <img width={75} height={75} src="/images/icons/modular-capacity.webp" class="rounded float-start" alt="..." style={{filter:'grayscale(1)'}}/>
                            </div>
                            <p className="lead w-75 fs-5 mb-0"><span className="d-block fw-bold">$6.7 Trillion</span>projected global investment gap in water infrastructure by 2030</p>
                          </div>
                    </div> */}
                                        <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-4">
                              <img width={75} height={75} src="/images/icons/icons8-medical-mask-100.webp" class="rounded float-start" alt="..." style={{filter:'grayscale(1)'}}/>
                            </div>
                            <p className="lead w-75 fs-5 mb-0"><span className="d-block fw-bold">485,000</span>Premature annual deaths due to polluted water</p>
                          </div>
                    </div>
                    {/* <div className="col d-none">
                          <div className="d-flex align-items-center">
                            <div className="pe-3">
                              <img width={75} height={75} src="/images/icons/plug-play.webp" class="rounded float-start" alt="..." style={{filter:'grayscale(1)'}}/>
                            </div>
                            <p className="lead w-75 fs-5 mb-0"><span className="d-block fw-bold">$260 Billion</span>Annually, in economic losses due to water pollution & non-reuse of wastewater</p>
                          </div>
                    </div> */}
                    
                          
                          
                    </div>
                </div>

        </div>
      </section>




{/* 
<section className="container-fluid px-0 pt-5  bg-grad-blue-gray">
      <div className="container">

                    <h2 className="fw-normal lead fs-1 border-bottom border-secondary pb-4 mb-5 anim-fade-left" style={{maxWidth:'100%'}}>
                Our Principles</h2>

        <div className="row mb-0">
          <div className="col-md-12">

            <p className="lead p-5 bg-blur-white shadow-sm rounded-3 border anim-fade-up">
              INDRA has developed turnkey and affordable point of source, decentralized wastewater management, treatment, and re-cycling packaged solutions. Our patented designs are modular, easily scalable, smaller in footprint and can cater to domestic as well as industrial wastewater treatment and recycling needs. 
            
              INDRA has developed turnkey and affordable point of source, decentralized wastewater management, treatment, and re-cycling packaged solutions. Our patented designs are modular, easily scalable, smaller in footprint and can cater to domestic as well as industrial wastewater treatment and recycling needs. 
          
              INDRA has developed turnkey and affordable point of source, decentralized wastewater management, treatment, and re-cycling packaged solutions. Our patented designs are modular, easily scalable, smaller in footprint and can cater to domestic as well as industrial wastewater treatment and recycling needs.
            </p>
          </div>
        </div>
      </div>
    </section> */}


</>
);
}
import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";

export default function IndTreatmentSystems() {
// useAnimations();

  return (
    <>
    


     <section className="position-relative overflow-hidden bg-grad-gray-blue pb-5" style={{paddingTop:'130px'}}>

        <div
          className="container  mx-auto"
        >


          <div className="row mb-4">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fs-1 fw-normal lead border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                <span className="text-grad">ElectroX</span> Indra’s Electrical Treatment Systems</h2>
              <p className="fs-4 text-secondary">Point-of-source wastewater treatment for reuse. Decentralized & modular water treatment systems based on our patented ElectroX technology for recycling & reuse of wastewater.</p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-5 text-white">
            <div className="col">
                        <div className="rounded-5 p-5" style={{backgroundImage:'url("/images/About-Us-Certification-1.webp")',backgroundPosition:'center center',backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}>
                          <div className="col-12 border-bottom py-4">
                            <div className="d-flex align-items-center">
                              <div className="pe-2">
                                <img width={90} height={90} src="/images/icons/plug-play-white.webp" className="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                              </div>
                              <p className="lead w-75 fs-4 mb-0 text-end">Plug and play</p>
                            </div>
                        </div>
                          <div className="col-12 border-bottom py-4">
                            <div className="d-flex align-items-center">
                              <div className="pe-2">
                                <img width={90} height={90} src="/images/icons/savings-white.webp" className="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                              </div>
                            <p className="lead w-75 fs-4 text-end mb-0"><b>35%</b> savings on Lifecycle costs</p>
                            </div>
                        </div>
                          <div className="col-12 border-bottom py-4">
                            <div className="d-flex align-items-center">
                              <div className="pe-2">
                                <img width={90} height={90} src="/images/icons/less-space-white.webp" className="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                              </div>
                            <p className="lead w-75 fs-4 text-end mb-0">90% less space requirement</p>
                            </div>
                        </div>   
                          <div className="col-12  py-4">
                            <div className="d-flex align-items-center">
                              <div className="pe-2">
                                <img width={90} height={90} src="/images/icons/operational-costs-white.webp" className="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                              </div>
                            <p className="lead w-75 fs-4 text-end mb-0"><b>40%</b> savings on operational costs</p>
                            </div>
                        </div>                                                                     
                        </div>
            </div>
            <div className="col">
                        <div className="rounded-5 p-5" style={{backgroundImage:'url("/images/About-Us-Certification-2.webp")',backgroundPosition:'center center',backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}>
                          <div className="col-12 border-bottom py-4">
                            <div className="d-flex align-items-center">
                              <div className="pe-2">
                                <img width={90} height={90} src="/images/icons/water-recovery-white.webp" className="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                              </div>
                            <p className="lead w-75 fs-4 text-end mb-0">up to <b>99%</b> Water Recovery</p>
                            </div>
                        </div>
                          <div className="col-12 border-bottom py-4">
                            <div className="d-flex align-items-center">
                              <div className="pe-2">
                                <img width={90} height={90} src="/images/icons/zero-chemicals-white.webp" className="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                              </div>
                            <p className="lead w-75 fs-4 text-end mb-0"><b>Zero</b> chemicals in Primary Treatment</p>
                            </div>
                        </div>
                          <div className="col-12 border-bottom py-4">
                            <div className="d-flex align-items-center">
                              <div className="pe-2">
                                <img width={90} height={90} src="/images/icons/pcb-white.webp" className="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                              </div>
                            <p className="lead w-75 fs-4 text-end mb-0">Meets <b>PCB</b> & STATE norms</p>
                            </div>
                        </div>
                          <div className="col-12 py-4">
                            <div className="d-flex align-items-center">
                              <div className="pe-2">
                                <img width={90} height={90} src="/images/icons/modular-capacity-white.webp" className="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                              </div>
                            <p className="lead w-75 fs-4 text-end mb-0">Modular Capacity: <b>5-2000</b> KLD</p>
                            </div>
                        </div>                                                                                                
                        
                        </div>
            </div>
          </div>

                <div className="bg-white p-5 my-5 rounded-5 shadow-sm border-top text-black d-none">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-5">
                    <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-2">
                              <img width={75} height={75} src="/images/icons/plug-play.webp" classname="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                            </div>
                            <p className="lead w-75 fs-4 text-end mb-0"><b>Plug</b> and play</p>
                          </div>
                    </div>
                    <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-2">
                              <img width={75} height={75} src="/images/icons/savings.webp" classname="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                            </div>
                            <p className="lead w-75 fs-4 text-end mb-0"><b>35%</b> savings on Lifecycle costs</p>
                          </div>
                    </div>
                                        <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-2">
                              <img width={75} height={75} src="/images/icons/less-space.webp" classname="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                            </div>
                            <p className="lead w-75 fs-4 text-end mb-0">90% less space requirement</p>
                          </div>
                    </div>
                                        <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-2">
                              <img width={75} height={75} src="/images/icons/plug-play.webp" classname="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                            </div>
                            <p className="lead w-75 fs-4 text-end mb-0"><b>40%</b> savings on operational costs</p>
                          </div>
                    </div>
                                        <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-2">
                              <img width={75} height={75} src="/images/icons/water-recovery.webp" classname="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                            </div>
                            <p className="lead w-75 fs-4 text-end mb-0">up to <b>99%</b> Water Recovery</p>
                          </div>
                    </div>
                                        <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-2">
                              <img width={75} height={75} src="/images/icons/zero-chemicals.webp" classname="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                            </div>
                            <p className="lead w-75 fs-4 text-end mb-0"><b>Zero</b> chemicals in Primary Treatment</p>
                          </div>
                    </div>
                                        <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-2">
                              <img width={75} height={75} src="/images/icons/pcb.webp" classname="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                            </div>
                            <p className="lead w-75 fs-4 text-end mb-0">Meets <b>PCB</b> & STATE norms</p>
                          </div>
                    </div>
                                        <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-2">
                              <img width={75} height={75} src="/images/icons/modular-capacity.webp" classname="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                            </div>
                            <p className="lead w-75 fs-4 text-end mb-0">Modular Capacity: <b>5-2000</b> KLD</p>
                          </div>
                    </div>
                                        <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-2">
                              <img width={75} height={75} src="/images/icons/long-life.webp" classname="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                            </div>
                            <p className="lead w-75 fs-4 text-end mb-0">Long life-span <b>10+</b> years</p>
                          </div>
                    </div>
                    <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-2">
                              <img width={75} height={75} src="/images/icons/plug-play.webp" classname="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                            </div>
                            <p className="lead w-75 fs-4 text-end mb-0"><b>Plug</b> and play</p>
                          </div>
                    </div>
                    <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-2">
                              <img width={75} height={75} src="/images/icons/savings.webp" classname="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                            </div>
                            <p className="lead w-75 fs-4 text-end mb-0"><b>35%</b> savings on Lifecycle costs</p>
                          </div>
                    </div>
                                        <div className="col">
                          <div className="d-flex align-items-center">
                            <div className="pe-2">
                              <img width={75} height={75} src="/images/icons/less-space.webp" classname="bg-blur-white p-2 rounded-circle float-start" alt="..."/>
                            </div>
                            <p className="lead w-75 fs-4 text-end mb-0"><b>90%</b> less space requirement</p>
                          </div>
                    </div>
                          
                          
                    </div>
                </div>

        </div>
      </section>
    </>
  );
}

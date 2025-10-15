import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";

export default function IndProcessIntegration() {

// useAnimations();
  return (
    <>
    
    <section className="pb-5 bg-grad-gray-blue">
      <div className="container">
         <h2 className="mx-auto mb-5 fs-1 fw-normal lead border-bottom border-secondary pb-4" style={{maxWidth:'100%'}}>
                Versatile <span className="text-grad">Process Integration</span></h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-5 mb-3">
          <div className="col anim-zoom">
            <div className="proc-int p-1 rounded-3">
              <div className="w-100 bg-white rounded-3 shadow-sm">
                <img
                  src="/images/industry-1.webp"
                  className="img-fluid object-fit-cover rounded-top"
                  width={0}
                  height={0}
                  style={{ width:'100%',height:'150px' }}
                  alt="Industry"
                />
                <div className="bg-white p-4 rounded-bottom">
                    <h3 className="lead w-75 fw-bold fs-5">Pre-Treatment</h3>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item ps-0">50-60% pollutant reduction, shock load handling</li>
                        <li className="list-group-item ps-0">Pre-treatment for removal of silica, hardness, sulphates, VOCs etc.</li>
                      </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col anim-zoom">
            <div className="proc-int p-1 rounded-3">
              <div className="w-100 bg-white rounded-3 shadow-sm">
                <img
                  src="/images/industry-2.webp"
                  className="img-fluid object-fit-cover rounded-top"
                  width={0}
                  height={0}
                  style={{ width:'100%',height:'150px' }}
                  alt="Industry"
                />
                <div className="bg-white p-4 rounded-bottom">
                    <h3 className="lead w-75 fw-bold fs-5">Primary-Treatment</h3>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item ps-0">90% pollutant removal in a single step </li>
                        <li className="list-group-item ps-0">For Industrial and non-industrial wastewater in a variety of treatment conditions</li>
                      </ul>
                </div>
              </div>
            </div>            
          </div>
          <div className="col anim-zoom">
            <div className="proc-int p-1 rounded-3">
              <div className="w-100 bg-white rounded-3 shadow-sm">
                <img
                  src="/images/industry-3.webp"
                  className="img-fluid object-fit-cover rounded-top"
                  width={0}
                  height={0}
                  style={{ width:'100%',height:'150px' }}
                  alt="Industry"
                />
                <div className="bg-white p-4 rounded-bottom">
                    <h3 className="lead w-75 fw-bold fs-5">Polishing-Treatment</h3>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item ps-0">To improve treated water quality of existing systems </li>
                        <li className="list-group-item ps-0">Removal of heavy metals, fluoride, bromide, from fresh water or drinking water streams</li>
                      </ul>
                </div>
              </div>
            </div>            
          </div>

        </div>
      </div>
    </section>

    </>
  );
}

import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";

export default function IndTreatmentSystems() {
// useAnimations();

  return (
    <>
    


    <section className="position-relative overflow-hidden bg-grad-blue-gray pt-4 pb-5" style={{ position: 'relative' }}>
    {/* <div
      style={{
        backgroundImage: 'url(/images/indra-competitive-moat.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1, 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}
    ></div> */}

        <div
          className="container mx-auto"
        style={{ position: 'relative', zIndex: 1 }}>


          <div className="row mb-0">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fs-1 lead fw-normal border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Competitive Moat</h2>
              <p className="fs-4 text-secondary">Overall cost reduction achieved with improvements in mentioned factors.</p>
            </div>
          </div>


                <div className="my-5">
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    <div className="col anim-fade-up">
                          <div className="d-flex align-items-center bg-white px-4 py-4 rounded-3 border shadow-sm">
                            <div className="">
                               <h3 className="lead w-75 fw-bold fs-5 border-bottom border-secondary pb-3 mb-3">Efficiency</h3>
                               <p className="">Advanced electrode management (structural, thermal & geometrical)requiring <span className="text-grad">less power</span>.</p>
                            </div>
                          </div>
                    </div>
                    <div className="col anim-fade-up">
                          <div className="d-flex align-items-center bg-white px-4 py-4 rounded-3 border shadow-sm">
                            <div className="">
                               <h3 className="lead w-75 fw-bold fs-5 border-bottom border-secondary pb-3 mb-3">Reaction Rate</h3>
                               <p className="">Higher collision probabilities and higher active contact surface area <span className="text-grad">speed up reaction rates</span>.</p>
                            </div>
                          </div>
                      </div>
                    <div className="col anim-fade-up">
                          <div className="d-flex align-items-center bg-white px-4 py-4 rounded-3 border shadow-sm">
                            <div className="">
                               <h3 className="lead w-75 fw-bold fs-5 border-bottom border-secondary pb-3 mb-3">Scalability</h3>
                               <p className="">Modular reactors can be <span className="text-grad">mass produced</span> and added/integrated seamlessly.</p>
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

import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";

export default function HomeEngagements() {
// useAnimations();
  return (
    <>
 <section className="bg-grad-blue-gray">

        <div
          className="container px-0 mx-auto rounded-5"
        >


           <div className="row mb-0">
            <div className="col anim-fade-left">
              <h2 className="my-3 fs-1 fw-normal text-dark lead pb-4 border-bottom border-dark" style={{maxWidth:'100%'}}>
                Engagements
              </h2>
              <p className="fs-4 text-secondary mt-4 mb-5"><b>New focus areas</b> Cooling tower blowdown treatment in <span className="text-grad">Industries & Data centres</span>.</p>
            </div>
          </div>


                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                  <div className="col">
                    <div className="border-grad p-1 rounded-3">
                      <div className="card p-3 pb-0 rounded-3">
                        <div className="card-body">
                          <h3 className="fs-3 fw-medium d-block border-bottom border-secondary pb-3 mb-3"><span className="counter" data-target="3.5">0</span> MLD+</h3>
                          <p className="lead mt-4 fs-5">Waste water treatment plants deployed.</p>
                        </div>
                      </div>
                    </div>
                  </div>  
                  <div className="col">
                    <div className="border-grad p-1 rounded-3">
                      <div className="card p-3 pb-0 rounded-3">
                        <div className="card-body">
                        <h3 className="fs-3 fw-medium d-block border-bottom border-secondary pb-3 mb-3"><span className="counter" data-target="4.5">0</span> MLD+</h3>
                          <p className="lead mt-4 fs-5">Waste water treatment plants under deployment.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="border-grad p-1 rounded-3">
                      <div className="card p-3 pb-0 rounded-3">
                        <div className="card-body">
                          <h3 className="fs-3 fw-medium d-block border-bottom border-secondary pb-3 mb-3"><span className="counter" data-target="50">0</span> MLD+</h3>
                          <p className="lead mt-4 fs-5">Order Pipeline - Treatment capacity.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="border-grad p-1 rounded-3">
                      <div className="card p-3 pb-0 rounded-3">
                        <div className="card-body">
                          <h3 className="fs-3 fw-medium d-block border-bottom border-secondary pb-3 mb-3"><span className="counter" data-target="10">0</span>+</h3>
                          <p className="lead mt-4 fs-5">Partners - Across South and South-East Asia.</p>
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
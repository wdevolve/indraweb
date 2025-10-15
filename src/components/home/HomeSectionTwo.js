import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";

export default function HomeSectionTwo() {
// useAnimations();
  return (
    <>
 <section className="py-5 my-0" >
        <div
          className="container my-0 mx-auto rounded-5"
        >
               <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mb-5 g-5">
                  <div className="col anim-zoom">
                    <div className="p-1 rounded-3">
                      <div className="">
                        <div className="card-body p-0">
                          {/* <h3 className="display-6 fw-medium d-block border-bottom border-secondary pb-3 mb-3"><span className="counter" data-target="3.2">0</span>+ Billion</h3> */}
                          <h3 className="display-4 fw-medium d-block"><span className="counter" data-target="4">0</span>+ Billion</h3>
                          <p className="lead mt-2 fs-5">Litres of waste water treated.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col anim-zoom">
                    <div className="p-1 rounded-3">
                      <div className="">
                        <div className="card-body">
                        {/* <h3 className="display-6 fw-medium d-block border-bottom border-secondary pb-3 mb-3"><span className="counter" data-target="8500">0</span>+ Tonnes</h3> */}
                        <h3 className="display-4 fw-medium d-block"><span className="counter" data-target="12500">0</span>+ Tons</h3>
                          <p className="lead mt-2 fs-5">of sludge reduced.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col anim-zoom">
                    <div className="p-1 rounded-3">
                      <div className="">
                        <div className="card-body">
                          {/* <h3 className="display-6 fw-medium d-block border-bottom border-secondary pb-3 mb-3"><span className="counter" data-target="10000">0</span>+ Tonnes</h3> */}
                          <h3 className="display-4 fw-medium d-block"><span className="counter" data-target="10500">0</span>+ Tons</h3>
                          <p className="lead mt-2 fs-5">tons of chemicals saved.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col anim-zoom">
                    <div className="border-grad p-1 rounded-3">
                      <div className="card p-3 pb-0 rounded-3">
                        <div className="card-body">
                          <h3 className="fs-4 fw-medium d-block border-bottom border-secondary pb-3 mb-3"><span className="counter" data-target="0">0</span>% Chemicals</h3>
                          <p className="lead mt-4 fs-5">No chemical dosing. No sludge toxicity.</p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>


        </div>
      </section>
</>
);
}
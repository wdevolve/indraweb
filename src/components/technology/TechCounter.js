import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";

export default function TechCounter() {
// useAnimations();

  return (
    <>
    


     <section className="position-relative overflow-hidden py-5">

        <div
          className="container px-0 mx-auto d-flex align-items-center justify-content-center rounded-5 "
        >
                <div className="row p-0 mx-auto">
                  <div className="col-md-4 mb-3 mb-sm-0 anim-zoom">
                    <div className="card p-2 pb-0 rounded-4">
                      <div className="card-body">
                        <span className="display-5 fw-medium d-block"><span className="counter" data-target="95">0</span>%</span>
                        <p className="lead mt-4 w-75 fs-6"><span className="d-block fw-bold">Small one line heading</span> Milestone small description paragraph in three line. Milestone small description paragraph in three line.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 anim-zoom">
                    <div className="card p-2 pb-0 rounded-4">
                      <div className="card-body">
                      <span className="display-5 fw-medium d-block"><span className="counter" data-target="100">0</span> GWh</span>
                        <p className="lead mt-4 w-75 fs-6"><span className="d-block fw-bold">Small one line heading</span> Milestone small description paragraph in three line. Milestone small description paragraph in three line.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 anim-zoom">
                    <div className="card p-2 pb-0 rounded-4">
                      <div className="card-body">
                        <span className="display-5 fw-medium d-block"><span className="counter" data-target="20">0</span> GWh</span>
                        <p className="lead mt-4 w-75 fs-6"><span className="d-block fw-bold">Small one line heading</span> Milestone small description paragraph in three line. Milestone small description paragraph in three line.</p>
                      </div>
                    </div>
                  </div>
                </div>

        </div>
      </section>
    </>
  );
}

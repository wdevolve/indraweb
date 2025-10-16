import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";

export default function AboutEngagements() {
// useAnimations();
  return (
    <>
 <section className="bg-grad-blue-gray pb-0" style={{paddingTop:'60px'}}>

        <div
          className="container px-0 mx-auto rounded-5  inner-water-bg"
        >

                    <div className="row mb-3">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fw-normal fs-1 lead border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                About Us</h2>
              <p className="fs-4 text-secondary">$260 billion is lost annually to poor <span className="text-grad">water and wastewater systems</span> around the globe</p>
            </div>
          </div>


          <div className="mb-5 about-media-container rounded-3 anim-fade-up">
                                  <div className="about-media-overlay-tab px-4 pt-4 pb-2">
                                    <h3 className="fs-4 text-white fw-medium lead text-shadow pb-1 about-media-slide-h3">
                                      Engagements
                                    </h3>
                                    <hr
                                      className="border-white border-1 my-3 about-media-slide-hr"
                                      style={{ zIndex: 999, position: 'relative', opacity: 1 }}
                                    />
                                    <p className="text-end text-white">We started with an innocent thought of creating impact through securing the most fundamental element of life.</p>
                                  </div>
                                  <Image
                                    src={`/images/projects-bg.webp`}
                                    alt="Media coverage"
                                    width={0}
                                    height={0}
                                    className="about-media-slide-image rounded-3"
                                    style={{width:'100%',height:'450px ! important',objectFit:'cover'}}
                                  />
                                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                  <div className="col anim-zoom">
                    <div className="border-grad p-1 rounded-3">
                      <div className="card p-3 pb-0 rounded-3">
                        <div className="card-body">
                          <h3 className="fs-3 fw-medium d-block border-bottom border-secondary pb-3 mb-3"><span className="counter" data-target="3.5">0</span> MLD+</h3>
                          <p className="lead mt-4 fs-5">Waste water treatment plants deployed.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col anim-zoom">
                    <div className="border-grad p-1 rounded-3">
                      <div className="card p-3 pb-0 rounded-3">
                        <div className="card-body">
                        <h3 className="fs-3 fw-medium d-block border-bottom border-secondary pb-3 mb-3"><span className="counter" data-target="4.5">0</span> MLD+</h3>
                          <p className="lead mt-4 fs-5">Waste water treatment plants under deployment.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col anim-zoom">
                    <div className="border-grad p-1 rounded-3">
                      <div className="card p-3 pb-0 rounded-3">
                        <div className="card-body">
                          <h3 className="fs-3 fw-medium d-block border-bottom border-secondary pb-3 mb-3"><span className="counter" data-target="50">0</span> MLD+</h3>
                          <p className="lead mt-4 fs-5">Order Pipeline - Treatment capacity.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col anim-zoom">
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
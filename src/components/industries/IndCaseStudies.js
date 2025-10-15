import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";

export default function IndCaseStudies() {
// useAnimations();
  return (
    <>
    
     <section className="position-relative overflow-hidden py-5 bg-grad-blue-gray">

        <div
          className="container mx-auto rounded-5 "
        >

        {/* <h2 className="lead fs-5 px-4 py-2 rounded-2 w-100 text-white" style={{background:'#a7abc1'}}>Case Studies</h2> */}

          <div className="row mb-0">
            <div className="col anim-fade-left">
              <h2 className="mt-3 fs-1 fw-normal lead pb-4 border-bottom border-dark" style={{maxWidth:'100%'}}>
                <span className="text-grad">Industries & Applications</span></h2>
              <p className="fs-4 text-secondary mt-4">Unrelenting quality standards ensure our client's status as <span className="text-grad">water warriors</span>, no matter their industry.</p>
            </div>
          </div>

                    {/* <div className="row">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fs-1 fw-normal lead border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Story Navigation</h2>
              <p className="fs-4 text-secondary">Trace the journey: Wher, how and with what.</p>
            </div>
          </div> */}

{/* 
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-5 mt-1 mb-4 d-none">
          <div className="col anim-fade-up">
            <h3 className="lead fw-medium fs-4 border-bottom border-secondary pb-3 mb-3">Textiles Industries</h3>
            <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className="btn  rounded-5 border-secondary px-3 py-2 mt-2">Read More</button>

          </div>
          <div className="col anim-fade-up">
            <h3 className="lead fw-medium fs-4 border-bottom border-secondary pb-3 mb-3">Manufacturing Industries</h3>
            <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className="btn rounded-5 border-secondary px-3 py-2 mt-2">Read More</button>
          </div>
          <div className="col anim-fade-up">
            <h3 className="lead fw-medium fs-4 border-bottom border-secondary pb-3 mb-3">Automobiles Industries</h3>
            <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <button className="btn rounded-5 border-secondary px-3 py-2 mt-2">Read More</button>
          </div>
          
        </div> */}


        </div>
      </section>
    </>
  );
}

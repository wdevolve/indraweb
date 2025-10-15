import { useEffect } from 'react';
import Link from 'next/link';
// import { useAnimations } from "@/utils/animations";

export default function ProductsCTA() {

// useAnimations();
  return (
    <>
    


     <section className=" py-5 bg-grad-blue-gray">

        <div
          className="container anim-fade-left"
        >
              <h2 className="mb-3 fs-1 fw-normal lead border-bottom border-secondary pb-3">
                Book a Demo</h2>
              <div className="row">
                <div className="col">
                  <p className="fs-4 text-secondary">Experience INDRA's products</p>
                </div>
                  <div className="col-md-6">
                    <Link href="/contact"><button className="btn btn-light rounded-5 border-secondary px-3 py-2 mt-3 float-end">Enquire Now</button></Link>
                    </div>
              </div>
        </div>
      </section>
    </>
  );
}

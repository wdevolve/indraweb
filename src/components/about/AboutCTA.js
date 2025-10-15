import { useEffect } from 'react';
import Link from 'next/link';
// import { useAnimations } from "@/utils/animations";

export default function AboutCTA() {
// useAnimations();

  return (
    <>
    


     <section className=" pt-0 pb-5 bg-grad-blue-gray">

        <div
          className="container anim-fade-left"
        >
              <h2 className="mb-3 fs-1 fw-normal lead border-bottom border-secondary pb-3">
                Have any water challenge?</h2>
              <div className="row">
                <div className="col">
                  <p className="fs-4 text-secondary">Let's solve it together</p>
                </div>
                  <div className="col-md-6">
                    <Link href="/contact"><button className="btn btn-light rounded-5 border-secondary px-3 py-2 mt-3 float-end">Let's Connect</button></Link>
                    </div>
              </div>
        </div>
      </section>
    </>
  );
}

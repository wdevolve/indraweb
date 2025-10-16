import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";

export default function IndCounter() {
// useAnimations();

  return (
    <>
    


     <section className="pt-0">

        <div
          className="container-fluid px-0"
        >
                <div className="row p-0 mx-auto photo-switch">
                  <div className="col-md-6 p-0"
                  style={{height:'75vh',backgroundImage:'url(/images/bg1.webp)'}}>
                    <div className="w-100 h-100 photo-switch-image"></div>
                  </div>
                  <div className="col-md-6 p-0"
                  style={{height:'75vh',backgroundImage:'url(/images/bg2.webp)'}}>
                      <div className="w-100 h-100 photo-switch-image"></div>
                  </div>
                </div>

        </div>
      </section>
    </>
  );
}

import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";

export default function HomeUnlockPerks() {
  // useAnimations();
  useEffect(() => {
    // Dynamically load jQuery and Ripples
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });

    async function initRipples() {
      if (typeof window !== 'undefined') {
        try {
         // await loadScript('https://code.jquery.com/jquery-3.6.0.min.js');
          await loadScript('/library/jquery.ripples.min.js');

          window.jQuery('.full-landing-image').ripples({
            resolution: 256,
            perturbance: 0.01,
          });
        } catch (error) {
          console.error('Failed to load ripples plugin', error);
        }
      }
    }

    initRipples();
  }, []);


  return (
    <>
    


      {/* Hero Section */}
<section className="position-relative overflow-hidden bg-light">

        {/* Overlay Content */}
        <div
          className="container mx-5 mx-auto d-flex align-items-center justify-content-center rounded-5 my-5 inner-water-bg"
        >
          <div className="row w-100">
            <div className="col-md-12 justify-content-center position-relative z-3">
            
               <h1 className="text-center">Unlock <span className="text-grad fw-bold"><em>INDRA</em></span> Perks</h1>
            
            </div>



<div className="row p-0 mx-auto mt-5 unlock-perks" style={{maxWidth:'1100px'}}>
  <div className="col-md-4 mb-3 mb-sm-0">
    <div className="card p-0 pb-0 rounded-4 perk1">
      <div className="card-body p-0 d-flex rounded-4 align-items-end">
        <div className="text-content p-4 pt-5 rounded-4  pe-md-5">
        <h3 className="lead mt-4 fs-4 fw-normal text-white">Small two line descriptive heading</h3>
        <button type="button" className="perks-button border-light btn btn-lg shadow-sm btn-white text-dark bg-white rounded-5 fs-6 px-4 py-2" data-bs-toggle="button">Our products</button>
        </div>
      </div>
    </div>
  </div>
  <div className="col-md-4">
    <div className="card p-0 pb-0 rounded-4 perk2">
      <div className="card-body p-0 d-flex pt-5 rounded-4 align-items-end">
        <div className="text-content p-4 rounded-4 pe-md-5">
        <h3 className="lead mt-4 fs-4 fw-normal text-white">Small two line descriptive heading</h3>
        <button type="button" className="perks-button border-light btn btn-lg shadow-sm btn-white text-dark bg-white rounded-5 fs-6 px-4 py-2" data-bs-toggle="button">Our products</button>
        </div>
      </div>
    </div>
  </div>
    <div className="col-md-4">
    <div className="card p-0 pb-0 rounded-4 perk3">
      <div className="card-body p-0 d-flex pt-5 rounded-4 align-items-end">
        <div className="text-content p-4 rounded-4  pe-md-5">
        <h3 className="lead mt-4 fs-4 fw-normal text-white">Small two line descriptive heading</h3>
        <button type="button" className="perks-button border-light btn btn-lg shadow-sm btn-white text-dark bg-white rounded-5 fs-6 px-4 py-2" data-bs-toggle="button">Our products</button>
        </div>
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

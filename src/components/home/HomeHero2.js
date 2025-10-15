import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";

export default function HomeHero2() {
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
     <section className="position-relative overflow-hidden gradient-overlay-section bg-light-grad">
  {/* Gradient Overlay */}
  <div className="video-gradient-overlay position-absolute w-100"></div>

        {/* Overlay Content */}
        <div
          className="container mx-5 mx-auto d-flex align-items-center justify-content-center rounded-5 my-5 inner-water-bg"
        >
          <div className="row w-100">
            <div className="col-md-12 justify-content-center position-relative z-3">
            
               <h1 className="text-center border-secondary border-bottom pb-5">Lorem ipsum <span className="text-grad">dolor sit amet</span> consectetur adipiscing elit</h1>
            </div>
                <div className="row p-0 mx-auto mt-5">
                  <div className="col-md-4 mb-3 mb-sm-0">
                    <div className="card p-2 pb-0 rounded-4">
                      <div className="card-body">
                        <span className="display-5 fw-medium d-block"><span className="counter" data-target="95">0</span>%</span>
                        <p className="lead mt-4 w-75 fs-6"><span className="d-block fw-bold">Small one line heading</span> Milestone small description paragraph in three line. Milestone small description paragraph in three line.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card p-2 pb-0 rounded-4">
                      <div className="card-body">
                      <span className="display-5 fw-medium d-block"><span className="counter" data-target="100">0</span> GWh</span>
                        <p className="lead mt-4 w-75 fs-6"><span className="d-block fw-bold">Small one line heading</span> Milestone small description paragraph in three line. Milestone small description paragraph in three line.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card p-2 pb-0 rounded-4">
                      <div className="card-body">
                        <span className="display-5 fw-medium d-block"><span className="counter" data-target="20">0</span> GWh</span>
                        <p className="lead mt-4 w-75 fs-6"><span className="d-block fw-bold">Small one line heading</span> Milestone small description paragraph in three line. Milestone small description paragraph in three line.</p>
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

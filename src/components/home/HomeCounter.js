import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";

export default function HomeCounter() {
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
    
    <section className="position-relative overflow-hidden full-landing-image" style={{ minHeight: 'calc(50vh - 0px)',zIndex:'1' }}>


{/* Overlay Content */}
<div
  className="container mx-5 mx-auto my-5 inner-water-bg"
  
>
  <div className="row w-100">
  </div>
</div>
</section>

<section className="bg-light py-5 z-3" style={{ minHeight: 'calc(100px)' }}>

 <div className="container" style={{marginTop:'-280px'}}>
   <div
    className="counter-section rounded-4 py-5 bg-white mx-auto d-flex align-items-center justify-content-center rounded-0 my-5 inner-water-bg shadow z-3 px-0 px-md-5"
   >
        <div className="row align-items-center px-3 px-md-5 g-5">
          {/* Left side - 3/4 width */}
          <div className="col-md-9">
            <div className="row mb-0 pe-md-5">
            <div className="col anim-fade-left pe-md-5">
              <h2 className="my-3 fs-1 fw-normal text-dark lead pb-4 border-bottom border-dark" style={{maxWidth:'100%'}}>
                Subscribe to our Newsletter
              </h2>
              <p className="fs-4 text-secondary">Don’t just watch the future unfold - engineer it.</p>
            <p class="lead fs-5">Unlock game-changing water tech updates, daring sustainability ideas, and exclusive Indra breakthroughs delivered directly to you.</p>           
             </div>
          </div>
          </div>

          {/* Right side - 1/4 width */}
          <div className="col-md-3">
            <form className="">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control rounded-5 py-2 px-4 bg-light border border-3"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  required
                />
              </div>
              <button type="submit" className="btn btn-secondary py-2 rounded-5 w-100 shadow">
                Subscribe
              </button>
            </form>

            {/* <button type="submit" data-bs-toggle="collapse" data-bs-target=".toggleSubscribe" className="btn btn-secondary py-2 rounded-5 w-100 shadow toggleSubscribe">
                Subscribe
              </button> */}
          </div>
        </div>

   </div>
 </div>

</section>

    </>
  );
}

import React from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";

export default function ContactHero() {
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

 <section className="position-relative pb-5 px-0 pt-5 full-landing-image" style={{minHeight:'100vh'}}>


{/* Overlay Content */}
<div
  className="container mx-5 mx-auto inner-water-bg"
  
>
  <div className="row w-100 mt-5 pt-5">
    <div className="col-md-6 pe-md-5 d-flex align-items-end">

        <div className="row me-md-5 sticky-bottom" style={{bottom:'50px'}}>
            <div className="card bg-blur-white p-3 me-md-5">
                <div className="card-body">
                    <p className="lead fs-5 fw-bold pb-3 border-secondary border-bottom">Our Location</p>
                        <address className="mb-0 pt-1">
                            Indra Water, Bhumi World Industrial Park, D10/11-12, Mumbai - Nashik Expy, Pimplas, Bhiwandi, Maharashtra 421302
                                    </address>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-6">
        <h1 className="lead display-1 fw-bold text-white mb-3">Get In Touch</h1>
<hr className="border-light mb-4"/>
                 <form className="container text-white p-0" style={{maxWidth:'800px'}}>
    <div className="row g-3">
      <div className="col-md-6">
        <label htmlFor="firstName" className="form-label small">First Name</label>
        <input type="text" className="form-control bg-blur-white" id="firstName" required/>
      </div>
      <div className="col-md-6">
        <label htmlFor="lastName" className="form-label small">Last Name</label>
        <input type="text" className="form-control bg-blur-white" id="lastName"  required/>
      </div>
      <div className="col-md-6">
        <label htmlFor="company" className="form-label small">Company</label>
        <input type="text" className="form-control bg-blur-white" id="company" />
      </div>
      <div className="col-md-6">
        <label htmlFor="jobTitle" className="form-label small">Job Title</label>
        <input type="text" className="form-control bg-blur-white" id="jobTitle" />
      </div>
      <div className="col-md-6">
        <label htmlFor="email" className="form-label small">Email</label>
        <input type="email" className="form-control bg-blur-white" id="email"  required/>
      </div>
      <div className="col-md-6">
        <label htmlFor="phone" className="form-label small">Phone Number</label>
        <input type="tel" className="form-control bg-blur-white" id="phone" />
      </div>
      <div className="col-md-12">
        <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className="col-12 text-center mt-4">
        <button type="submit" className="ms-auto d-block btn btn-lg shadow-sm btn-light text-dark active rounded-5 fs-6 px-5 py-3">Submit</button>
      </div>
    </div>
    </form>
    </div>
  </div>
</div>
</section>


<section className="py-5 d-flex align-items-center">
  <div className="container my-5">
    <div className="row justify-content-center">
      <div className="col-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
          className="rounded-3 shadow"
        ></iframe>
      </div>
    </div>
  </div>
</section>




<section className="container-fluid py-5 px-0 bg-light">
    <div className="container py-5">
        <div className="row">
            <div className="col-md-6 pe-md-5">
                <h3 className="mb-3 lead fs-1 fw-normal border-bottom border-secondary pb-3">Details One Line Heading</h3>
                        <p className="mt-4 fs-5 text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. <span className="text-grad">Lorem Ipsum</span> has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type <span className="text-grad">specimen book</span>. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                    </div>
            <div className="col-md-6">
        
        <h3 className="mb-4">FAQ Heading</h3>
                 <div className="accordion" id="accordionExample">
          <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            FAQ heading one
          </button>
        </h2>
        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div className="accordion-body">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.      </div>
        </div>
          </div>
          <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            FAQ heading two
          </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.      </div>
        </div>
          </div>
          <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            FAQ heading Three
          </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
          <div className="accordion-body">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.      </div>
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
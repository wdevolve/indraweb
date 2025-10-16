import React, { use } from 'react';
import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";
import Link from 'next/link';

export default function ContactHero() {   
// useAnimations();
return (
<>

 <section className="pb-5" style={{paddingTop:'30px'}}>


{/* Overlay Content */}
<div
  className="container mx-5 mx-auto">
  
     <div className="row">
       <div className="col">
         <h1 className="mt-5 pt-5 mb-3 fs-1 fw-normal lead border-bottom border-secondary pb-3">Get In Touch</h1>
            <p className="fs-4 text-secondary">We are constantly seeking great partnerships and outreach opportunities to help deliver our technologies to those in need. We also love speaking with new energetic talent and possible investment partners to come build the future with us!</p>
       </div>
     </div>

  <div className="row mt-3 pt-5">
    <div className="col-md-8 pe-md-5 anim-fade-left">

        
     

        <div className="row">
            <div className="col p-4 bg-blur-white">
                <div className="card-body">
                    <p className="lead fs-5 fw-bold pb-3 border-secondary border-bottom">Indra Manufacturing Facility</p>
                        <address className="mb-0 pt-1">
                            <Link href="https://maps.app.goo.gl/eySahpCQsF7Qvfe57" target="_blank" className="text-dark">D10/11-12, Bhumi World Industrial Park, Bhiwandi, Thane, Maharashtra 421302</Link>
                        </address>
<p className="lead fs-5 fw-bold mt-5 pb-3 border-secondary border-bottom">Indra Head Quarters</p>
                        <address className="mb-0 pt-1">
                            <Link href="https://maps.app.goo.gl/oP5M6BNnBCfVJLjM6" target="_blank" className="text-dark">1203 1204, Fenkin 9, C5, Wagle Industrial Estate, Thane, Maharashtra 400604 </Link>
                        </address>

                         <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 py-5 g-5">
                      <div className="col">
                        <h3 className="d-block lead fw-bold fs-5 mb-3" style={{color:'#07468d'}}>Connect with us</h3>
                          <a href="#" className="text-dark me-3"><i className="bi bi-facebook"></i></a>
                          <a href="#" className="text-dark me-3"><i className="bi bi-twitter-x"></i></a>
                          <a href="#" className="text-dark me-3"><i className="bi bi-instagram"></i></a>
                          <a href="#" className="text-dark me-3"><i className="bi bi-linkedin"></i></a>
                          <a href="#" className="text-dark me-3"><i className="bi bi-youtube"></i></a>
                      </div>
                      <div className="col">
                        <h3 className="d-block lead fw-bold fs-5 mb-3" style={{color:'#07468d'}}>Email us</h3>
                        <i className="bi bi-envelope-fill me-2"></i>
                        <a href="mailto:contact@indrawater.com" className="text-decoration-none text-dark">contact@indrawater.com</a>
                      </div>
                      <div className="col">
                        <h3 className="d-block lead fw-bold fs-5 mb-3" style={{color:'#07468d'}}>Call us</h3>
                        <i className="bi bi-telephone-fill me-2"></i>
                        <a href="tel:+911234567890" className="text-decoration-none text-dark">+91 12345 67890</a>
                      </div>
                    </div>




                </div>
            </div>
        </div>



                   


    </div>
    <div className="col-md-4">
    <form className="container p-4 bg-blur-white rounded-3 anim-zoom" style={{maxWidth:'800px'}}>
    <div className="row">
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
          <div className="col-12">
      <label htmlFor="message" className="form-label small">Message</label>
      <textarea
        placeholder="Message"
        className="form-control bg-white p-2"
        id="message"
        rows="2"
        required
      ></textarea>
    </div>
      <div className="col-md-12 d-none">
        <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div className="col-12 text-center mt-4">
        <button type="submit" className="btn btn-light rounded-5 border-secondary px-3 py-2 float-end">Submit</button>
      </div>
    </div>
    </form>
    </div>
  </div>
   <h2 className="my-5 fs-1 fw-normal lead border-bottom border-secondary pb-3 anim-fade-left only-desk d-none">Our Global Locations</h2>

</div>



</section>

{/* 
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
</section> */}


{/* 

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
 */}

</>
  );
}
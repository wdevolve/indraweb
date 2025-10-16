import Link from "next/link";
import Image from 'next/image';
import Script from 'next/script';
import { useEffect } from 'react';
// import { useAnimations } from "@/utils/animations";

import ASSET_VERSION from '../version';

export default function Footer() {
  // useAnimations();
    useEffect(() => {
      if (window.initScriptJS) {
        window.initScriptJS();
      }
    }, []);

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




{/* 
<div classname="offcanvas offcanvas-top" style={{marginTop:'60px'}} tabindex="-1" id="servicesMenu" aria-labelledby="servicesMenuLabel">
  <div classname="offcanvas-header">
    <h5 classname="offcanvas-title" id="servicesMenuLabel">Offcanvas top</h5>
    <button type="button" classname="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div classname="offcanvas-body">
    <div className="container"></div>
  </div>
</div> */}

<footer
  className="pt-5 full-landing-image"
  style={{
backgroundImage: `url('/images/contact-hero-bg.webp')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',minHeight:'calc(100vh - 75px)', backgroundPosition:'center center',
  }}
>

  <div className="container mx-auto px-0 mt-5 inner-water-bg">

     <div className="row px-0 mx-auto">
            <div className="col-md-6 mb-5 mb-md-0">
              <div className="rounded-top-4 rounded-end-4 text-dark p-md-5 py-md-4 d-flex flex-column h-100" style={{background:'#ffffff',backdropFilter:'blur(3px)', borderBottomLeftRadius: '0'}}>
                <div className="row g-5 px-4 px-md-0">
                  <div className="col-md-6">
                    {/* <h3 className="fs-5 mt-3">Born Global, Built for India</h3>
                     <p className="mb-0 mt-3" style={{ maxWidth: '400px' }}>
                            The idea for Indra began abroad, but its mission brought the founders back home. With water scarcity felt most acutely in India, Indra was built here, where it can have the most impact.
                          </p> */}
                             <h3 className="fs-5 mt-3">Head Office</h3>
                          <address className="mb-0 mt-2 pt-2 small">
                            Indra, 1203 1204, Fenkin 9, C5, Wagle Industrial Estate, Thane West, Thane, Maharashtra 400604 
                          </address>
                
                  </div>
                  <div className="col-md-6">
                   {/* <h3 className="fs-5 mt-3">Head Office</h3>
                          <address className="mb-0 mt-2 pt-2">
                            Indra, 1203 1204, Fenkin 9, C5, Wagle Industrial Estate, Thane West, Thane, Maharashtra 400604 
                          </address> */}
                  </div>
                </div>
                <div className="row g-5  px-4 px-md-0 flex-grow-1 d-flex align-items-center">
                  <div className="col-md-6">
                               {/* <h3 className="fs-6 mt-3 fw-light d-none">WRITE TO US</h3>
                
                          <h4 className="mt-2 d-none"><Link href="mailto:info@example.com" className="text-dark fw-normal fs-5">info@example.com</Link></h4>

                          <p className="mb-0 mt-3" style={{ maxWidth: '400px' }}>
                            With 98% of our components sourced within the country, we combine cost efficiency, reliable supply chains, and environmental accountability to deliver world-class water solutions with Indian resilience. 

                          </p>*/}

                           <h3 className="fs-5 mt-3">Manufacturing Facility</h3>
                          <address className="mb-0 mt-2 pt-2 small">
                            Indra, D10/11-12, Bhumi World Industrial Park, Mumbai - Nashik Expy, Pimplas, Bhiwandi, Maharashtra 421302 
                          </address>


                  </div>
                  <div className="col-md-6">
                    <div className="row g-5">
                      <div className="col-6">
                        <div>
                      <span className="d-block fw-light"><Link href="/products" className=" text-dark">Products</Link></span>
                      <span className="d-block fw-light"><Link href="/technology" className=" text-dark">Technology</Link></span>
                      <span className="d-block fw-light"><Link href="/industries" className=" text-dark">Industries</Link></span>
                    </div>
                      </div>
                      <div className="col-6 pe-3">
                        <div>
                          <Image
                          className="ms-auto float-end"
                  width={100}
                  height={60}
                  src="/images/others/indian-flag.webp"
                  alt="INDRA Water"
                  title="INDRA Water"
                  unoptimized
                  style={{filter:'grayscale(1)'}}
                />
                      {/* <span className="d-block lead fs-5 fw-normal"><Link href="/technology" className="nav-link text-dark">Technology</Link></span>
                      <span className="d-block lead fs-5 fw-normal"><Link href="/projects" className="nav-link text-dark">Projects</Link></span> */}
                    </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row g-5 px-4 px-md-0 align-items-end mt-auto">
                  <div className="col-md-6">
                     <span className="small">&copy; INDRA 2025</span>
                  </div>
                  <div className="col-md-6">
                    <div className="row g-5">
                      <div className="col-5">
                        <div>
                      <a href="/contact" className="text-dark"><span className="d-block">Contact</span></a>
                    </div>
                      </div>
                      <div className="col-7 pe-3">
                        <div>
                      <span className="d-block text-end">Made in India</span>
                    </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>  
              <div className="p-5 py-4 d-inline rounded-bottom-4" style={{background:'#ffffff',backdropFilter:'blur(3px)', borderBottomLeftRadius: '0'}}>
                <Image
                  width={150}
                  height={23}
                  src="/images/indra_water_logo.webp"
                  alt="INDRA Water"
                  title="INDRA Water"
                  unoptimized
                />
                </div>   
            </div>
            <div className="col-md-6">

              <div className="rounded-4 text-dark py-3" style={{background:'#fff9',backdropFilter:'blur(3px)'}}>
    
        
      <div className="row px-4 px-md-0">
        
       <form className="p-md-5 py-md-3" style={{ maxWidth: '800px' }}>
  <h3 className="fs-6 mb-4">Contact us</h3>
  <div className="row g-2">
    <div className="col-md-6">
      <label htmlFor="firstName" className="form-label small d-none">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        className="form-control bg-white p-2"
        id="firstName"
        required
      />
    </div>
    <div className="col-md-6">
      <label htmlFor="lastName" className="form-label small d-none">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        className="form-control bg-white p-2"
        id="lastName"
        required
      />
    </div>

    {/* Email full width */}
    <div className="col-12">
      <label htmlFor="email" className="form-label small d-none">Email</label>
      <input
        type="email"
        placeholder="Email"
        className="form-control bg-white p-2"
        id="email"
        required
      />
    </div>

    {/* Your Company */}
    <div className="col-12">
      <label htmlFor="text" className="form-label small d-none">Your Company</label>
      <input
        type="text"
        placeholder="Your Company"
        className="form-control bg-white p-2"
        id="company"
        required
      />
    </div>


    {/* Message full width */}
    <div className="col-12">
      <label htmlFor="message" className="form-label small d-none">Message</label>
      <textarea
        placeholder="Message"
        className="form-control bg-white p-2"
        id="message"
        rows="2"
        required
      ></textarea>
    </div>

    {/* Upload field */}
    {/* <div className="col-12 d-none">
      <label htmlFor="fileUpload" className="form-label small d-none">Upload File</label>
      <input
        type="file"
        className="form-control bg-white p-2"
        id="fileUpload"
      />
    </div> */}
<div className="col-md-12 mt-3">
        <p className="small d-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    <div className="col-12 text-center mt-4">
      <button
        type="submit"
        className="ms-auto d-block btn shadow-sm btn-transparent active rounded-2 fs-6 px-3 py-2"
      >
        Submit
      </button>
    </div>
  </div>
</form>

      </div>
    </div>

              </div>
            </div>
    
  </div>

</footer>




  {/* New footer starts */}
{/* <div className="container py-4 mb-3 footer-v2 d-none">
  <div className="row w-100 py-5">
    <div className="col-12 text-center py-4 border-top border-bottom" style={{borderColor:'rgb(229 229 229) ! important'}}>
      <Link href="/home-new" className="navbar-brand">
                <Image
                  className="mx-auto my-2"
                  width={150}
                  height={23}
                  src="/images/indra_water_logo.webp"
                  alt="INDRA Water"
                  title="INDRA Water"
                  priority
                  unoptimized
                />
              </Link>
    </div>
  </div>



  <div className="row border-bottom" style={{borderColor:'rgb(229 229 229) ! important'}}>
          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <h5 className="menu-title mb-2">Heading One</h5>
            <ul className="list-unstyled">
              <li><a href="#" >About Us</a></li>
              <li><a href="#" >Careers</a></li>
              <li><a href="#" >Blog</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <h5 className="menu-title mb-2">Heading Two</h5>
            <ul className="list-unstyled">
              <li><a href="#" >Web Design</a></li>
              <li><a href="#" >SEO</a></li>
              <li><a href="#" >Branding</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <h5 className="menu-title mb-2">Heading Three</h5>
            <ul className="list-unstyled">
              <li><a href="#" >Help Center</a></li>
              <li><a href="#" >FAQs</a></li>
              <li><a href="#" >Contact Us</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2 mb-4">
            <h5 className="menu-title mb-2">Heading Four</h5>
            <ul className="list-unstyled">
              <li><a href="#" >Privacy Policy</a></li>
              <li><a href="#" >Terms of Use</a></li>
              <li><a href="#" >Cookies</a></li>
            </ul>
          </div>

          <div className="col-12 col-md-3 col-lg-3 mb-4">
            <h5 className="mb-3">Explore the Universe with INDRA</h5>
            <p className="mb-2" style={{color:'#cccccc'}}>Subscribe to get our latest updates and industry news. We promise no spam, only value-driven content. Join a community of 10,000+ marketers.</p>
            <a
              href="https://your-signup-link.com"
              className="subscribe btn btn-primary border-0 py-2 my-3 rounded-5 px-4"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign me up <i className="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>


        <div className="row align-items-center mt-4">
          <div className="col-md-6 mb-3 mb-md-0">
            <nav className="h-menu">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-3">
                  <a href="#">Home</a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#">About</a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#">Services</a>
                </li>
                <li className="list-inline-item">
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-md-6 text-md-end text-center">
            <small>Designed by<a href="https://evolvemediasolutions.in" target="_blank" className="text-dark" rel="noopener noreferrer">
            <Image
                  className="mx-auto my-2"
                  width={30}
                  height={21.2}
                  src="https://evolvemediasolutions.in/wp-content/uploads/2023/09/Symbol-03-300x212.webp"
                  alt="Evolve Media Solutions"
                  title="Evolve Media Solutions"
                  priority
                  unoptimized
                />
            Evolve</a></small>
          </div>
        </div>
</div> */}
  {/* New footer ends */}



        {/* <div className="no-mobile-ready text-center d-none"><span className="pt-5 mt-5">Mobile version in progress...</span></div> */}
        <Script src={`/js/script.js?v=${ASSET_VERSION}`} strategy="beforeInteractive"/>

 <Script src={`/js/mail.js?v=${ASSET_VERSION}`} strategy="beforeInteractive"/>

  </>
);
  }

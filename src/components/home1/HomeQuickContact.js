
export default function HomeCounter() {

  return (
    <>
    
{/*  
<section className="position-relative">


  <div className="d-none d-lg-block position-absolute top-0 start-0 h-100" style={{ width: '50%' }}>
    <div className="w-100 h-100" style={{
      backgroundImage: `url('/images/bg1.webp')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}></div>
  </div>


  <div className="container">
    <div className="row">
      
    <div className="col-lg-6 py-5 px-4 ps-md-3 pe-md-5"></div>
      <div className="col-lg-6 py-5 px-4 pe-md-3 ps-md-5">
        <h3 className="mb-5 mt-5 fw-light lead fs-1">Quick Contact</h3>
        <form className="mb-5">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" id="name" className="form-control bg-light rounded-0 py-3" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" id="email" className="form-control bg-light rounded-0 py-3" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" className="form-control bg-light rounded-0 py-3" rows="4" placeholder="Your message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary qc-submit py-3 px-5">Send Message</button>
        </form>
      </div>

    </div>
  </div>
</section>
 */}

<section
  className="py-5 text-white"
  style={{
    background: 'linear-gradient(to right bottom, #07468e, #463cb5, #af2eed)',
  }}
>
  <div className="container bg-white text-dark p-md-5 my-md-5">
    <div className="row align-items-center">
      {/* Text */}
      <div className="col-md-8 mb-3 mb-md-0">
        <h2 className="fs-6 fw-light">Subscribe to Our Newsletter</h2>
        <h5 className="mb-3 lead fs-1 fw-normal">Get access to Pacific Partners team</h5>
        <p>Please click on the contact us button and we will be sure to respond as quicky as possible.</p>
        <form className="d-block">
          <input
            type="email"
            className="form-control me-2 px-4 py-3"
            placeholder="Enter your email"
            required
          />
          <button type="submit" className="btn btn-dark rounded-5 px-5 py-3 btn-medium mt-4">
            Subscribe
          </button>
        </form>
      </div>

      {/* Subscribe Form */}
      <div className="col-md-4">
        
      </div>
    </div>
  </div>
</section>



    </>
  );
}

// import { useAnimations } from "@/utils/animations";

export default function HomeQuickContact() {
// useAnimations();
  return (
    <>

<section
  className="py-5 text-white"
  style={{
backgroundImage: `url('/images/quick-contact-bg.webp')`,
  }}
>

  <div className="container">

     <div className="row g-5">
            <div className="col-md-6 rounded-4 p-5 text-dark" style={{background:'#c0e3fd',backdropFilter:'blur(3px)'}}>
              <h2 className="display-6 lead">Lorem Ipsum</h2>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="col-md-6">

              <div className="rounded-4 text-dark py-3" style={{background:'#fff9',backdropFilter:'blur(3px)'}}>
    
        
      <div className="row">
        
        <form className="container p-md-5 py-md-3" style={{maxWidth:'800px'}}>
          <h3 className="fs-6 mb-4">Contact us</h3>
    <div className="row g-2">
      <div className="col-md-6">
        <label htmlFor="firstName" className="form-label small d-none">First Name</label>
        <input type="text" placeholder="First Name" className="form-control bg-white p-2" id="firstName" required/>
      </div>
      <div className="col-md-6">
        <label htmlFor="lastName" className="form-label small d-none">Last Name</label>
        <input type="text" placeholder="Last Name" className="form-control bg-white p-2" id="lastName"  required/>
      </div>
      <div className="col-md-6">
        <label htmlFor="company" className="form-label small d-none">Company</label>
        <input type="text" placeholder="Company" className="form-control bg-white p-2" id="company" />
      </div>
      <div className="col-md-6">
        <label htmlFor="jobTitle" className="form-label small d-none">Job Title</label>
        <input type="text" placeholder="Job Title" className="form-control bg-white p-2" id="jobTitle" />
      </div>
      <div className="col-md-6">
        <label htmlFor="email" className="form-label small d-none">Email</label>
        <input type="email" placeholder="Email" className="form-control bg-white p-2" id="email"  required/>
      </div>
      <div className="col-md-6">
        <label htmlFor="phone" className="form-label small d-none">Phone Number</label>
        <input type="tel" placeholder="Phone Number" className="form-control bg-white p-2" id="phone" />
      </div>
      <div className="col-md-12">
        <p className="small">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
      <div className="col-12 text-center mt-4">
        <button type="submit" className="ms-auto d-block btn shadow-sm btn-transparent  active rounded-2 fs-6 px-3 py-2">Submit</button>
      </div>
    </div>
    </form>
      </div>
    </div>

              </div>
            </div>
    
  </div>
</section>



    </>
  );
}

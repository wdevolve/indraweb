import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";

export default function AboutTeam() {
// useAnimations();
  return (
    <>

  <section className="container-fluid px-0 mx-0 w-100 py-5 mb-0 bg-grad-gray-blue">
  <div className="container">

        <div className="row g-0">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fw-normal lead fs-1 border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Our Team</h2>
              <p className="fs-4 text-secondary">Our team is 65+ <span className="text-grad">professional specialists</span>.</p>
            </div>
          </div>


    <div className="row my-4">
      <div className="col-md-6 pe-md-5 anim-fade-left">

        <div>
          <p className="lead mb-3">The need for water conservation has never been greater — and it’s not slowing down. We can’t afford distractions or disruptions.</p> 

<p className="lead mb-3">That’s why our team is always on the move. We’re out there, in the field, in the dirt. Always exploring, adapting, and evolving to deliver on the promise of sustainable, compact, and impactful wastewater management.</p>

<p className="lead mb-5">Indra. Powering the electric now of water.</p>
          <div className="only-desk">
            <div className="d-flex">
              <Image width={90} height={90} className="img-fluid rounded-circle shadow-sm anim-zoom" src="/images/team-1.jpg"/>
              <Image width={90} height={90} className="img-fluid rounded-circle shadow-sm anim-zoom" style={{marginLeft:'-20px'}} src="/images/team-2.jpg"/>
              <Image width={90} height={90} className="img-fluid rounded-circle shadow-sm anim-zoom" style={{marginLeft:'-20px'}} src="/images/team-3.jpg"/>
              <Image width={90} height={90} className="img-fluid rounded-circle shadow-sm anim-zoom" style={{marginLeft:'-20px'}} src="/images/team-4.jpg"/>
              <Image width={90} height={90} className="img-fluid rounded-circle shadow-sm anim-zoom" style={{marginLeft:'-20px'}} src="/images/team-5.jpg"/>
              <Image width={90} height={90} className="img-fluid rounded-circle shadow-sm anim-zoom" style={{marginLeft:'-20px'}} src="/images/team-6.jpg"/>
              <span className="rounded-circle border bg-white shadow-sm d-flex align-items-center text-center anim-zoom" style={{height:'90px',width:'90px', marginLeft:'-20px'}}>
                <span className="display-6 lead fs-5 fw-medium d-block mx-auto"><span className="counter" data-target="65">0</span>+</span>
              </span>
                    </div>
          </div>

          <div className="only-mob">
            <div className="d-flex">
              <Image width={40} height={40} style={{width:'60px',height:'60px'}} className="img-fluid rounded-circle shadow-sm anim-zoom" src="/images/team-1.jpg"/>
              <Image width={40} height={40} className="img-fluid rounded-circle shadow-sm anim-zoom" style={{width:'60px',height:'60px',marginLeft:'-20px'}} src="/images/team-2.jpg"/>
              <Image width={40} height={40} className="img-fluid rounded-circle shadow-sm anim-zoom" style={{width:'60px',height:'60px',marginLeft:'-20px'}} src="/images/team-3.jpg"/>
              <Image width={40} height={40} className="img-fluid rounded-circle shadow-sm anim-zoom" style={{width:'60px',height:'60px',marginLeft:'-20px'}} src="/images/team-4.jpg"/>
              <Image width={40} height={40} className="img-fluid rounded-circle shadow-sm anim-zoom" style={{width:'60px',height:'60px',marginLeft:'-20px'}} src="/images/team-5.jpg"/>
              <Image width={40} height={40} className="img-fluid rounded-circle shadow-sm anim-zoom" style={{width:'60px',height:'60px',marginLeft:'-20px'}} src="/images/team-6.jpg"/>
              <span className="rounded-circle border bg-white shadow-sm d-flex align-items-center text-center anim-zoom" style={{height:'60px',width:'60px', marginLeft:'-20px'}}>
                <span className="display-6 lead fs-5 fw-medium d-block mx-auto"><span className="counter" data-target="65">0</span>+</span>
              </span>
          </div>
          </div>
        </div>

      </div>
      <div className="col-md-6 anim-zoom mt-5 mt-md-0">
        
          <img src="/images/team.jpg" alt="Example" className="rounded-4" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />


        </div>    
    </div>
  </div>

</section>


</>
);
}
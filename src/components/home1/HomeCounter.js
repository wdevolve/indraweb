
export default function HomeCounter() {

  return (
    <>
    
    <section className="position-relative overflow-hidden full-landing-image" style={{ minHeight: '100px',zIndex:'1' }}>


{/* Overlay Content */}
<div
  className="container mx-5 mx-auto inner-water-bg"
  
>
  <div className="row w-100">
  </div>
</div>
</section>

<section className="bg-light py-5 px-3 z-3" style={{ minHeight: '200px' }}>
 <div
  className="counter-section container py-5 bg-white mx-auto d-flex align-items-center justify-content-center rounded-0 my-5 inner-water-bg shadow z-3"

>
  <div className="row w-100 px-0 px-md-5 g-4">
    <div className="col-md-6 pe-0 pe-md-5">
      <p className="text-secondary">
        Real-Time Impact Counter
      </p>
<h2 className="display-6 lead">Take back all the answers. And a great test ride experience.</h2>

    </div>
    <div className="col-md-6 d-flex align-items-end">
      
        <div className="row w-100 ms-0 ms-md-5 g-4">
            <div className="col-md-6 px-0 px-md-3">
              
            <span className="display-4 text-primary lead d-block"><span className="counter" data-target="20000">0</span>+</span>
            <span className="text-secondary">Liters of water recycled</span>
            </div>
            <div className="col-md-6 px-0 px-md-3">
              
<span className="display-4 text-primary lead d-block"><span className="counter" data-target="500">0</span>+</span>
            <span className="text-secondary">Communities reached</span>

            </div>
          </div>

    </div>
  </div>
</div>

</section>

    </>
  );
}

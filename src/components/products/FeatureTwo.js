import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";

export default function FeatureTwo() {
// useAnimations();
  return (
    <>

     <section className="pt-5 pb-0" style={{background:'transparent'}}>
        <div className="container"  style={{zIndex:'-1', position:'relative'}}>
          
          <div className="row">
            <div className="col anim-fade-left">
              <h2 className="mb-3 fs-1 fw-normal lead border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Key Features of ElectroX S Series</h2>
              <p className="fs-4 text-secondary">What makes our systems smart</p>
            </div>
          </div>

        <div className="row mt-3">
          <div className="col-md-7 pe-md-5 anim-fade-left">
            <p className="pe-md-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p className="pe-md-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

          </div>
          <div className="col-md-5 ps-md-5 anim-fade-right">

            <div className="row">
              <div className="col w-25">
                  <video
                    className=""
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{width:'135px'}}
                  >
                    <source src="/videos/water-bubble-1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
              </div>

              <div className="col-auto ps-md-5 w-75 d-flex align-items-center">
                <div className="d-flex w-100 align-items-center">
                  <div className="w-100">
                    <h3 className="d-block lead fw-medium fs-4 border-bottom border-secondary pb-3 mb-3">Feature One</h3>
                    <h4 className="lead fw-medium fs-5">Lorem ipsum one</h4>
                  </div>
                </div>
              </div>
            </div>


            <div className="row">
              <div className="col-auto w-25">
                  <video
                    className=""
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{width:'135px'}}
                  >
                    <source src="/videos/water-bubble-2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
              </div>

              <div className="col-auto ps-md-5 w-75 d-flex align-items-center">
                <div className="d-flex w-100 align-items-center">
                  <div className="w-100">
                    <h3 className="lead fw-medium fs-4 border-bottom border-secondary pb-3 mb-3">Feature One</h3>
                    <h4 className="lead fw-medium fs-5">Lorem ipsum one</h4>
                  </div>
                </div>
              </div>
            </div>


                        <div className="row">
              <div className="col-auto w-25">
                  <video
                    className=""
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{width:'135px'}}
                  >
                    <source src="/videos/water-bubble-3.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
              </div>
              <div className="col-auto ps-md-5 w-75 d-flex align-items-center">
                <div className="d-flex w-100 align-items-center">
                  <div className="w-100">
                    <h3 className="lead fw-medium fs-4 border-bottom border-secondary pb-3 mb-3">Feature One</h3>
                    <h4 className="lead fw-medium fs-5">Lorem ipsum one</h4>
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

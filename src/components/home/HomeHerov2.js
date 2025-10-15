import dynamic from 'next/dynamic';
// import { useAnimations } from "@/utils/animations";

const HomeModelViewer = dynamic(() => import('@/components/home/HomeModelViewer'), { ssr: false });

export default function HomeHerov2() {
// useAnimations();
  return (
    <>
    

    <section className="" style={{background: 'linear-gradient(180deg, #e5eef0 0%, #f8f9fa 50%, #eeeef3 100%)'}}>
    
    <div className="container" style={{minHeight:'100vh', paddingTop:'100px'}}>
        <div className="row w-100">
            <div className="col-md-4">
              <h2 className="display-2 text-dark mt-5 py-5 border-start rounded-5 ps-5" style={{borderColor:'#06478e ! important'}}>Lorem</h2>
              <p style={{marginTop:'100px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <button className="btn subscribe text-light"> Lorem ipsum</button>
            </div>

            <div className="col-md-4 pt-5" style={{ paddingTop: '60px', position: 'sticky', top: '60px' }}>
              <div  id="stickyBox">
                <HomeModelViewer />
              </div>
            </div>


            <div className="col-md-4">
              <h2 className="display-2 text-dark text-end  mt-5 py-5  border-end rounded-5 pe-5" style={{borderColor:'#af2dea ! important'}}>Ipsum</h2>
            </div>

            <div className="col-12 py-5 d-none">
              <div className="col-7 my-5 py-5">
                <h3 className="display-5 text-dark">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
              </div>

              <div className="row text-dark">
                <div className="col-md-4">

                <div className="row mb-3 align-items-center border-bottom border-light pb-3">
                  {/* Left Icon Column */}
                  <div className="col-auto">
                    <i className="bi bi-arrow-up-right-circle display-4"></i>
                  </div>

                  {/* Right Text Column */}
                  <div className="col">
                    <h4 className="">Lorem ipsum</h4>
                  </div>
                </div>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>

                <div className="row mb-3 align-items-center border-bottom border-light pb-3">
                  {/* Left Icon Column */}
                  <div className="col-auto">
                    <i className="bi bi-arrow-up-right-circle display-4"></i>
                  </div>

                  {/* Right Text Column */}
                  <div className="col">
                    <h4 className="">Lorem ipsum</h4>
                  </div>
                </div>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>

                <div className="row mb-3 align-items-center border-bottom border-light pb-3">
                  {/* Left Icon Column */}
                  <div className="col-auto">
                    <i className="bi bi-arrow-up-right-circle display-4"></i>
                  </div>

                  {/* Right Text Column */}
                  <div className="col">
                    <h4 className="">Lorem ipsum</h4>
                  </div>
                </div>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>

                <div className="row mb-3 align-items-center border-bottom border-light pb-3">
                  {/* Left Icon Column */}
                  <div className="col-auto">
                    <i className="bi bi-arrow-up-right-circle display-4"></i>
                  </div>

                  {/* Right Text Column */}
                  <div className="col">
                    <h4 className="">Lorem ipsum</h4>
                  </div>
                </div>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>

                <div className="row mb-3 align-items-center border-bottom border-light pb-3">
                  {/* Left Icon Column */}
                  <div className="col-auto">
                    <i className="bi bi-arrow-up-right-circle display-4"></i>
                  </div>

                  {/* Right Text Column */}
                  <div className="col">
                    <h4 className="">Lorem ipsum</h4>
                  </div>
                </div>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>                                

                </div>
                <div className="col-md-4"></div>
                <div className="col-md-4">
                <div className="row mb-3 align-items-center border-bottom border-light pb-3">
                  {/* Left Icon Column */}
                  <div className="col-auto">
                    <i className="bi bi-arrow-up-right-circle display-4"></i>
                  </div>

                  {/* Right Text Column */}
                  <div className="col">
                    <h4 className="">Lorem ipsum</h4>
                  </div>
                </div>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>

                <div className="row mb-3 align-items-center border-bottom border-light pb-3">
                  {/* Left Icon Column */}
                  <div className="col-auto">
                    <i className="bi bi-arrow-up-right-circle display-4"></i>
                  </div>

                  {/* Right Text Column */}
                  <div className="col">
                    <h4 className="">Lorem ipsum</h4>
                  </div>
                </div>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>

                <div className="row mb-3 align-items-center border-bottom border-light pb-3">
                  {/* Left Icon Column */}
                  <div className="col-auto">
                    <i className="bi bi-arrow-up-right-circle display-4"></i>
                  </div>

                  {/* Right Text Column */}
                  <div className="col">
                    <h4 className="">Lorem ipsum</h4>
                  </div>
                </div>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>

                <div className="row mb-3 align-items-center border-bottom border-light pb-3">
                  {/* Left Icon Column */}
                  <div className="col-auto">
                    <i className="bi bi-arrow-up-right-circle display-4"></i>
                  </div>

                  {/* Right Text Column */}
                  <div className="col">
                    <h4 className="">Lorem ipsum</h4>
                  </div>
                </div>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>

                <div className="row mb-3 align-items-center border-bottom border-light pb-3">
                  {/* Left Icon Column */}
                  <div className="col-auto">
                    <i className="bi bi-arrow-up-right-circle display-4"></i>
                  </div>

                  {/* Right Text Column */}
                  <div className="col">
                    <h4 className="">Lorem ipsum</h4>
                  </div>
                </div>
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                </div>
              </div>

                <div id="sentinel" style={{ height: '1px' }}></div>

            </div>
        </div>
    </div>

</section>



    </>
  );
}

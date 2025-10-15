import Image from 'next/image';
// import { useAnimations } from "@/utils/animations";
import FeatureOne from './FeatureOne'
import FeatureTwo from './FeatureTwo'
import FeatureThree from './FeatureThree'
import FeatureFour from './FeatureFour'
import FeatureFive from './FeatureFive'
import FeatureSix from './FeatureSix'

export default function ProductTabs() {
  // useAnimations();
  return (
   <>

<section className="pt-5 pb-0 bg-grad-blue-gray" id="products">
        <div className="container">
          
          <div className="row mb-0 anim-fade-left">
            <div className="col">
              <h2 className="mb-3 fs-1 lead fw-normal border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Dynamic Product Tabs</h2>
              <p className="fs-4 text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>


          </div>


          <div className="container">
            <ul className="nav nav-underline mt-4" id="productsTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="seriesa-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#seriesa"
                  type="button"
                  role="tab"
                  aria-controls="seriesa"
                  aria-selected="true"
                >
                  ElectroX Nano
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="seriesb-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#seriesb"
                  type="button"
                  role="tab"
                  aria-controls="seriesb"
                  aria-selected="false"
                >
                  ElectroX S01
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="seriesc-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#seriesc"
                  type="button"
                  role="tab"
                  aria-controls="seriesc"
                  aria-selected="false"
                >
                  ElectroX S02
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="seriesd-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#seriesd"
                  type="button"
                  role="tab"
                  aria-controls="seriesd"
                  aria-selected="false"
                >
                  ElectroX L01
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="seriese-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#seriese"
                  type="button"
                  role="tab"
                  aria-controls="seriesd"
                  aria-selected="false"
                >
                  ElectroX L02
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="seriesf-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#seriesf"
                  type="button"
                  role="tab"
                  aria-controls="seriesd"
                  aria-selected="false"
                >
                  PhloX
                </button>
              </li>
            </ul>
          </div>


          <div className="tab-content py-5">
            <div
              className="tab-pane fade show active"
              id="seriesa"
              role="tabpanel"
              aria-labelledby="seriesa-tab"
            >
              

              <div className="container">
                  <div className="row">
                    <div className="col-md-6 pe-md-5 anim-fade-left">
                      <h3 className="lead fw-bold fs-5 border-bottom border-secondary pb-3 mb-3">ElectroX Nano</h3>
                         <p className="lead">Our smartest compact unit, built for labs, R&D centers, and pilot testing. Delivers full ElectroX performance in a portable, space-efficient design.</p>
                          <table className="table mt-3 lead" style={{ background: 'transparent' }}>
                            <tbody>
                              <tr>
                                <td className="py-3" style={{ background: 'transparent' }}>Flow Capacity</td>
                                <td  className="py-3 text-end" style={{ background: 'transparent' }}>2 KLPD</td>
                              </tr>
                              <tr>
                                <td  className="py-3" style={{ background: 'transparent' }}>Footprint</td>
                                <td className="py-3 text-end" style={{ background: 'transparent' }}>30 sq.ft.</td>
                              </tr>
                              <tr>
                                <td  className="py-3" style={{ background: 'transparent' }}>Electrode Replacement Time</td>
                                <td className="py-3 text-end" style={{ background: 'transparent' }}>0.8 Hrs</td>
                              </tr>
                            </tbody>
                          </table>

                    </div>
                    <div className="col-md-6 ps-md-5 anim-zoom">
                      <Image
                        src={`/images/products/electrox-nano.jpg`}
                        alt="Media coverage"
                        width={0}
                        height={0}
                        className="media-slide-image rounded-3 float-end"
                        style={{width:'auto',height:'350px',objectFit:'cover'}}
                      />
                    </div>
                  </div>
              </div>
              {/* <FeatureOne/> */}



            </div>
            <div
              className="tab-pane fade"
              id="seriesb"
              role="tabpanel"
              aria-labelledby="seriesb-tab"
            >


              <div className="container">
                  <div className="row">
                    <div className="col-md-6 pe-md-5 anim-fade-left">
                      <h3 className="lead fw-bold fs-5 border-bottom border-secondary pb-3 mb-3">ElectroX S01 - Compact, Scalable Units</h3>
                         <p className="lead">A plug-and-play pilot system for on-site trials and small facilities. Make it a right choice for rapid validation and short period deployment in spaces where every square foot counts.</p>
                          <table className="table mt-3 lead" style={{ background: 'transparent' }}>
                            <tbody>
                              <tr>
                                <td className="py-3" style={{ background: 'transparent' }}>Flow Capacity</td>
                                <td  className="py-3 text-end" style={{ background: 'transparent' }}>10 KLPD</td>
                              </tr>
                              <tr>
                                <td  className="py-3" style={{ background: 'transparent' }}>Footprint</td>
                                <td className="py-3 text-end" style={{ background: 'transparent' }}>80 sq.ft.</td>
                              </tr>
                              <tr>
                                <td  className="py-3" style={{ background: 'transparent' }}>Electrode Replacement Time</td>
                                <td className="py-3 text-end" style={{ background: 'transparent' }}>1.5 Hrs</td>
                              </tr>
                            </tbody>
                          </table>
                                              </div>
                    <div className="col-md-6 ps-md-5 anim-zoom">
                      <Image
                        src={`/images/products/electrox-s-series.jpg`}
                        alt="Media coverage"
                        width={0}
                        height={0}
                        className="media-slide-image rounded-3 float-end"
                        style={{width:'auto',height:'350px',objectFit:'cover'}}
                      />
                    </div>
                  </div>
              </div>
              {/* <FeatureTwo/> */}
               




            </div>
            <div
              className="tab-pane fade"
              id="seriesc"
              role="tabpanel"
              aria-labelledby="seriesc-tab"
            >



                <div className="container">
                  <div className="row">
                    <div className="col-md-6 pe-md-5 anim-fade-left">
                      <h3 className="lead fw-bold fs-5 border-bottom border-secondary pb-3 mb-3">ElectroX S02</h3>
                         <p className="lead">Designed for mid-scale sites like hotels and commercial properties, S02 treats up to 200 KLD. Basement-friendly, low-maintenance, with quick electrode replacement arrangement built in.</p>
                          <table className="table mt-3 lead" style={{ background: 'transparent' }}>
                            <tbody>
                              <tr>
                                <td className="py-3" style={{ background: 'transparent' }}>Flow Capacity</td>
                                <td  className="py-3 text-end" style={{ background: 'transparent' }}>Up to 200 KLPD</td>
                              </tr>
                              <tr>
                                <td  className="py-3" style={{ background: 'transparent' }}>Footprint</td>
                                <td className="py-3 text-end" style={{ background: 'transparent' }}>25 sq.ft.</td>
                              </tr>
                              <tr>
                                <td  className="py-3" style={{ background: 'transparent' }}>Electrode Replacement Time</td>
                                <td className="py-3 text-end" style={{ background: 'transparent' }}>1.5 Hrs</td>
                              </tr>
                            </tbody>
                          </table>
                                              </div>
                    <div className="col-md-6 ps-md-5 anim-zoom">
                      <Image
                        src={`/images/products/electrox-s02.png`}
                        alt="Media coverage"
                        width={0}
                        height={0}
                        className="media-slide-image rounded-3 float-end"
                        style={{width:'auto',height:'350px',objectFit:'cover'}}
                      />
                    </div>
                  </div>
              </div>
              {/* <FeatureThree/> */}

                    

            </div>
            <div
              className="tab-pane fade"
              id="seriesd"
              role="tabpanel"
              aria-labelledby="seriesd-tab"
            >



                <div className="container">
                  <div className="row">
                    <div className="col-md-6 pe-md-5 anim-fade-left">
                      <h3 className="lead fw-bold fs-5 border-bottom border-secondary pb-3 mb-3">ElectroX L01 - Large Capacity Systems</h3>
                         <p className="lead">A high-capacity modular unit for industrial estates, STPs, and centralized plants. Combines large throughput with a minimal footprint and low O&M. with minimal human intervention required in operation.</p>
                          <table className="table mt-3 lead" style={{ background: 'transparent' }}>
                            <tbody>
                              <tr>
                                <td className="py-3" style={{ background: 'transparent' }}>Flow Capacity</td>
                                <td  className="py-3 text-end" style={{ background: 'transparent' }}>Up to 500 KLPD</td>
                              </tr>
                              <tr>
                                <td  className="py-3" style={{ background: 'transparent' }}>Footprint</td>
                                <td className="py-3 text-end" style={{ background: 'transparent' }}>75 sq.ft.</td>
                              </tr>
                              <tr>
                                <td  className="py-3" style={{ background: 'transparent' }}>Electrode Replacement Time</td>
                                <td className="py-3 text-end" style={{ background: 'transparent' }}>3.5 Hrs</td>
                              </tr>
                            </tbody>
                          </table>
                                              </div>
                    <div className="col-md-6 ps-md-5 anim-zoom">
                      <Image
                        src={`/images/products/electrox-l-series.jpg`}
                        alt="Media coverage"
                        width={0}
                        height={0}
                        className="media-slide-image rounded-3 float-end"
                        style={{width:'auto',height:'350px',objectFit:'cover'}}
                      />
                    </div>
                  </div>
              </div>
              {/* <FeatureFour/> */}
                    

            </div>
                        <div
              className="tab-pane fade"
              id="seriese"
              role="tabpanel"
              aria-labelledby="seriese-tab"
            >



                <div className="container">
                  <div className="row">
                    <div className="col-md-6 pe-md-5 anim-fade-left">
                      <h3 className="lead fw-bold fs-5 border-bottom border-secondary pb-3 mb-3">ElectroX L02</h3>
                         <p className="lead">Our flagship system for industrial and municipal needs. Fully plug-and-play, scalable in parallel or series, and built for continuous, reliable performance. Comes along with a dedicated electrode replacement unit to.</p>
                          <table className="table mt-3 lead" style={{ background: 'transparent' }}>
                            <tbody>
                              <tr>
                                <td className="py-3" style={{ background: 'transparent' }}>Flow Capacity</td>
                                <td  className="py-3 text-end" style={{ background: 'transparent' }}>Up to 1000 KLPD</td>
                              </tr>
                              <tr>
                                <td  className="py-3" style={{ background: 'transparent' }}>Footprint</td>
                                <td className="py-3 text-end" style={{ background: 'transparent' }}>100 sq.ft.</td>
                              </tr>
                              <tr>
                                <td  className="py-3" style={{ background: 'transparent' }}>Electrode Replacement Time</td>
                                <td className="py-3 text-end" style={{ background: 'transparent' }}>3.5 Hrs</td>
                              </tr>
                            </tbody>
                          </table>
                                              </div>
                    <div className="col-md-6 ps-md-5 anim-zoom">
                      <Image
                        src={`/images/products/electrox-l02.png`}
                        alt="Media coverage"
                        width={0}
                        height={0}
                        className="media-slide-image rounded-3 float-end"
                        style={{width:'auto',height:'350px',objectFit:'cover'}}
                      />
                    </div>
                  </div>
              </div>
              {/* <FeatureFive/> */}

                    

            </div>
            <div
              className="tab-pane fade"
              id="seriesf"
              role="tabpanel"
              aria-labelledby="seriesf-tab"
            >

                <div className="container">
                  <div className="row">
                    <div className="col-md-6 pe-md-5 anim-fade-left">
                      <h3 className="lead fw-bold fs-5 border-bottom border-secondary pb-3 mb-3">PhloX</h3>
                         <p className="lead">A customizable skid-based downstream unit for solid-liquid separation post ElectroX. Integrates seamlessly with clarifiers, tube settlers, or membrane systems to achieve the desired water quality.</p>
                          {/* <table className="table mt-3 lead" style={{ background: 'transparent' }}>
                            <tbody>
                             <tr>
                                <td className="py-3" style={{ background: 'transparent' }}>Flow Capacity</td>
                                <td  className="py-3 text-end" style={{ background: 'transparent' }}>2 KLPD</td>
                              </tr>
                              <tr>
                                <td  className="py-3" style={{ background: 'transparent' }}>Footprint</td>
                                <td className="py-3 text-end" style={{ background: 'transparent' }}>30 sq.ft.</td>
                              </tr>
                              <tr>
                                <td  className="py-3" style={{ background: 'transparent' }}>Electrode Replacement Time</td>
                                <td className="py-3 text-end" style={{ background: 'transparent' }}>0.8 Hrs</td>
                              </tr>
                            </tbody>
                          </table> */}
                                              </div>
                    <div className="col-md-6 ps-md-5 anim-zoom">
                      <Image
                        src={`/images/products/phlox.jpg`}
                        alt="Media coverage"
                        width={0}
                        height={0}
                        className="media-slide-image rounded-3 float-end"
                        style={{width:'auto',height:'350px',objectFit:'cover'}}
                      />
                    </div>
                  </div>
              </div>
              {/* <FeatureSix/> */}

                    

            </div>

          </div>
</section>

    </>
  )
}

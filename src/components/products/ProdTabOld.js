import Head from 'next/head';
import SEO from '../components/SEO'
import Script from 'next/script';
import Image from 'next/image';

import ASSET_VERSION from '../version';
import FooterScripts from '../components/FooterScripts';

import IndHero from '../components/industries/IndHero'
import IndWhatWeDo from '../components/industries/IndWhatWeDo'
import IndPeriodicTable from '../components/industries/IndPeriodicTable'
import IndCounter from '../components/industries/IndCounter'
import IndPhotoSlide from '../components/industries/IndPhotoSlide'
import TechTreatmentSystems from '../components/technology/TechTreatmentSystems'
import TechProcessIntegration from '../components/technology/TechProcessIntegration'
import ProjIndustriesSlide from '../components/projects/ProjIndustriesSlide'
import ProjCaseStudyDownload from '../components/projects/ProjCaseStudyDownload'
import TechCompetitiveMoat from '../components/technology/TechCompetitiveMoat'

export default function Industries() {
  return (
   <>
      <Head>
        <title>Industries | INDRA</title>
      </Head>
      <SEO title="Industries | MySite" description="Welcome to my Next.js website." />
      <link rel="stylesheet" href={`/css/ind.css?v=${ASSET_VERSION}`} />
      <link rel="stylesheet" href={`/css/tech.css?v=${ASSET_VERSION}`} />
      <link rel="stylesheet" href={`/css/proj.css?v=${ASSET_VERSION}`} />


<section className="pb-0" style={{paddingTop:'130px'}}>
        <div className="container">
          <div className="row mb-0">
            <div className="col">
              <h2 className="mb-3 fs-1 lead fw-normal border-bottom border-secondary pb-3" style={{maxWidth:'100%'}}>
                Industries</h2>
              <p className="fs-4 text-secondary">Real results in real industries</p>
            </div>
          </div>
          </div>


          <div className="container">
            <ul className="nav nav-tabs mt-2 row row-cols-1 row-cols-sm-3 row-cols-md-3 g-3 border-0" id="industriesTab" role="tablist">
              <li className="col nav-item" role="presentation">
                <button
                  className="nav-link active w-100 rounded-2 border border-dark text-start lead"
                  id="industries-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#industries"
                  type="button"
                  role="tab"
                  aria-controls="industries"
                  aria-selected="true"
                >
                  Industries
                </button>
              </li>
              <li className="col nav-item" role="presentation">
                <button
                  className="nav-link w-100 rounded-2 border border-dark text-start lead"
                  id="technology-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#technology"
                  type="button"
                  role="tab"
                  aria-controls="technology"
                  aria-selected="false"
                >
                  Technology
                </button>
              </li>
              <li className="col nav-item" role="presentation">
                <button
                  className="nav-link w-100 rounded-2 border border-dark text-start lead"
                  id="projects-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#projects"
                  type="button"
                  role="tab"
                  aria-controls="projects"
                  aria-selected="false"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>


          <div className="tab-content my-4">
            <div
              className="tab-pane fade show active"
              id="industries"
              role="tabpanel"
              aria-labelledby="industries-tab"
            >
              

              <div className="container">
                <div className="mb-2 media-container rounded-3">
                  <div className="media-overlay-tab p-4">
                    <h3 className="fs-4 text-white fw-medium lead text-shadow pb-1 tech-slide-h3">
                      Industries
                    </h3>
                    <hr
                      className="border-white border-1 my-2 tech-slide-hr"
                      style={{ zIndex: 999, position: 'relative', opacity: 1 }}
                    />
                    <p className="text-end text-white">Lorem Ipsum</p>
                  </div>
                  <Image
                    src={`/images/industries-bg.jpg`}
                    alt="Media coverage"
                    width={0}
                    height={0}
                    className="media-slide-image rounded-3"
                    style={{width:'100%',height:'450px',objectFit:'cover'}}
                  />
                </div>
              </div>




            </div>
            <div
              className="tab-pane fade"
              id="technology"
              role="tabpanel"
              aria-labelledby="technology-tab"
            >


              <div className="container">
                <div className="mb-2 media-container rounded-3">
                  <div className="media-overlay-tab p-4">
                    <h3 className="fs-4 text-white fw-medium lead text-shadow pb-1 tech-slide-h3">
                      Technology
                    </h3>
                    <hr
                      className="border-white border-1 my-2 tech-slide-hr"
                      style={{ zIndex: 999, position: 'relative', opacity: 1 }}
                    />
                    <p className="text-end text-white">Lorem Ipsum</p>
                  </div>
                  <Image
                    src={`/images/technology-bg.jpg`}
                    alt="Media coverage"
                    width={0}
                    height={0}
                    className="media-slide-image rounded-3"
                    style={{width:'100%',height:'450px',objectFit:'cover'}}
                  />
                </div>
              </div>
              
                    <div className="first-section"><TechTreatmentSystems/></div>
                    <TechCompetitiveMoat/>
                    <TechProcessIntegration/>




            </div>
            <div
              className="tab-pane fade"
              id="projects"
              role="tabpanel"
              aria-labelledby="projects-tab"
            >



              <div className="container">
                <div className="mb-2 media-container rounded-3">
                  <div className="media-overlay-tab p-4">
                    <h3 className="fs-4 text-white fw-medium lead text-shadow pb-1 tech-slide-h3">
                      Industries
                    </h3>
                    <hr
                      className="border-white border-1 my-2 tech-slide-hr"
                      style={{ zIndex: 999, position: 'relative', opacity: 1 }}
                    />
                    <p className="text-end text-white">Projects</p>
                  </div>
                  <Image
                    src={`/images/projects-bg.jpg`}
                    alt="Media coverage"
                    width={0}
                    height={0}
                    className="media-slide-image rounded-3"
                    style={{width:'100%',height:'450px',objectFit:'cover'}}
                  />
                </div>
              </div>
                    <div className="first-section"><ProjIndustriesSlide/></div>
                    <ProjCaseStudyDownload/>

            </div>
          </div>
</section>

<FooterScripts/>
    </>
  )
}

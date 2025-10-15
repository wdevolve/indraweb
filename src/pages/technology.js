import Head from 'next/head';
import SEO from '../components/SEO'
import Script from 'next/script';
import ASSET_VERSION from '../version';
import FooterScripts from '../components/FooterScripts';

import ProdTab from '../components/products/ProdTab'
import TechHero from '../components/technology/TechHero'
import TechBenchmark from '../components/technology/TechBenchmark'
import TechWhatWeDo from '../components/technology/TechWhatWeDo'
import TechPeriodicTable from '../components/technology/TechPeriodicTable'
import TechCounter from '../components/technology/TechCounter'
import TechPhotoSlide from '../components/technology/TechPhotoSlide'
import TechTreatmentSystems from '../components/technology/TechTreatmentSystems'
import TechProcessIntegration from '../components/technology/TechProcessIntegration'
import ProjProcess from '../components/projects/ProjProcess'
import TechCompetitiveMoat from '../components/technology/TechCompetitiveMoat'
import TechCTA from '../components/technology/TechCTA'

export default function Home() {
  return (
   <>
      <Head>
        <title>Technology | INDRA</title>
      </Head>
      <SEO title="Home | MySite" description="Welcome to my Next.js website." />
      <link rel="stylesheet" href={`/css/tech.css?v=${ASSET_VERSION}`} />
            <link rel="stylesheet" href={`/css/prod.css?v=${ASSET_VERSION}`} />

             <TechHero/>
     {/* <ProdTab/> */}
      {/* <TechWhatWeDo/>
      <TechCounter/> */}
      {/* <TechTreatmentSystems/> */}
      {/* <TechCompetitiveMoat/> */}
      {/* <ProjProcess/> */}
      <TechProcessIntegration/>
      {/* <TechPhotoSlide/> */}
      {/* <TechPeriodicTable/> */}
      <TechBenchmark/>
      <TechCTA/>

<FooterScripts/>
    </>
  )
}

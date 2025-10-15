import Head from 'next/head';
import SEO from '../components/SEO'
import Script from 'next/script';
import Image from 'next/image';

import ASSET_VERSION from '../version';
import FooterScripts from '../components/FooterScripts';

import ProdTab from '../components/products/ProdTab'
import IndHero from '../components/industries/IndHero'
import IndWhatWeDo from '../components/industries/IndWhatWeDo'
import IndPeriodicTable from '../components/industries/IndPeriodicTable'
import IndCaseStudies from '../components/industries/IndCaseStudies'
import IndStoryNavigation from '../components/industries/IndStoryNavigation'
import IndStoryNavigationSlide from '../components/industries/IndStoryNavigationSlide'
import IndCTA from '../components/industries/IndCTA'
import TechProcessIntegration from '../components/technology/TechProcessIntegration'
import ProjIndustriesSlide from '../components/projects/ProjIndustriesSlide'
import TechCompetitiveMoat from '../components/technology/TechCompetitiveMoat'

export default function Industries() {
  return (
   <>
      <Head>
        <title>Industries | INDRA</title>
      </Head>
      <SEO title="Industries | MySite" description="Welcome to my Next.js website." />
      <link rel="stylesheet" href={`/css/ind.css?v=${ASSET_VERSION}`} />
      <link rel="stylesheet" href={`/css/prod.css?v=${ASSET_VERSION}`} />
      <link rel="stylesheet" href={`/css/proj.css?v=${ASSET_VERSION}`} />

    <IndHero/>
  {/* <ProdTab/> */}
<IndCaseStudies/>
<IndStoryNavigation/>
{/* <IndStoryNavigationSlide/> */}
<IndCTA/>
<FooterScripts/>
    </>
  )
}

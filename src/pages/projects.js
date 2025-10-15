import Head from 'next/head';
import SEO from '../components/SEO'
import Script from 'next/script';
import ASSET_VERSION from '../version';
import FooterScripts from '../components/FooterScripts';

import ProdTab from '../components/products/ProdTab'
import ProjHero from '../components/projects/ProjHero'
import ProjIndustriesSlide from '../components/projects/ProjIndustriesSlide'
import ProjCaseStudyDownload from '../components/projects/ProjCaseStudyDownload'
import ProjectsCTA from '../components/projects/ProjectsCTA'


export default function Home() {
  return (
   <>
      <Head>
        <title>Project | INDRA</title>
      </Head>
      <SEO title="Home | MySite" description="Welcome to my Next.js website." />
      <link rel="stylesheet" href={`/css/proj.css?v=${ASSET_VERSION}`} />
      <link rel="stylesheet" href={`/css/prod.css?v=${ASSET_VERSION}`} />

      <ProdTab/>
      <ProjHero/>
      <ProjIndustriesSlide/>
      <ProjCaseStudyDownload/>
      <ProjectsCTA/>
<FooterScripts/>
    </>
  )
}

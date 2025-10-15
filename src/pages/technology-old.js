import Head from 'next/head';
import SEO from '../components/SEO'
import Script from 'next/script';
import ASSET_VERSION from '../version';
import FooterScripts from '../components/FooterScripts';

import TechHero from '../components/technology/TechHero'
import TechWhatWeDo from '../components/technology/TechWhatWeDo'
import TechPeriodicTable from '../components/technology/TechPeriodicTable'
import TechCounter from '../components/technology/TechCounter'
import TechPhotoSlide from '../components/technology/TechPhotoSlide'

export default function Home() {
  return (
   <>
      <Head>
        <title>Technology | INDRA</title>
      </Head>
      <SEO title="Home | MySite" description="Welcome to my Next.js website." />
      <link rel="stylesheet" href={`/css/tech.css?v=${ASSET_VERSION}`} />
      <TechHero/>
      <TechWhatWeDo/>
      <TechCounter/>
      <TechPhotoSlide/>
      <TechPeriodicTable/>

<FooterScripts/>
    </>
  )
}

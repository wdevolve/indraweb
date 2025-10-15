import Head from 'next/head';
import SEO from '../components/SEO'
import Script from 'next/script';
import ASSET_VERSION from '../version';
import FooterScripts from '../components/FooterScripts';

import ProjHero from '../components/projects/ProjHero'
import ProjProcess from '../components/projects/ProjProcess'


export default function Home() {
  return (
   <>
      <Head>
        <title>Project | INDRA</title>
      </Head>
      <SEO title="Home | MySite" description="Welcome to my Next.js website." />
      <link rel="stylesheet" href={`/css/proj.css?v=${ASSET_VERSION}`} />
      <ProjHero/>
      <ProjProcess/>
      
<FooterScripts/>
    </>
  )
}

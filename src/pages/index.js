import Head from 'next/head';
import SEO from '../components/SEO'
import Script from 'next/script';
import { useEffect } from 'react';

import HomeHero from '../components/home/HomeHero';
// import HomeUSP from '../components/home/HomeUSP';
import HomeUSPVideo from '../components/home/HomeUSPVideo';
import HomeFeatures from '../components/home/HomeFeatures';
import HomeCounter from '../components/home/HomeCounter';
import HomeSectionTwo from '../components/home/HomeSectionTwo';
import HomeClients from '../components/home/HomeClients';
// import HomeProducts from '../components/home/HomeProducts';
import HomeProductsGrid from '../components/home/HomeProductsGrid';
import HomeEngagements from '../components/home/HomeEngagements';
import FooterScripts from '../components/FooterScripts';
import ASSET_VERSION from '../version';


export default function Home() {

  useEffect(() => {
    if (window.initHomeJS) {
      window.initHomeJS();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Home | INDRA</title>
      <SEO title="Home | MySite" description="Welcome to my Next.js website." />
      <link rel="stylesheet" href={`/css/home.css?v=${ASSET_VERSION}`} />
      </Head>


<HomeHero/> 
<HomeSectionTwo/>
<HomeFeatures/>
{/* <ProjProcess/> */}
{/* <HomeUnlockPerks/> */}
{/* <HomeMilestones/> */}
{/* <HomeUSP/> */}
<HomeUSPVideo/>
{/* <HomeProducts/> */}
<HomeProductsGrid/>
{/* <HomeEngagements/> */}
<HomeClients/>
<HomeCounter/>

<FooterScripts/>
<Script src={`/js/home.js?v=${ASSET_VERSION}`} strategy="beforeInteractive"/>

    </>
  );
}

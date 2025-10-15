import Head from 'next/head';
import SEO from '../components/SEO'
import Script from 'next/script';
import { useEffect } from 'react';

import HomeHero from '../components/home/HomeHero';
import HomeHero2 from '../components/home/HomeHero2';
import HomeFeatures from '../components/home/HomeFeatures';
import HomeCounter from '../components/home/HomeCounter';
import HomeMilestones from '../components/home/HomeMilestones';
import HomeClients from '../components/home/HomeClients';
import HomeProducts from '../components/home/HomeProducts';
import HomeUnlockPerks from '../components/home/HomeUnlockPerks';
import FooterScripts from '../components/FooterScripts';
import ASSET_VERSION from '../version';

export default function Home() {
  useEffect(() => {
    if (window.initHomeJS) {
      window.initHomeJS();
    }
  }, []);

  useEffect(() => {
    window.location.href = "/home-new";
  }, []);


  return (
    <>
      <Head>
        <title>Home | INDRA</title>

      </Head>
      <SEO title="Home | MySite" description="Welcome to my Next.js website." />
      <link rel="stylesheet" href={`/css/home.css?v=${ASSET_VERSION}`} />

<HomeHero/>
<HomeHero2/>
<HomeFeatures/>
<HomeUnlockPerks/>
<HomeMilestones/>
<HomeProducts/>
<HomeClients/>
<HomeCounter/>

<FooterScripts/>
<Script src={`/js/home.js?v=${ASSET_VERSION}`} strategy="beforeInteractive"/>

    </>
  );
}

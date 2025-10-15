import Header from '../components/Header'
import Footer from '../components/Footer'
import Script from 'next/script';
import SEO from '../components/SEO'
import { useEffect } from 'react';

import FooterScripts from '../components/FooterScripts';
import AboutHero from '../components/about/AboutHero';
import AboutWaterIndia from '../components/about/AboutWaterIndia';
import AboutSolving from '../components/about/AboutSolving';
import AboutSafety from '../components/about/AboutSafety';
import AboutAwards from '../components/about/AboutAwards';
import HomeQuickContact from '../components/home/HomeQuickContact';
import AboutPrinciples from '../components/about/AboutPrinciples';
import AboutTeam from '../components/about/AboutTeam';
import AboutTeam2 from '../components/about/AboutTeam2';
import AboutCTA from '../components/about/AboutCTA';
import AboutProgressTimeline from '../components/about/AboutProgressTimeline';
import AboutEngagements from '../components/about/AboutEngagements';
import AboutMediaCoverage from '../components/about/AboutMediaCoverage';
import ASSET_VERSION from '../version';


export default function About() {
    useEffect(() => {
      if (window.initAboutJS) {
        window.initAboutJS();
      }
    }, []);
  return (
    <>
      <SEO title="About | INDRA" description="Welcome to my Next.js website." />
      <link rel="stylesheet" href={`/css/about.css?v=${ASSET_VERSION}`} />

{/* <AboutHero/> */}
<AboutWaterIndia/>
{/* <AboutEngagements/> */}
{/* <AboutSolving/> */}
<AboutPrinciples/>
<AboutTeam/>
<AboutTeam2/>
<AboutProgressTimeline/>
<AboutSafety/>
{/* <AboutAwards/> */}
<AboutMediaCoverage/>
<AboutCTA/>
<FooterScripts/>
<Script src={`/js/about.js?v=${ASSET_VERSION}`} strategy="beforeInteractive"/>

    </>
  )
}

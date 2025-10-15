import Header from '../components/Header'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import FooterScripts from '../components/FooterScripts';

import AboutAwards from '../components/about/AboutAwards';
import HomeQuickContact from '../components/home/HomeQuickContact';
import AboutPrinciples from '../components/about/AboutPrinciples';
import AboutSolving from '../components/about/AboutSolving';
import AboutHero from '../components/about/AboutHero';


export default function Home() {
  return (
    <>
      <SEO title="About | INDRA" description="Welcome to my Next.js website." />

<AboutHero/>
<AboutSolving/>
<AboutPrinciples/>
<AboutAwards/>
<HomeQuickContact/>

<FooterScripts/>
    </>
  )
}

import Head from 'next/head';
import SEO from '../components/SEO'

import HomeTestimonials from '../components/home1/HomeTestimonials';
import HomeHero from '../components/home1/HomeHero';
import HomeBlog from '../components/home1/HomeBlog';
import HomeFeatures from '../components/home1/HomeFeatures';
import Home3DModel from '../components/home1/Home3DModel';
import HomeCounter from '../components/home1/HomeCounter';
import HomeQuickContact from '../components/home1/HomeQuickContact';
import HomeMilestones from '../components/home1/HomeMilestones';
import HomeClients from '../components/home1/HomeClients';
import HomeProducts from '../components/home1/HomeProducts';

export default function Home() {
  return (
    <>
      <Head>
        <title>Innovating Water Treatment | Your Brand</title>
      </Head>
      <SEO title="Home | MySite" description="Welcome to my Next.js website." />

<HomeHero/>
<HomeFeatures/>
<HomeMilestones/>
<HomeProducts/>
{/* <Home3DModel/> */}
<HomeClients/>
<HomeBlog/>
<HomeCounter/>
<HomeTestimonials/>

<HomeQuickContact/>

    </>
  );
}

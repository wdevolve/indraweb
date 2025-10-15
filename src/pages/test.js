'use client';
import Head from 'next/head';
import SEO from '../components/SEO'
import Script from 'next/script';
import ASSET_VERSION from '../version';
import VideoSection from '../components/test/VideoSection';
import ScrollLine from '../components/home/ScrollLine';
import ScrollZigZagLine from '../components/test/ScrollZigZagLine';
import DummyText from '../components/test/DummyText';

export default function ScrollControlledVideo() {

  return (
    <>
      <Head>
              <title>Home | INDRA</title>

            </Head>
      <SEO title="Home | MySite" description="Welcome to my Next.js website." />
      <link rel="stylesheet" href={`/css/test.css?v=${ASSET_VERSION}`} />

<DummyText/>
      <ScrollLine/>
<VideoSection/>

      <ScrollZigZagLine />


    </>
  );
}

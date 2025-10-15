import Head from 'next/head';
import SEO from '../../components/SEO'
import Script from 'next/script';
import Image from 'next/image';

import ASSET_VERSION from '../../version';
import FooterScripts from '../../components/FooterScripts';

import IndHeroSub from '../../components/industries/industry/IndHeroSub'


export default function Industries() {

  const challenges = [
    { icon: "icons8-nuclear-100.png", desc: "High color and TDS, poor biodegradability, and sludge-heavy conventional systems." },
    { icon: "icons8-water-tap-100.png", desc: "Difficult-to-treat organics, high toxicity, variable load." },
    { icon: "icons8-water-saving-100.png", desc: "High OPEX in ZLD solutions due to low RO/UF recovery." },
    { icon: "icons8-global-warming-100.png", desc: "No reuse opportunity of the conventionally treated effluent." }
  ];

    const electroxHelps = [
    { icon: "icons8-waste-water-100.png", desc: "~90% removal of colour, dyes, and surfactants from textile streams " },
    { icon: "icons8-nuclear-100.png", desc: "Lower sludge and salt generation" },
    { icon: "icons8-water-tap-100.png", desc: "High RO & UF recovery with effective reduction in TH & silica" },
    { icon: "icons8-water-saving-100.png", desc: "Lower ZLD operations cost, with lower RO reject" }
  ];
  

  return (
   <>
      <Head>
        <title>Industries | INDRA</title>
      </Head>
      <SEO title="Textile & Dyeing | Industries | INDRA" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />

      <IndHeroSub h1="Textile & Dyeing" intro="Colored effluent with dyes, surfactants, sizing agents, and salts." image="/images/industry-8.webp" challenges={challenges} electroxHelps={electroxHelps}/>

<FooterScripts/>
    </>
  )
}

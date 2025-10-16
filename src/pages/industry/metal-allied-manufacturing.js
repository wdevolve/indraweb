import Head from 'next/head';
import SEO from '../../components/SEO'
import Script from 'next/script';
import Image from 'next/image';

import ASSET_VERSION from '../../version';
import FooterScripts from '../../components/FooterScripts';

import IndHeroSub from '../../components/industries/industry/IndHeroSub'


export default function Industries() {

  const challenges = [
    { icon: "icons8-medical-mask-100.webp", desc: "High variation in  pollutant load of the stream" },
    { icon: "icons8-nuclear-100.webp", desc: "Difficult-to-treat organics, high toxicity, variable load." },
    { icon: "icons8-water-tap-100.webp", desc: "High OPEX in ZLD solutions due to low RO/UF recovery." },
    { icon: "icons8-water-saving-100.webp", desc: "No reuse opportunity of the conventionally treated effluent." }
  ];

    const electroxHelps = [
    { icon: "icons8-global-warming-100.webp", desc: "~90% removal of phenol, cyanide, and heavy metals" },
    { icon: "icons8-waste-water-100.webp", desc: "Upgraded and modular units with near-zero downtime" },
    { icon: "icons8-nuclear-100.webp", desc: "Extended life of RO & UF with effective reduction in TH & silica" },
    { icon: "icons8-water-tap-100.webp", desc: "Lower ZLD operations cost, with lower RO reject" }
  ];
  

  return (
   <>
      <Head>
        <title>Industries | INDRA</title>
      </Head>
      <SEO title="Metal & Allied Manufacturing | Industries | INDRA" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />

      <IndHeroSub h1="Metal & Allied Manufacturing" intro="Effluent with heavy metals, cyanides, fluorides, and oil & grease." image="/images/industry-11.webp" challenges={challenges} electroxHelps={electroxHelps}/>

<FooterScripts/>
    </>
  )
}

import Head from 'next/head';
import SEO from '../../components/SEO'
import Script from 'next/script';
import Image from 'next/image';

import ASSET_VERSION from '../../version';
import FooterScripts from '../../components/FooterScripts';

import IndHeroSub from '../../components/industries/industry/IndHeroSub'


export default function Industries() {

  const challenges = [
    { icon: "icons8-nuclear-100.webp", desc: "High variation in  pollutant load of the stream" },
    { icon: "icons8-water-tap-100.webp", desc: "Difficult-to-treat organics, high toxicity, variable load." },
    { icon: "icons8-water-saving-100.webp", desc: "High OPEX in ZLD solutions due to low RO/UF recovery." },
    { icon: "icons8-waste-water-100.webp", desc: "No reuse opportunity of the conventionally treated effluent." }
  ];

    const electroxHelps = [
    { icon: "icons8-water-tap-100.webp", desc: "Breakdown of complex compounds with zero chemicals for primary treatment" },
    { icon: "icons8-water-saving-100.webp", desc: "Effectively absorb pollutant shock loads of up to 300%" },
    { icon: "icons8-waste-water-100.webp", desc: "Lower hardness & silica to increase the recovery from UF & RO" },
  ];
  

  return (
   <>
      <Head>
        <title>Industries | INDRA</title>
      </Head>
      <SEO title="Chemical & Pharmaceutical | Industries | INDRA" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />

      <IndHeroSub h1="Chemical & Pharmaceutical" intro="High-COD wastewater with solvents, organics, ammoniacal nitrogen, and complex chemicals." image="/images/industry-1.webp" challenges={challenges} electroxHelps={electroxHelps}/>

<FooterScripts/>
    </>
  )
}

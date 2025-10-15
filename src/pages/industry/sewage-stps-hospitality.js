import Head from 'next/head';
import SEO from '../../components/SEO'
import Script from 'next/script';
import Image from 'next/image';

import ASSET_VERSION from '../../version';
import FooterScripts from '../../components/FooterScripts';

import IndHeroSub from '../../components/industries/industry/IndHeroSub'


export default function Industries() {

  const challenges = [
    { icon: "icons8-nuclear-100.png", desc: "Conventional treatment methods are space-intensive" },
    { icon: "icons8-water-tap-100.png", desc: "Odour problems in the plant’s vicinity." },
    { icon: "icons8-water-saving-100.png", desc: "A high level of human intervention is mandatory." },
    { icon: "icons8-global-warming-100.png", desc: "No reuse opportunity of the conventionally treated effluent." }
  ];

    const electroxHelps = [
    { icon: "icons8-waste-water-100.png", desc: "Highly compact and easy to integrate with existing solutions " },
    { icon: "icons8-nuclear-100.png", desc: "Delivering 3× better than NGT norms for reuse in utilities" },
    { icon: "icons8-water-tap-100.png", desc: "Remote monitoring and controlling of the plant" },
    { icon: "icons8-water-saving-100.png", desc: "Automatic compliance reporting and weekly updates" }
  ];
  

  return (
   <>
      <Head>
        <title>Industries | INDRA</title>
      </Head>
      <SEO title="Sewage (STPs) & Hospitality | Industries | INDRA" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />

      <IndHeroSub h1="Sewage (STPs) & Hospitality" intro="Domestic wastewater with organics, nutrients, solids, and pathogens. Hospitality wastewater from kitchens, laundries, and domestic use." image="/images/industry-15.webp" challenges={challenges} electroxHelps={electroxHelps}/>

<FooterScripts/>
    </>
  )
}

import Head from 'next/head';
import SEO from '../../components/SEO'
import Script from 'next/script';
import Image from 'next/image';

import ASSET_VERSION from '../../version';
import FooterScripts from '../../components/FooterScripts';

import IndHeroSub from '../../components/industries/industry/IndHeroSub'


export default function Industries() {

  const challenges = [
    { icon: "icons8-nuclear-100.webp", desc: "Limited cycles of concentration (COC)." },
    { icon: "icons8-water-tap-100.webp", desc: "High freshwater requirement." },
    { icon: "icons8-water-saving-100.webp", desc: "Scaling and material damage due to high silica and hardness." },
    { icon: "icons8-waste-water-100.webp", desc: "Constraints, odor, inconsistent loads, aesthetic compliance." }
  ];

    const electroxHelps = [
    { icon: "icons8-nuclear-100.webp", desc: "Increases concentrations of circles by 100%" },
    { icon: "icons8-waste-water-100.webp", desc: "Lower the scaling and fouling with a reduction in TH and silica" },
    { icon: "icons8-water-saving-100.webp", desc: "With up to 95% water recovery as per recycling quality" },
    { icon: "icons8-global-warming-100.webp", desc: "Significantly lower dependence on freshwater resources" }
  ];
  

  return (
   <>
      <Head>
        <title>Industries | INDRA</title>
      </Head>
      <SEO title="Cooling Tower Blowdown | Industries | INDRA" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />

      <IndHeroSub h1="Cooling Tower Blowdown" intro="Water rich in hardness, TDS, and silica." image="/images/industry-5.webp" challenges={challenges} electroxHelps={electroxHelps}/>

<FooterScripts/>
    </>
  )
}

import Head from 'next/head';
import SEO from '../../components/SEO'
import Script from 'next/script';
import Image from 'next/image';

import ASSET_VERSION from '../../version';
import FooterScripts from '../../components/FooterScripts';

import IndHeroSub from '../../components/industries/industry/IndHeroSub'


export default function Industries() {

  const challenges = [
    { icon: "icons8-nuclear-100.png", desc: "High variation in  pollutant load of the stream" },
    { icon: "icons8-water-tap-100.png", desc: "Difficult-to-treat organics, high toxicity, variable load." },
    { icon: "icons8-water-saving-100.png", desc: "High OPEX in ZLD solutions due to low RO/UF recovery." },
    { icon: "icons8-global-warming-100.png", desc: "No reuse opportunity of the conventionally treated effluent." }
  ];
 
  const electroxHelps = [
    { icon: "icons8-global-warming-100.png", desc: "Zero chemicals required for primary treatment" },
    { icon: "icons8-nuclear-100.png", desc: "Effortless integration in the existing solution" },
    { icon: "icons8-water-tap-100.png", desc: "Delivering 3× better than NGT norms for reuse in utilities" },
    { icon: "icons8-water-saving-100.png", desc: "Effectively handles variation in effluent characteristics" }
  ];
  
  
  return (
   <>
      <Head>
        <title>Industries | INDRA</title>
      </Head>
      <SEO title="Manufacturing | Industries | INDRA" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />

      <IndHeroSub h1="Manufacturing" intro="Compact system fitting small basements; consistent output for reuse in flushing & gardening." image="/images/industry-4.webp" grayValue="Up to 500%" grayText="variation absorbed in the pollutant load" challenges={challenges} electroxHelps={electroxHelps}/>

<FooterScripts/>
    </>
  )
}

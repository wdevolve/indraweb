import SEO from '../components/SEO'
import ASSET_VERSION from '../version';
import FooterScripts from '../components/FooterScripts';
import Script from 'next/script';

import ContactHero from '../components/contact/ContactHero';
import ContactGlobe from '../components/contact/ContactGlobe';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    if (window.initContactJS) {
      window.initContactJS();
    }
  }, []);
  return (
    <>
      <SEO title="Contact us | INDRA" description="Welcome to my Next.js website." />
      <link rel="stylesheet" href={`/css/contact.css?v=${ASSET_VERSION}`} />

<ContactHero/>
<ContactGlobe/>
<FooterScripts/>

   </>
  )
}

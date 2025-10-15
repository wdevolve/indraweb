import SEO from '../components/SEO'
import ASSET_VERSION from '../version';
import FooterScripts from '../components/FooterScripts';

import ContactHero from '../components/contact/ContactHero';

export default function Home() {
  return (
    <>
      <SEO title="Contact us | INDRA" description="Welcome to my Next.js website." />
      <link rel="stylesheet" href={`/css/contact.css?v=${ASSET_VERSION}`} />

<ContactHero/>
<FooterScripts/>
    </>
  )
}

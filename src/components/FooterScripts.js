import Link from "next/link";
import Image from 'next/image';
import Script from 'next/script';
import { useEffect } from 'react';

import ASSET_VERSION from '../version';

export default function FooterScripts() {
    useEffect(() => {
      if (window.initScriptJS) {
        window.initScriptJS();
      }
    }, []);
  return (
    <>
      <Script src={`/js/script.js?v=${ASSET_VERSION}`} strategy="beforeInteractive"/>
    </>
  );
}

// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import ASSET_VERSION from '../version';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="preconnect" as="font" href="https://fonts.cdnfonts.com" />
          <link rel="preconnect" as="font" href="https://fonts.cdnfonts.com" crossOrigin="true" />
          <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet"/>
          <link rel="stylesheet" href={`/css/style.css?v=${ASSET_VERSION}`} />
      </Head>
      <body>
        <Main style={{marginTop:'-100px'}}/>
        <NextScript />
      </body>
    </Html>
  );
}

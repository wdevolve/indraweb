import Head from 'next/head';
import SEO from '../components/SEO'
import Script from 'next/script';
import ASSET_VERSION from '../version';
import FooterScripts from '../components/FooterScripts';
import { useEffect } from 'react';

import ProdHero from '../components/products/ProdHero'
import ProdTab from '../components/products/ProdTab'
import ProductTabs from '../components/products/ProductTabs'
import ProductsHorizontalScroll from '../components/products/ProductsHorizontalScroll'
import ProductTitle from '../components/products/ProductTitle'
import ProductsFeatures from '../components/products/ProductsFeatures'
import ProductsSafety from '../components/products/ProductsSafety'
import ProductsEvolution from '../components/products/ProductsEvolution'
import ProductsAutomotive from '../components/products/ProductsAutomotive'
import ProductsSpectrum from '../components/products/ProductsSpectrum'
import ProductsCTA from '../components/products/ProductsCTA'


export default function Products() {
useEffect(() => {
  if (window.initProdJS) {
    window.initProdJS();
  }
}, []);


  return (
   <>
      <Head>
        <title>Project | INDRA</title>
      </Head>
      <SEO title="Products | MySite" description="Welcome to my Next.js website." />
      <link rel="stylesheet" href={`/css/prod.css?v=${ASSET_VERSION}`} />
      
      <ProdHero/>
      {/* <ProdTab/> */}
      <ProductTabs/>
        {/* <ProductsFeatures/> */}
      {/* <ProductTitle/> */}
      {/* <ProductsHorizontalScroll/> */}
      <ProductsEvolution/>
      <ProductsSpectrum/>
      <ProductsAutomotive/>
      <ProductsSafety/>
      <ProductsCTA/>
<FooterScripts/>
<Script src={`/js/prod.js?v=${ASSET_VERSION}`} strategy="beforeInteractive"/>

    </>
  )
}

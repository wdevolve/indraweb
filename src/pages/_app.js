import Head from 'next/head'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

// import ScrollWrapper from '../ScrollWrapper';

import Script from 'next/script';
import ASSET_VERSION from '../version';

// Global CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Optional meta tags */}
      </Head>
      <Header />
      <ParallaxProvider>
        {/* <ScrollWrapper> */}
        <main>
          <Component {...pageProps} />
        </main>
        {/* </ScrollWrapper> */}
      </ParallaxProvider>
      <Footer />

      <Script src="/library/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/library/bootstrap.bundle.min.js" strategy="afterInteractive" />
    </>
  );
}


export default MyApp;

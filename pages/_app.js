import Layout from "../components/Layout/Layout";
import "../assets/css/_mixins.scss";
import "../assets/css/_variables.scss";
import "../assets/css/_spacing.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Head from "next/head";
import { APIContextProvider } from "../context/job-api";
import Script from 'next/script';
import TagManager from 'react-gtm-module';
import { hotjar } from 'react-hotjar';
export const Loading = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return (
    loading && (
      <div className="spinner-wrapper">
        <div className="spinner"></div>
      </div>
    )
  );
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-N2NQKSS' });
    hotjar.initialize(3136452, 6);
  }, []);

  return (
    <>
      <Script id="gtm-script" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script id="gtm-script" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>
      <Head>
        <link rel="shortcut icon" href="/tkxel-favicon.png" />
      </Head>
      <APIContextProvider>
        <Loading />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </APIContextProvider>
    </>
  );
}


export default MyApp;

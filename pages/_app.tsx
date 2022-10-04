import '../styles/globals.css'
import Script from 'next/script'
import React from 'react'
import { AppProps } from 'next/app';


function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        id="gtm-script"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M86VRCR');
          `
        }}
      />
      <Component {...pageProps} />

    </>
  )
}

export default MyApp

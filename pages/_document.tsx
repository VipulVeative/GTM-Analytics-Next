import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

const Document = () => (
  <Html>
    <Head />
    <body>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=GTM-M86VRCR`}
          height="0"
          width="0"
          title="googleTagManagerNoScript"
          style={{
            display: 'none',
            visibility: 'hidden',
          }}
        />
      </noscript>
      <Main />
      <NextScript />
    </body>
  </Html>
);
export default Document;
import React from "react";
import Head from "next/head";

import { useEffect,useState } from "react";

const ScrollingElement = () => {
    const [scrollY, setScrollY] = useState(0);
  
    function logit() {
      setScrollY(window.pageYOffset);
      gtag('event', 'scroll', {'pageName': 'scroll.tsx','scrollY':window.pageYOffset});

    }
  
    useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", logit);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", logit);
      };
    });
  
    return (
    <>
    <Head>
                <title>Scroll page</title>
            </Head>
      <div style={{height:"5000px"}} className="App">
        <div style={{ position: "fixed",top: "50%",left: "40%"}} className="fixed-center">Scroll position: {scrollY}px</div>
      </div>
      </>
    );
  };

  export default ScrollingElement
  
import React from 'react';
import Head from 'next/head';

export default function clickPage(){

    const eventHandle=()=>{
        console.log("hiii");
        gtag('event', 'click', {'pageName': 'Click.tsx','time':new Date()});
   
       }

    return (
        <>
          <Head>
                <title>Click page</title>
            </Head>
        <div>This is click page</div>
        <button onClick={eventHandle}>Event button</button>

        </>
    )

}
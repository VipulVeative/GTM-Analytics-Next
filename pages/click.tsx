import React from 'react';
import Head from 'next/head';

export default function clickPage(){

    const eventHandle=()=>{
        gtag('event', 'click', {'pageName': 'click.tsx','time':new Date()});
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
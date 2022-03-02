import '../styles/globals.css';
import {AppProps} from "next/dist/shared/lib/router/router";
import Head from "next/head";
import React from "react";
import ym from 'react-yandex-metrika';
import {YMInitializer} from 'react-yandex-metrika';
import {Router} from "next/router";

Router.events?.on('routeChangeComplete', (url: string) => {
    if (typeof window !== 'undefined')  {
        ym('hit', url);
    }
});

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {

  return (
      <>
        <Head>
            <title>MyTop - наш лучший топ</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link rel="preconnect" href="https://mc.yandex.ru"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:wght@300;400;500;700&family=Noto+Serif+KR:wght@200;300;400;500;600;700;900&family=Playfair+Display:wght@700&display=swap"
                rel="stylesheet"/>
            <meta property="og:url" content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath }/>
            <meta property="og:locale" content="ru_RU"/>
        </Head>
        <YMInitializer
            accounts={[]}
            options={{webvisor: true, defer: true}}
            version="2"
        />
        <Component {...pageProps} />
      </>
  );

}

export default MyApp;
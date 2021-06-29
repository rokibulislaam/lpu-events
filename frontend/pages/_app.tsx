import React from 'react';
// import 'tailwindcss/tailwind.css';
import '../styles/globals.scss';
import '../styles/styles.scss';
import type { AppProps /*, AppContext */ } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from 'apollo/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps?.apolloState);
  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;

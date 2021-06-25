import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function JagdApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui"
        />
      </Head>
      <Component {...pageProps} />
      <script async src="/index.js" />
    </>
  );
}
export default JagdApp;

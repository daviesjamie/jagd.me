import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';

import '../styles/globals.css';

function JagdApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default JagdApp;

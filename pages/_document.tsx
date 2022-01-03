import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-zinc-200 text-zinc-900 dark:bg-zinc-900 dark:text-zinc-200 font-mono font-light transition-colors duration-300 ease-in-out">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

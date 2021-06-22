import Head from "next/head";
import Link from "next/Link";

export default function NotFound() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui"
        />

        <title>404 | Jamie Davies</title>
      </Head>

      <div id="mode-toggle">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>

      <div className="container">
        <div className="wrapper">
          <h1>404</h1>

          <p>{"This isn't the page you're looking for."}</p>

          <p><Link href="/">{"Return"}</Link></p>
        </div>
      </div>
    </>
  )
}
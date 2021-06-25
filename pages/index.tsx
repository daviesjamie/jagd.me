import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, minimal-ui"
        />

        <title>{'Jamie Davies'}</title>
      </Head>

      <div id="mode-toggle">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>

      <div className="container">
        <div className="wrapper">
          <section id="greeting">
            <span>{'Hello'}</span>
          </section>

          <section id="info">
            <h3 className="section-title">{'Info'}</h3>
            <p>
              {`I'm Jamie Davies, a full-stack developer who likes to mix code,
              devops, design and coffee to create things that help people. I
              currently work for `}
              <a href="https://www.netcraft.com/">{'Netcraft'}</a>
              {` in the lovely city of Bath, where I create and maintain systems
              to fight malware and block phishing attacks on iOS.`}
            </p>
          </section>

          <section id="contact">
            <h3 className="section-title">{'Contact'}</h3>
            <ul>
              <li>
                <a href="mailto:hi@jagd.me">{'Email'}</a>
              </li>
              <li>
                <a href="https://github.com/daviesjamie/">{'GitHub'}</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/daviesjamie/">
                  {'LinkedIn'}
                </a>
              </li>
              <li>
                <a href="https://www.strava.com/athletes/daviesjamie">
                  {'Strava'}
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <script async src="/index.js" />
    </>
  );
}

import Head from 'next/head';
import Layout from '../components/Layout';
import Section from '../components/Section';

export default function Home() {
  return (
    <>
      <Head>
        <title>{'Jamie Davies'}</title>
      </Head>

      <Layout>
        <Section id="greeting">
          <span>{'Hello'}</span>
        </Section>

        <Section id="info" title="Info">
          <p>
            {`I'm Jamie Davies, a full-stack developer who likes to mix code,
            devops, design and coffee to create things that help people. I
            currently work for `}
            <a href="https://www.netcraft.com/">{'Netcraft'}</a>
            {` in the lovely city of Bath, where I create and maintain systems
            to fight malware and block phishing attacks on iOS.`}
          </p>
        </Section>

        <Section id="contact" title="Contact">
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
        </Section>
      </Layout>
    </>
  );
}

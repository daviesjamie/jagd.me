import Head from 'next/head';
import Layout from '../components/Layout';
import Section from '../components/Section';
import LinkList from '../components/LinkList';

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
          <LinkList
            links={[
              { href: 'mailto:hi@jagd.me', title: 'Email' },
              { href: 'https://github.com/daviesjamie/', title: 'GitHub' },
              {
                href: 'https://www.linkedin.com/in/daviesjamie/',
                title: 'LinkedIn',
              },
            ]}
          />
        </Section>
      </Layout>
    </>
  );
}

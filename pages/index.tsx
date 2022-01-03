import Head from 'next/head';
import Layout from '../components/Layout';
import Section from '../components/Section';
import LinkList from '../components/LinkList';
import Link from '../components/Link';

export default function Home() {
  return (
    <>
      <Head>
        <title>{'Jamie Davies'}</title>
      </Head>

      <Layout>
        <Section>
          <span className="text-2xl">{'Hello'}</span>
        </Section>

        <Section title="Info">
          <p className="text-sm">
            {`I'm Jamie Davies, a full-stack developer who likes to mix code,
            devops, design and coffee to create things that help people. I
            currently work for `}
            <Link href="https://www.netcraft.com/">{'Netcraft'}</Link>
            {` in the lovely city of Bath, where I create and maintain systems
            to fight malware and block phishing attacks on iOS.`}
          </p>
        </Section>

        <Section title="Contact">
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

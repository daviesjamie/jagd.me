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
        <Section className="mb-10">
          <span className="text-2xl">{'Hello.'}</span>
        </Section>

        <Section title="Info" className="mb-5">
          <p className="text-sm">
            {`I'm Jamie Davies, a full-stack developer who likes to mix code, devops, design and coffee to create things that help people. I'm currently modernising legacy government applications with `}
            <Link href="https://www.madetech.com">{'Made Tech'}</Link>
            {`, and previously I fought malware and blocked phishing attacks on iOS at `}
            <Link href="https://www.netcraft.com/">{'Netcraft'}</Link>
            {`.`}
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

import Head from 'next/head';
import Link from 'next/Link';
import Layout from '../components/Layout';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>{'404 | Jamie Davies'}</title>
      </Head>

      <Layout>
        <h1>{'404'}</h1>

        <p>{"This isn't the page you're looking for."}</p>

        <p>
          <Link href="/">{'Return'}</Link>
        </p>
      </Layout>
    </>
  );
}

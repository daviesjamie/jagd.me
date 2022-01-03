import Head from 'next/head';
import Layout from '../components/Layout';
import Link from '../components/Link';

export default function NotFound() {
  return (
    <>
      <Head>
        <title>{'404 | Jamie Davies'}</title>
      </Head>

      <Layout>
        <h1 className="text-3xl mb-6">{'404'}</h1>

        <p className="text-sm">{"This isn't the page you're looking for."}</p>

        <p className="text-sm">
          <Link href="/">{'Return'}</Link>
        </p>
      </Layout>
    </>
  );
}

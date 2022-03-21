import Head from 'next/head';
import PageDev from '../components/PageDev';

export default function Music() {
  return (
    <div>
      <Head>
        <title>Music</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <PageDev />
      </main>
    </div>
  );
}

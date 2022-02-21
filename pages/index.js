import Head from 'next/head';

export default function Home() {
  return (
    <html className='bg-white dark:bg-zinc-900 dark:text-white'>
      <div>
        <Head>
          <title>Home</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          <div className='fixed inset-0 flex items-center justify-center text-3xl'>
            <h1>Home</h1>
          </div>
        </main>
      </div>
    </html>
  );
}

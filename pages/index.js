import Head from 'next/head';
import HomePageCard from '../components/HomePageCard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='fixed inset-0 justify-center grid lg:grid-cols-2 lg:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 gap-2 text-center place-items-center'>
          <HomePageCard link='/photos'>Photos</HomePageCard>
          <HomePageCard link='/music'>Music</HomePageCard>
        </div>
      </main>
    </div>
  );
}

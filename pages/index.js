import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <html className='dark:bg-zinc-900 dark:text-zinc-900 bg-light text-light'>
      <div>
        <Head>
          <title>Home</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
          <div className='fixed inset-0 justify-center text-6xl grid grid-cols-2 gap-2 text-center place-items-center'>
            <Link href='/photos' passHref>
              <div className='p-5 border-current dark:bg-zinc-900 hover:shadow-np-light hover:dark:shadow-np-dark ease-in duration-500 rounded-3xl w-4/5 h-4/5 grid place-items-center cursor-pointer select-none text-shadow-np-light dark:text-shadow-np-dark hover:dark:text-light hover:text-zinc-600'>
                <h1>Photos</h1>
              </div>
            </Link>
            <Link href='/music' passHref>
              <div className='p-5 border-current dark:bg-zinc-900 hover:shadow-np-light hover:dark:shadow-np-dark ease-in duration-500 rounded-3xl w-4/5 h-4/5 grid place-items-center cursor-pointer select-none text-shadow-np-light dark:text-shadow-np-dark hover:dark:text-light hover:text-zinc-600'>
                <h1>Music</h1>
              </div>
            </Link>
          </div>
        </main>
      </div>
    </html>
  );
}

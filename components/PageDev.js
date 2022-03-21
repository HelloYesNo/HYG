import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/solid';

export default function PageDev() {
  return (
    <div className='fixed w-full inset-0 z-10 backdrop-blur flex flex-col justify-center items-center select-none'>
      <div className='inline-block w-full max-w-md p-6 my-8 text-center align-middle dark:text-shadow-xl text-zinc-900 dark:text-light shadow-np-light dark:shadow-np-dark rounded-3xl bg-light dark:bg-zinc-900'>
        <div className='p-4'>
          <h1>Coming Soon</h1>
        </div>
        <p>Page is under Developement</p>
        <button className='m-3 p-2 rounded-full bg-light focus:shadow-np-light-2  dark:bg-zinc-900 dark:focus:shadow-np-dark-2 transition-all hover:shadow-np-light dark:hover:shadow-np-dark'>
          <Link href='/' passHref>
            <HomeIcon className='w-10 text-zinc-900 dark:text-light' />
          </Link>
        </button>
      </div>
    </div>
  );
}

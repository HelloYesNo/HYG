import Link from 'next/link';

export default function HomePageCard({ children, link }) {
  return (
    <Link href={link} passHref>
      <div className='p-5 border-current dark:bg-zinc-900 hover:shadow-np-light hover:dark:shadow-np-dark ease-in duration-500 rounded-3xl lg:w-4/5 md:w-11/12 h-4/5 grid place-items-center cursor-pointer select-none text-shadow-np-light dark:text-shadow-np-dark hover:dark:text-light hover:text-zinc-600'>
        <h1>{children}</h1>
      </div>
    </Link>
  );
}

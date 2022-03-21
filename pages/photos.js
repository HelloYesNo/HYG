import Head from 'next/head';
import Image from 'next/image';
import PageDev from '../components/PageDev';
import img1 from '../public/001010790001.jpg';
import img2 from '../public/001010790002.jpg';
import img3 from '../public/001010790003.jpg';
import img4 from '../public/001010790018.jpg';
import img5 from '../public/001010790023.jpg';
import img6 from '../public/001010790025.jpg';
import img7 from '../public/001010790029.jpg';

export default function Photos() {
  return (
    <div>
      <Head>
        <title>Photos</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div className='relative'>
          <PageDev />
          <div className='grid grid-cols-3'>
            {[
              [img1, 'alt1', 1],
              [img2, 'alt2', 2],
              [img3, 'alt3', 3],
              [img4, 'alt4', 4],
              [img5, 'alt5', 5],
              [img6, 'alt6', 6],
              [img7, 'alt7', 7],
            ].map(([image, alt, key]) => (
              <Image
                layout='responsive'
                src={image}
                alt={alt}
                key={key}
                className='object-contain w-14 h-14'
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

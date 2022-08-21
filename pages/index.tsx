//packages
import {useRef, useState} from 'react';
import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';

// components
import DetailInfo from 'components/info';
import Top from 'components/top';

//styles
import styles from '/styles/Home.module.scss';

const Home: NextPage = () => {
  const [page, setPage] = useState<number>(0);
  const myRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window

    if (myRef.current) {
      const scrollTop = Math.ceil(myRef.current.scrollTop);
      const height = myRef.current?.offsetHeight;

      if (height) setPage(Math.ceil(scrollTop / height) > 2 ? 2 : Math.ceil(scrollTop / height));
    }
  };

  const scrollTo = (selectedPage: number) => {
    if (selectedPage == page) {
      return;
    } else if (myRef.current) {
      const scrollTop = Math.ceil(myRef.current.scrollTop);
      const height = myRef.current?.offsetHeight;
      myRef.current.scrollTop = height * selectedPage;
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Yared Tsegaye</title>
        <meta name="description" content="Portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.top}>
            <Top scrollTo={scrollTo} />
          </div>
          <DetailInfo handleScroll={handleScroll} page={page} myRef={myRef} scrollTo={scrollTo} />
          <div className={styles.big_picture}>
            <Image
              src={'/images/p4.png'}
              alt="profile"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>

          <div className={styles.social_media}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/yared-tsegaye-2aa3521ba/"
              className={styles.social_media_Link}
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
            <a
              target="_blank"
              href="https://github.com/yaredtsy"
              className={styles.social_media_Link}
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;

import { Parallax } from "@react-spring/parallax";
import Top from "components/top";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ReactGA from "react-ga4";
import styles from "/styles/Home.module.scss";

const Home: NextPage = () => {
  const [page, setPage] = useState<number>(0);
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ReactGA.initialize("G-29SJQK0429");
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    const scrollY = window.scrollY; //Don't get confused by what's scrolling - It's not the window

    if (myRef.current) {
      const scrollTop = Math.ceil(myRef.current.scrollTop);
      const height = myRef.current?.offsetHeight;

      if (height) setPage(Math.ceil(scrollTop / height));
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
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.top}>
            <Top scrollTo={scrollTo} />
          </div>
          <div className={styles.info_parent_continaier}>
            <ul className={styles.indicator}>
              <li
                className={page == 0 ? styles.active : ""}
                onClick={() => {
                  scrollTo(0);
                }}
              ></li>
              <li
                className={page == 1 ? styles.active : ""}
                onClick={() => {
                  scrollTo(1);
                }}
              ></li>
              <li
                className={page == 2 ? styles.active : ""}
                onClick={() => {
                  scrollTo(2);
                }}
              ></li>
            </ul>
            <div
              className={styles.info_container}
              ref={myRef}
              onScroll={handleScroll}
            >
              <section className={styles.about_me}>
                <h1>About Me</h1>
                <div className={styles.content}>
                  {/* <div className={styles.profile_picture}>
                    <Image
                      src={"/images/p.jpg"}
                      alt="profile"
                      width={90}
                      height={90}
                    />
                  </div> */}
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
                    quidem non eum quibusdam atque. Perspiciatis, minima
                    consectetur sit dignissimos ex iusto laborum ullam.
                    Blanditiis amet, quo explicabo nostrum magnam
                    iure.consectetur sit dignissimos ex iusto laborum ullam.
                  </p>
                </div>
              </section>
              <section className={styles.skills}>
                <h1>My Expreiencse</h1>
                <div className={styles.content}>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ipsum inventore a unde exercitationem illo quaerat quae
                  </p>
                </div>
                <div className={styles.skill_container}>
                  <div>
                    <p>Django</p>
                    <div className={styles.container}>
                      <div
                        className={`${styles.skills} ${styles.django}`}
                      ></div>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <p>React.js</p>
                    <div className={styles.container}>
                      <div
                        className={`${styles.skills} ${styles.reactjs}`}
                      ></div>
                    </div>
                  </div>

                  <div>
                    {" "}
                    <p>Node.js</p>
                    <div className={styles.container}>
                      <div
                        className={`${styles.skills} ${styles.nodejs}`}
                      ></div>
                    </div>
                  </div>

                  <div>
                    {" "}
                    <p>Next.js</p>
                    <div className={styles.container}>
                      <div
                        className={`${styles.skills} ${styles.nextjs}`}
                      ></div>
                    </div>
                  </div>
                  <div>
                    {" "}
                    <p>UI/UX</p>
                    <div className={styles.container}>
                      <div className={`${styles.skills} ${styles.ui}`}></div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={styles.contact}>
                <h1>contact </h1>
                <div className={styles.contact_container}>
                  <span>Yared Tsegaye</span>
                  <div>
                    <span className={styles.labels}>phoneNumber</span>{" "}
                    <span>(+251) 970751906</span>
                  </div>
                  <div>
                    <span className={styles.labels}>Gmail</span>
                    <span>tsyared@gmail.com</span>
                  </div>
                  <div>Ethiopia, Addis Ababa</div>
                </div>
              </section>
            </div>
          </div>

          <div className={styles.big_picture}>
            <Image
              src={"/images/p4.png"}
              alt="profile"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>

          <div className={styles.social_media}>
            <a className={styles.social_media_Link}>Linkdin</a>
            <a className={styles.social_media_Link}>Github</a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;

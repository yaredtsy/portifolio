import {FunctionComponent, UIEventHandler, useEffect, useRef, useState} from 'react';
import InfoComponent from './info.component';
import styles from '/styles/Info.module.scss';
import createScrollSnap from 'scroll-snap';
interface DetailInfoProps {
  page: number;
  myRef: any;
  scrollTo: Function;
  handleScroll: UIEventHandler<HTMLDivElement>;
}
const DetailInfo: FunctionComponent<DetailInfoProps> = ({page, myRef, scrollTo, handleScroll}) => {
  useEffect(() => {
    const element = myRef.current;

    if (element) {
      const {bind, unbind} = createScrollSnap(element, {snapDestinationY: '100%', threshold: 0.1});
    }
  }, [myRef]);
  return (
    <div className={styles.info_parent_continaier}>
      <ul className={styles.indicator}>
        <li
          className={page == 0 ? styles.active : ''}
          onClick={() => {
            scrollTo(0);
          }}
        ></li>
        <li
          className={page == 1 ? styles.active : ''}
          onClick={() => {
            scrollTo(1);
          }}
        ></li>
        <li
          className={page == 2 ? styles.active : ''}
          onClick={() => {
            scrollTo(2);
          }}
        ></li>
      </ul>

      <div className={styles.info_container} ref={myRef} onScroll={handleScroll}>
        <InfoComponent
          title="About Me"
          content={
            <p>
              With over 5 years of comprehensive programming experience, I have a proven track record of delivering
              exceptional results for startups across diverse industries including social media, fintech, and ERP.
            </p>
          }
        />

        <InfoComponent
          title="weapon of my choice"
          content={
            <>
              {' '}
              <p>I bring a versatile skill set to the table, with experience in a multitude of programming languages</p>
              <div className={styles.skill_container}>
                <div>
                  <p>Django</p>
                  <div className={styles.container}>
                    <div className={`${styles.skills} ${styles.django}`}></div>
                  </div>
                </div>
                <div>
                  {' '}
                  <p>React.js</p>
                  <div className={styles.container}>
                    <div className={`${styles.skills} ${styles.reactjs}`}></div>
                  </div>
                </div>

                <div>
                  {' '}
                  <p>Node.js</p>
                  <div className={styles.container}>
                    <div className={`${styles.skills} ${styles.nodejs}`}></div>
                  </div>
                </div>

                <div>
                  {' '}
                  <p>Next.js</p>
                  <div className={styles.container}>
                    <div className={`${styles.skills} ${styles.nextjs}`}></div>
                  </div>
                </div>
                <div>
                  {' '}
                  <p>UI/UX</p>
                  <div className={styles.container}>
                    <div className={`${styles.skills} ${styles.ui}`}></div>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <InfoComponent
          title="contact"
          content={
            <div className={styles.contact_container}>
              {' '}
              <span>Yared Tsegaye</span>
              <div>
                <span className={styles.labels}>phoneNumber</span> <span>(+251) 970751906</span>
              </div>
              <div>
                <span className={styles.labels}>Gmail</span>
                <span>tsyared@gmail.com</span>
              </div>
              <div>Ethiopia, Addis Ababa</div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default DetailInfo;

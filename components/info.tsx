import {FunctionComponent, UIEventHandler, useRef, useState} from 'react';
import styles from '/styles/Info.module.scss';

interface DetailInfoProps {
  page: number;
  myRef: any;
  scrollTo: Function;
  handleScroll: UIEventHandler<HTMLDivElement>;
}
const DetailInfo: FunctionComponent<DetailInfoProps> = ({page, myRef, scrollTo, handleScroll}) => {
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
        <section className={styles.about_me}>
          <h1>About Me</h1>
          <div className={styles.content}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quidem non eum quibusdam atque. Perspiciatis,
              minima consectetur sit dignissimos ex iusto laborum ullam. Blanditiis amet, quo explicabo nostrum magnam
              iure.consectetur sit dignissimos ex iusto laborum ullam.
            </p>
          </div>
        </section>
        <section className={styles.skills}>
          <h1>My Expreiencse</h1>
          <div className={styles.content}>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum inventore a unde exercitationem illo
              quaerat quae
            </p>
          </div>
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
        </section>
        <section className={styles.contact}>
          <h1>contact </h1>
          <div className={styles.contact_container}>
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
        </section>
      </div>
    </div>
  );
};

export default DetailInfo;

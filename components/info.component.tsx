import React from 'react';
import {useInView} from 'react-intersection-observer';
import styles from '/styles/Info.module.scss';

interface InfoComponentProps {
  title: string;
  content: any;
}
const InfoComponent: React.FC<InfoComponentProps> = ({title, content}) => {
  const {ref, inView} = useInView({threshold: 0.4});

  return (
    <section className={inView ? `${styles.content} ${styles.contentZoom} ` : `${styles.content}`} ref={ref}>
      <h1 className={styles.titles}>{title}</h1>
      <div className={styles.contentBody}>{content}</div>
    </section>
  );
};

export default InfoComponent;

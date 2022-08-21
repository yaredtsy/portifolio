import {FunctionComponent} from 'react';
import styles from '/styles/Top.module.scss';

interface TopProps {
  scrollTo: any;
}
const Top: FunctionComponent<TopProps> = ({scrollTo}) => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={styles.name}>
        <span>Yared tsegaye</span>
        <span>Full stack devloper</span>
      </div>
      <div className={styles.contact_me} onClick={() => scrollTo(2.1)}>
        <span>Contact me</span>
      </div>
    </div>
  );
};

export default Top;

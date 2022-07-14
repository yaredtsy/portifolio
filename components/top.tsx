import { FunctionComponent } from "react";
import styles from "/styles/Top.module.scss";

interface TopType {
  scrollTo: any;
}
const Top: FunctionComponent<TopType> = ({ scrollTo }) => {
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
        Contact me
      </div>
    </div>
  );
};

export default Top;

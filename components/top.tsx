import styles from "/styles/Top.module.scss";
const Top = () => {
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
      <div className={styles.contact_me}>Contact ME</div>
    </div>
  );
};

export default Top;

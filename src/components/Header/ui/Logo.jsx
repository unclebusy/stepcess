import styles from '../Header.module.scss';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <img className={styles.logoImg} src="/images/logo.svg" />
      <p className={styles.logoName}>StepCess</p>
    </div>
  );
};

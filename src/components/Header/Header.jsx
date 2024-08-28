import * as React from 'react';
import styles from './Header.module.scss';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function Header() {
  return (
    <nav className={styles.nav}>
      <div className={styles.groupLogo}>
        <img className={styles.logoImg} src="/images/logo.svg" />
        <p className={styles.logoName}>StepCess</p>
      </div>
      <form>
        <label>
          <input type="radio" name="testType" value="frontend" />
          Frontend
        </label>
        <label>
          <input type="radio" name="testType" value="backend" />
          Backend
        </label>
        <label>
          <input type="radio" name="testType" value="fullstack" />
          Fullstack
        </label>
      </form>
      <div className={styles.groupAccount}>
        <div>
          <button></button>
          <button></button>
        </div>
        <div>
          <button></button>
          <button></button>
        </div>
        <button>
          <AccountCircleIcon className={styles.avatarIcon} />
        </button>
      </div>
    </nav>
  );
}

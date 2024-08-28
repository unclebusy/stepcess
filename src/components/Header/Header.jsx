import styles from './Header.module.scss';
import { Logo } from './ui/Logo';
import { SwitcherTopic } from './ui/SwitcherTopic';
import { SwitcherTheme } from './ui/SwitcherTheme';

export const Header = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <SwitcherTopic />
      <SwitcherTheme />
    </nav>
  );
};

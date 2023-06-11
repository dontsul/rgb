import { ReactComponent as LogoIcon } from '../../assets/images/svg/logo.svg';
import styles from './logo.module.scss';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <LogoIcon className={styles.logo__icon} />
      <div className={styles.logo__text}>
        <span className={styles.logo__line}>POWERCODE</span>
        <span className={styles.logo__line}>ACADEMY</span>
      </div>
    </div>
  );
};

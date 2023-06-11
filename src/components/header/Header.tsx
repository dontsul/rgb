import { Logo } from '../logo/Logo';
import { Chip } from '../chip/Chip';
import { ReactComponent as Calendar } from '../../assets/images/svg/calendar.svg';
import { ReactComponent as Watch } from '../../assets/images/svg/watch.svg';
import styles from './header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />
      <div className={styles.chip__container}>
        <Chip text="28 декабря" element={Calendar} />
        <Chip text="3,5 часа" element={Watch} />
      </div>
    </div>
  );
};

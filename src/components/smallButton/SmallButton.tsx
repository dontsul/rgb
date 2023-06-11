import { ReactComponent as World } from '../../assets/images/svg/world.svg';
import styles from './smallButton.module.scss';

export const SmallButton = () => {
  return (
    <div className={styles.button__wrap}>
      <button className={styles.button}>
        <World className={styles.button__icon} />
        <span className={styles.button__text}>Вебинар</span>
      </button>
    </div>
  );
};

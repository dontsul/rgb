import { ReactComponent as Bonus } from '../../assets/images/svg/bonus.svg';
import { ReactComponent as Man } from '../../assets/images/svg/man.svg';

import styles from './additionalInfo.module.scss';

export const AdditionalInfo = () => {
  return (
    <div className={styles.wrapInfo}>
      <div className={styles.infoBonus}>
        <div className={styles.infoBonus__imgBonus}>
          <Bonus />
        </div>
        <div className={styles.bonus}>
          <h4 className={styles.bonus__title}>Бонус за регистрацию</h4>
          <p className={styles.bonus__text}>PDF-файл "5 преимуществ профессии веб-дизайнера" </p>
        </div>
      </div>
      <div className={styles.infoMan}>
        <div className={styles.infoMan__imgMan}>
          <Man />
        </div>
        <div className={styles.man}>
          <h4 className={styles.man__title}>
            Кирилл <span>КАСАТОНОВ</span>
          </h4>
          <p className={styles.man__text}>
            6 лет коммерческого опыта с такими компаниями как Mercedes-Benz и другими крупными
            корпорациями
          </p>
        </div>
      </div>
    </div>
  );
};

import styles from './descriptionText.module.scss';

export const DescriptionText = () => {
  return (
    <p className={styles.text}>
      Узнайте какими навыками должен обладать фронтенд разработчик в 2022 году и как начать карьеру
      в востребованной профессии <span className={styles.text__salary}>с зарплатой</span>{' '}
      <span className={styles.text__salaryNumber}>от 1000$</span>
    </p>
  );
};

import styles from './subtitle.module.scss';

export const Subtitle = () => {
  return (
    <div className={styles.subtitle__wrap}>
      <div className={styles.transform__block}>
        <p>с нуля</p>
      </div>
      <div className={styles.text__block}>легкий старт в IT профессии</div>
    </div>
  );
};

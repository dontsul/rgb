import styles from './button.module.scss';

export const Button = () => {
  return (
    <div className={styles.wrapBtn}>
      <button type="submit" className={styles.btn}>
        Записаться бесплатно
      </button>
    </div>
  );
};

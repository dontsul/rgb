import { CustomForm } from '../customForm/CustomForm';
import styles from './wrapForm.module.scss';

export const WrapForm = () => {
  return (
    <div className={styles.wrapForm}>
      <h4 className={styles.title}>
        Запишитесь <span>бесплатно</span> и получите подарок
      </h4>
      <CustomForm />
      <div className={styles.policy}>
        <p className={styles.policy__text}>
          Нажимая на кнопку я согашаюсь
          <a href="!#"> с политикой конфидециальности</a>
        </p>
      </div>
    </div>
  );
};

export default WrapForm;

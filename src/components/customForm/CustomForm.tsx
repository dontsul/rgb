import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';
// import sgMail from '@sendgrid/mail';
import { Button } from '../button/Button';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-phone-number-input/style.css';
import styles from './customForm.module.scss';
import dotenv from 'dotenv';

dotenv.config();

const schema = yup
  .object({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    phoneInputWithCountrySelect: yup.string().required(),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const CustomForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const apiKey = process.env.REACT_APP_API_KEY;
  // sgMail.setApiKey('');
  console.log(apiKey);

  const onSubmit = (data: FormData) => {
    console.log(data);

    // const msg = {
    //   to: 'dontsul.v@gmail.com', // Замените на ваш адрес электронной почты
    //   from: data.email,
    //   subject: 'Новая форма отправлена',
    //   text: 'Здесь можно добавить дополнительный текст',
    // };

    // sgMail
    //   .send(msg)
    //   .then(() => {
    //     console.log('Электронная почта успешно отправлена');
    //   })
    //   .catch((error) => {
    //     console.error('Произошла ошибка при отправке электронной почты:', error);
    //   });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.wrap__input}>
        <input
          placeholder="Ваше имя и фамилия"
          className={styles.input}
          {...register('fullname')}
        />
        <p className={styles.error}>{errors.fullname?.message}</p>
      </div>

      <div className={styles.wrap__input}>
        <input placeholder="Ваш email" className={styles.input} {...register('email')} />
        <p className={styles.error}>{errors.email?.message}</p>
      </div>

      <div className={styles.wrap__input}>
        <PhoneInputWithCountry
          placeholder="Ваш номер телефона"
          className={styles.phone__input}
          // name="phoneInputWithCountrySelect"
          control={control}
          rules={{ required: true }}
          defaultCountry="UA"
          {...register('phoneInputWithCountrySelect')}
        />
        <p className={styles.error}>{errors.phoneInputWithCountrySelect?.message}</p>
      </div>

      <Button />
    </form>
  );
};

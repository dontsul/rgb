import PhoneInputWithCountry from 'react-phone-number-input/react-hook-form';
import { isPossiblePhoneNumber } from 'react-phone-number-input';
import { Button } from '../button/Button';
import { useRef } from 'react';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'react-phone-number-input/style.css';
import styles from './customForm.module.scss';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const schema = yup
  .object({
    fullname: yup.string().required('Поле обязательное для заполнения'),
    email: yup
      .string()
      .email('Email должен быть валидным')
      .required('Поле обязательное для заполнения'),
    phone: yup.string().required('Поле обязательное для заполнения'),
  })
  .required();
type FormData = yup.InferType<typeof schema>;

export const CustomForm = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const form = useRef<HTMLFormElement>(null);

  const serviceId = process.env.REACT_APP_SERVICE_ID as string;

  const onSubmit = async (data: FormData) => {
    if (form.current) {
      emailjs.sendForm(serviceId, 'template_5hk6rlg', form.current, 'uMkZhsDrmPmInehKk').then(
        (result) => {
          toast.success('Форма была успешно отправлена!');
          reset();
        },
        (error) => {
          toast.error('Что-то пошло не так...');
          reset();
        }
      );
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit(onSubmit)}>
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
          name="phone"
          control={control}
          rules={{ required: true, validate: isPossiblePhoneNumber }}
          defaultCountry="UA"
          autoComplete="tel"
          displayInitialValueAsLocalNumber
          international
          withCountryCallingCode
        />
        <p className={styles.error}>{errors.phone?.message}</p>
      </div>

      <Button />
      <Toaster position="top-center" />
    </form>
  );
};

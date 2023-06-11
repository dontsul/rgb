import { FC } from 'react';
import styles from './title.module.scss';

interface TitleProps {
  content: string;
}

export const Title: FC<TitleProps> = ({ content }) => {
  return <h1 className={styles.title}>{content}</h1>;
};

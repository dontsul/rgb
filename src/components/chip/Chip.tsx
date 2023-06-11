import { FC, ComponentType } from 'react';
import styles from './chip.module.scss';

interface ChipProps {
  text: string;
  element: ComponentType;
}

export const Chip: FC<ChipProps> = ({ element: Element, text }) => {
  return (
    <div className={styles.chip}>
      <div className={styles.chip__icon}>
        <Element />
      </div>
      <span className={styles.chip__text}>{text}</span>
    </div>
  );
};

import { ReactComponent as Rh } from '../../assets/images/svg/rh.svg';
import { ReactComponent as Rc } from '../../assets/images/svg/rc.svg';
import { ReactComponent as Rj } from '../../assets/images/svg/rj.svg';
import { ReactComponent as Rs } from '../../assets/images/svg/rs.svg';
import { ReactComponent as Rvs } from '../../assets/images/svg/rvs.svg';

import html from '../../assets/images/html.png';
import css from '../../assets/images/css.png';
import javascript from '../../assets/images/javascript.png';
import sublimeText from '../../assets/images/sublime-text.png';
import vscode from '../../assets/images/vscode.png';

import styles from './technologies.module.scss';

export const Technologies = () => {
  return (
    <div className={styles.tech}>
      <div className={styles.html}>
        <img className={styles.html__img} src={html} alt="html" />
        <Rh className={styles.html__r} />
      </div>
      <div className={styles.css}>
        <img className={styles.css__img} src={css} alt="css" />
        <Rc className={styles.css__r} />
      </div>

      <div className={styles.javascript}>
        <img className={styles.javascript__img} src={javascript} alt="javascript" />
        <Rj className={styles.javascript__r} />
      </div>
      <div className={styles.sublimeText}>
        <img className={styles.sublimeText__img} src={sublimeText} alt="sublimeText" />
        <Rs className={styles.sublimeText__r} />
      </div>
      <div className={styles.vscode}>
        <img className={styles.vscode__img} src={vscode} alt="vscode" />
        <Rvs className={styles.vscode__r} />
      </div>
    </div>
  );
};
